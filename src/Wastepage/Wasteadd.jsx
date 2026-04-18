import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Wasteadd() {
  const [values, setValues] = useState([]);
  const [time, setTime] = useState("");
  const [uname, setUname] = useState("");
  const [uphno, setUphon] = useState("");
  const [opation, setOpation] = useState("");
  const [udt, setUdt] = useState("");
  const [uid, setUid] = useState(""); 
  const [wastetype, setWastetype] = useState([]);
  const [showopation, setShowopation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const wasteUpdate = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5252/wasteupdate/", { uname, uphno })
      .then(res => {
        if (res.data[0]) {
          const currentUid = res.data[0].uid;
          setUid(currentUid);
          setShowopation(true);
          alert("Select the waste type from the options below.");

          axios.get(`http://localhost:5252/wasteget/${currentUid}`)
            .then(res2 => setValues(res2.data))
            .catch(err => console.log(err));
        } else {
          alert("User not found");
        }
      })
      .catch(err => console.log(err));
  };

  const checkBoxClick = (e) => {
    const { value, checked } = e.target;
    if (checked) setWastetype(prev => [...prev, value]);
    else setWastetype(prev => prev.filter(item => item !== value));
  };

  const wasteSet = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5252/wasteadd/${uid}`, { uname, uphno, opation, udt, wastetype })
      .then(res => {
        if (res.data) {
          alert("Successfully submitted waste!");
          // Reset form instead of reloading page
          setUname('');
          setUphon('');
          setOpation('');
          setUdt('');
          setWastetype([]);
          setShowopation(false);
          setValues([]);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <section>
        <div className="Wasteadd">
          <div className="container-fluid">
            {/* Waste categories */}
            <div className="waste-image d-flex justify-content-center align-content-center">
              <div className="d-inline-flex justify-content-center align-content-center">
                <img src="/assets/25.png" className="container" alt="Loading Image" />
              </div>
              <div className="mb-5 d-inline-flex justify-content-center align-content-center">
                <h2 className="fw-bold">Waste Categorie's</h2>
              </div>
            </div>

            <div className="row g-3 m-5 d-flex justify-content-center align-content-center">
              {/* Organic Waste */}
              <div className="col-lg-5 m-2">
                <div className="card mb-3">
                  <div className="row g-0 WasteCategorie">
                    <div className="col-md-4 d-flex justify-content-center align-content-center">
                      <img src="/assets/24.png" className="mt-3 card-img-start" alt="Loading Image" />
                    </div>
                    <div className="col-md-8 text-start">
                      <div className="card-body">
                        <h5 className="card-title">Organic Waste</h5>
                        <p className="card-text">
                          Organic waste includes food scraps, vegetable and fruit peels, leftover food, and garden waste like leaves and plants.
                        </p>
                        <p className="card-text"><small className="text-body-secondary">Last updated {time} mins</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recyclable Waste */}
              <div className="col-lg-5 m-2">
                <div className="card mb-3">
                  <div className="row g-0 WasteCategorie">
                    <div className="col-md-4 d-flex justify-content-center align-content-center">
                      <img src="/assets/27.png" className="mt-3 card-img" alt="Loading Image" />
                    </div>
                    <div className="col-md-8 text-start">
                      <div className="card-body">
                        <h5 className="card-title">Recyclable Waste</h5>
                        <p className="card-text">
                          Recyclable waste consists of materials such as paper, plastic bottles, glass containers, and metal cans.
                        </p>
                        <p className="card-text"><small className="text-body-secondary">Last updated {time} mins</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hazardous Waste */}
              <div className="col-lg-5 m-2">
                <div className="card mb-3">
                  <div className="row g-0 WasteCategorie">
                    <div className="col-md-4 d-flex justify-content-center align-content-center">
                      <img src="/assets/26.png" className="card-img mt-3" alt="Loading Image" />
                    </div>
                    <div className="col-md-8 text-start">
                      <div className="card-body">
                        <h5 className="card-title">Hazardous Waste</h5>
                        <p className="card-text">
                          Hazardous waste includes harmful materials like batteries, chemicals, paint, and medical waste.
                        </p>
                        <p className="card-text"><small className="text-body-secondary">Last updated {time} mins</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-5 p-4">
                <div data-bs-toggle="tooltip" data-bs-placement="left"
                     title="Keep the waste outside your house for the collection service."
                     className="button-waste d-flex justify-content-center align-content-center">
                  <button type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          className="btn btn-outline-warning border-3 fw-bold">
                    Dispose Waste 🥏
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header bg-dark-subtle">
                  <h1 className="modal-title fs-1">Save Your Detail's</h1>
                  <button type="button" className="btn-close bg-danger" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body">
                  <div className="row g-0 d-flex justify-content-center align-content-center m-3 p-3">
                    <b>Give Your details :</b>

                    {!showopation && (
                      <>
                        <div className="col-lg-12 col-12 m-3">
                          <input type="text" className="form-control" onChange={(e) => setUname(e.target.value)} placeholder="name" required />
                        </div>
                        <div className="col-lg-12 col-12 m-3">
                          <input type="text" className="form-control" onChange={(e) => setUphon(e.target.value)} placeholder="phone no" required />
                        </div>
                        <div className="modal-footer">
                          <button type="button" onClick={wasteUpdate} className="btn btn-primary" data-bs-dismiss={showopation ? "modal" : undefined}>Status ok</button>
                        </div>
                      </>
                    )}

                    {showopation && values[0] && (
                      <div>
                        <div className="text-center d-flex mb-3">
                          <div className="me-3">
                            <b><label className="p-2 form-label">Your ID</label></b>
                            <input type="text" className="shadow-none transparent-input border-white form-control text-center" value={values[0].uid} readOnly />
                          </div>
                          <div>
                            <b><label className="form-label p-2">Waste Status</label></b>
                            <select className="form-control" defaultValue="" onChange={(e) => setOpation(e.target.value)}>
                              <option value="" disabled>Select option</option>
                              <option>Drop waste</option>
                            </select>
                          </div>
                        </div>

                        <label className="fw-bold mt-2">Select Waste Types / Date:</label>
                        <div className="mt-2 row g-0 d-flex justify-content-center">
                          {["Plastic", "Paper", "Metal", "Glass", "Organic Waste", "E-Waste"].map(type => (
                            <div className="form-check m-2 col-lg-3 col-5" key={type}>
                              <input className="form-check-input" type="checkbox" value={type} onChange={checkBoxClick} />
                              <label className="form-check-label">{type}</label>
                            </div>
                          ))}

                          <div className="d-flex justify-content-around mt-3 w-100">
                            <div>
                              <input type="date" className="form-control" onChange={(e) => setUdt(e.target.value)} />
                            </div>
                            <div>
                              <button type="submit" className="btn btn-primary" onClick={wasteSet} data-bs-dismiss="modal">Save Changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}