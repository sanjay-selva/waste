import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Totalusers() {
  const [values, setValues] = useState([]);
  const [showpops, setShowpops] = useState(""); // popup type: Success, Failed, Delete
  const [userimg, setUserimg] = useState(null);
  const [olddata, setOlddata] = useState(null);

  const [userupdate, setUserupdate] = useState({
    uid: "",
    uname: "",
    uphno: "",
    uaddress: "",
    uimg: ""
  });

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5252/totalusers/");
      setValues(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFileChange = (e) => setUserimg(e.target.files[0]);

  // Update user
  const updateUsers = async () => {
  try {
    let formData = new FormData();
    formData.append("uname", userupdate.uname);
    formData.append("uphno", userupdate.uphno);
    formData.append("uaddress", userupdate.uaddress);
    if (userimg) formData.append("userimg", userimg);
    else formData.append("uimg", userupdate.uimg);

    await axios.put(`http://localhost:5252/updateuser/${userupdate.uid}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Determine popup type
    if (
      userupdate.uname === olddata.uname &&
      userupdate.uphno === olddata.uphno &&
      userupdate.uaddress === olddata.uaddress &&
      !userimg
    ) {
      setShowpops("Failed");
    } else {
      setShowpops("Success");
      fetchUsers();
    }

    // Hide modal
    const modalEl = document.getElementById("exampleModal");
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    setTimeout(() => setShowpops(""), 2500);
  } catch (err) {
    console.log(err);
  }
};
  // Delete user
  const userDelete = async (uid) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:5252/userdelete/${uid}`);
      setValues(values.filter(user => user.uid !== uid));
      setShowpops("Delete");
      setTimeout(() => setShowpops(""), 2500); // auto close popup
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="table-color">
        <div className="tabletotal bg-body-secondary p-2">
          <div className="text-center bg-dark text-primary border rounded-2 m-4">
            <h1>Total Users / Details</h1>
            <h5 className="text-info">Every member can be identified easily.</h5>
          </div>

          <div className="table-responsive w-100 mt-3">
            <table className="table text-center table-hover table-bordered table-dark">
              <thead>
                <tr>
                  <th>SI no</th>
                  <th>Home Img</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th className="text-success">Edit</th>
                  <th className="text-danger">Delete</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {values.map((data, i) => (
                  <tr key={data.uid}>
                    <td className="  align-content-center">{i + 1}</td>
                    <td className="  align-content-center">
                      <img
                        src={`http://localhost:5252/Upload/image/${data.uimg}`}
                        alt="User"
                        width="80"
                      />
                    </td>
                    <td  className="  align-content-center">{data.uname}</td>
                    <td className="  align-content-center">{data.uphno}</td>
                    <td className="  align-content-center">{data.uaddress}</td>
                    <td className="  align-content-center">
                      <FontAwesomeIcon
                        icon={faUserPen}
                        style={{ color: "green", cursor: "pointer" }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setUserupdate(data);
                          setOlddata(data);
                          setUserimg(null);
                        }}
                      />
                    </td>
                    <td className="  align-content-center">
                      <FontAwesomeIcon
                        icon={faTrashArrowUp}
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => userDelete(data.uid)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-5">
            <h2 className=" text-white">Total Users Count: {values.length}</h2>
            <Link to="/Adminprofile">
              <button className="btn btn-light fw-bold mt-3">Go Back</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update User Data</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="row g-0">
                <div className="col-6">
                  <div className="mb-2">
                    <label>ID</label>
                    <input type="text" readOnly className="form-control" value={userupdate.uid} />
                  </div>
                  <div className="mb-2">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userupdate.uname}
                      onChange={(e) =>
                        setUserupdate({ ...userupdate, uname: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <label>Home Image</label>
                    <img
                      src={`http://localhost:5252/Upload/image/${userupdate.uimg}`}
                      alt="User"
                      className="w-75 mb-2"
                    />
                    <input type="file" onChange={handleFileChange} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-2">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userupdate.uphno}
                      onChange={(e) =>
                        setUserupdate({ ...userupdate, uphno: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userupdate.uaddress}
                      onChange={(e) =>
                        setUserupdate({ ...userupdate, uaddress: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-success" onClick={updateUsers}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popups */}
      {showpops && (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 2000,
    }}
  >
    <div
      style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        width: "350px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
    >
      {showpops === "Success" && (
        <>
          <h2 style={{ color: "green" }}>Update Successfully ✅</h2>
          <p>Your changes have been saved successfully!</p>
        </>
      )}
      {showpops === "Failed" && (
        <>
          <h2 style={{ color: "red" }}>No Changes ❌</h2>
          <p>Please modify some fields before updating.</p>
        </>
      )}
      {showpops === "Delete" && (
        <>
          <h2 style={{ color: "orange" }}>Deleted Successfully 🗑️</h2>
          <p>The user has been removed from the database.</p>
        </>
      )}
      
      <button
        style={{
          marginTop: "15px",
          padding: "8px 25px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: "#007bff",
          color: "white",
        }}
        onClick={() => setShowpops("")}
      >
        OK
      </button>
    </div>
  </div>
)}
    </>
  );
}