import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Workerlogin(){
    const [wname,setWname]=useState("");
    const [wpass,setWpass]=useState("");
    const navigate=useNavigate("");
    const workerLog=()=>{
        console.log(wname,wpass)
        axios.post("http://localhost:5252/workerlogin",{wname,wpass})

        .then(res=>{
            console.log(res.data[0]);
           if(res.data[0])
           {
             navigate("/Totaltask/")
           }
           else
           {
             alert("Error is username and password")
           }
          

        })

        .catch(err=>{console.log(err)})
    }


    return(
        <>
        <section className="Workerlogin">
        <div className="container-fluid ">
            <div className=" vh-100 d-flex justify-content-center align-items-center">
             
            <div className="">
                <div className="mt-5 text-center">
                    <h2 className="mb-3 text-white">Login </h2>
                    <h4  className="mb-5 text-white">Welcome All</h4>
                </div>
                <div className=" text-white fw-bold mb-3">
                    <label >User name</label>
                     <input type="text" required onChange={((e)=>setWname(e.target.value))} className=" mt-1 form-control" placeholder="uname" id="" />
                </div>
                <div className=" text-white fw-bold ">
                    <label >password</label>
                     <input type="password" required onChange={((e)=>setWpass(e.target.value))} placeholder="password"  className="mt-1 form-control"  id="" />
                </div>
                <div className=" d-inline-flex">
                    <div className=" text-white">You have no Account <a href="Workeradd">Register</a> here !</div>
                <div className="button text-end mt-4 mb-2">
                    <button type="submit" onClick={workerLog} className="btn btn-outline-primary fw-bold border-2">Login</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        
        </section>
        </>
    )
}