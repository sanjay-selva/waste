import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Totaltask() {
  const [values, setValues] = useState([]);
  const [pending,setPending] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5252/totaltask")
      .then(res => {
        const users = res.data.users;       // all users
        const wastes = res.data.wastes;     // all waste submissions

        // Merge waste submissions with users
        const mergedData = wastes.map((waste, index) => {
          const user = users.find(u => u.uid === waste.id); // match by uid
          return {
            ...waste,
            uname: user?.uname || "",
            uimg: user?.uimg || "",
            uaddress: user?.uaddress || "",
            uphno: user?.uphno || "",
          };
        });

        setValues(mergedData);
      })
      .catch(err => console.log(err));
  }, []);




  // update function  
  const pendingChange= async (id)=>{
    try {
      const res= await axios.put("http://localhost:5252/updatepending",{id})
    
     setValues(res.data[0])
      setPending(prev => prev + 1);
      window.location.reload();
    }
    catch(err){
      console.log("Error is updating",err);
    }
  }



  
  return (
    <>
      <div className="">
        <div className="wastetask">
          <h2 className="bg-black text-light text-center p-3">Task</h2>
        </div>
        <div className="px-2 table-responsive">
          <table className="table table-active table-striped table-hover text-center">
            <thead>
              <tr>
                <th>Sno:</th>
                <th>Name</th>
                <th>Home Img</th>
                <th>Phone no</th>
                <th>Address</th>
                <th>waste's</th>
                <th>Date</th>
                <th>In completed</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {values.map((item, i) => (
                <tr key={i}>
                  <td className="table-group-divider align-content-center">{i + 1 + "."}</td>
                  <td className="table-group-divider align-content-center">{item.uname}</td>
                  <td className="table-group-divider align-content-center">
                    <img
                      className="w-50 text-center rounded-2"
                      src={`http://localhost:5252/Upload/image/${item.uimg}`}
                      alt="LoadingHome"
                    />
                  </td>
                  <td className="table-group-divider align-content-center">{item.uphno}</td>
                  <td className="table-group-divider align-content-center">{item.uaddress}</td>
                  <td className="table-group-divider align-content-center">{item.wastety}</td>
                  <td className="table-group-divider align-content-center">{item.udt ? item.udt.split("T")[0] : ""}</td>
                  <td className="table-group-divider align-content-center">
                    <FontAwesomeIcon onClick={()=>pendingChange(item.id)} icon={faSquareCheck} beatFade style={{ color: "green", width: "35px", height: "25px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}