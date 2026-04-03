import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Workerdetails(){
    const [detail,setDetail]=useState([]);
  

        useEffect(()=>{
        
            axios.get("http://localhost:5252/workerlist/")
            .then(res=>{
                setDetail(res.data)
                console.log(res.data)})
            .catch(err=>{console.log("Error"+err)})
        },[])

    return(
        <>
 <section className="workerdetails">
  <div className="container">
    <div className="text-center">
      <h2>Worker List</h2>
      <h3 className="mt-3">Active Works</h3>
    </div>

    <div className="row g-0 justify-content-around">
      {detail.map((work, i) => (
        <div key={i} className="col-lg-4 col-12  mt-4  p-4">
          <div className="card border-3 border-info-subtle h-100 worker-card text-center">
            <div className=" card-header border-2 border-secondary fs-4 fw-bold">
              Worker
            </div>
            <div className="card-body">
              <h5 className="card-title ">{work.wname}</h5>
              <b className="card-text ">
               {work.wid}
              </b>
              <p>{work.wgender}</p>
              <p>{work.wlocation}</p>
              <p>{work.wphno}</p>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <div className="">
                     <button className="btn btn-primary">Edit</button>
                </div>
                <div className="">
                     <button className="btn btn-danger">Delete</button>
                </div>
             
             
            </div>
             
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        
        </>
    )
}