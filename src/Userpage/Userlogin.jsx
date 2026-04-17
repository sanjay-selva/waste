import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState} from "react";
import {faDumpsterFire} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";

export default function Userlogin(){

    const[ulname,setUlname]=useState("");
    const[upass,setUpass]=useState("");
    const[popupType, setPopupType] = useState(""); 


    const userLoginSubmit=(e)=>{
        e.preventDefault();

    axios.post("http://localhost:5252/userloginsubmit",{ulname,upass})
    .then(res=>{
        console.log(res.data.length>0)
       if(res.data.length>0){
        setPopupType("success");
    }else{
        setPopupType("fail");
    }
            
        
    })

    .catch(err=>{
        console.log("Error"+err)
    })
    }
    return(
        <div className="">
            
                <div className="row g-0 ">
                    <div className="userlogin">
                    
                        <div className="col-lg-6 userlogin-img">
                            <div className="userlogin-img-login">
                                <div className=" d-flex justify-content-center">
                          <img src="src/assets/17.jpg"   alt="Loading Img" />
                          </div>
                          <h2>Door-to-Door Collection....</h2>
                         <p> <FontAwesomeIcon icon={faDumpsterFire} style={{width:"58px" ,height:"60px"}}></FontAwesomeIcon> Drop it Here</p>
                         <h4>Waste collection is the process of gathering waste from residential and commercial areas.</h4>
                        </div>
                        </div>
                  
        
                    <div className="userloginform ">
                        
                    <div className="col-lg-6 g-0 userlogin-form">
                       <div className="userloginform-h1">
                       <h1> Welcome You All</h1>
                       </div>

                                        
                    <div className="userloginform-h2">
                        <h2>Login</h2>
                        <p>Sir / Mam</p>
                    </div>

                   
                    <div className="mt-2 p-2">
                        <label className="form-label  ms-2 m-0">Lastname</label>
                        <input type="text" onChange={((e)=>setUlname(e.target.value))} className="form-control"  placeholder="Lastname" />
                    </div>
                    <div className="mt-2 p-2">
                        <label className="form-label ms-2 m-0">Password</label>
                        <input type="password" onChange={((e)=>setUpass(e.target.value))} className="form-control" placeholder="Password" />
                    </div>

                    <div className="userlogin-button m-3 ">
                        <button className="btn px-5 py-2 btn-outline-primary" onClick={userLoginSubmit}>Login</button>
                    </div>

                    </div>

                    </div>
{popupType && (
    <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
    }}>
        <div style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center",
            width: "400px"
        }}>
            {popupType === "success" ? (
                <>
                    <h3 style={{color:"green"}}>Login Successful ✅</h3>
                    <p>Welcome User 🎉</p>
                    <button 
                        className="btn btn-success mt-2"
                        onClick={() => setPopupType("")}
                    >
                        OK
                    </button>
                </>
            ) : (
                <>
                    <h3 style={{color:"red"}}>Login Failed ❌</h3>
                    <p>Invalid Lastname or Password</p>
                    <button 
                        className="btn btn-danger mt-2"
                        onClick={() => setPopupType("")}
                    >
                        Try Again
                    </button>
                </>
            )}
        </div>
    </div>
)}
                    
                </div>
            </div>
        </div>
    )
}