import React, { useState } from "react";
import axios from "axios";

function Forgetpas(){

    const [newpass,setNewpass]=useState("");
    const [confirmpass,setConfirm]=useState("");
    const [email,setEmail]=useState("");

  
const submitHandle=(e)=>{
    e.preventDefault();
    console.log(email)
    axios.post('http://localhost:5252/emailcheck/',{email})
    .then(res=>{
        console.log(res.data);
        if(res.data.length>0)
        {
            alert("Verified Successfully Move Create password");
        }
        else
        {
             alert("Please Provide a Valid Email Address");
        }
           
        
    })
    .catch(err=>{
        console.log("Error "+err)
    })
}

const oldConfirm=(e)=>{
    e.preventDefault();

    if(!email){
        alert("Please enter your email first")
        return;
    }

    if (!newpass || !confirmpass) {
        alert("Please enter both  fields or Empty");
        return; 
    }
    else(newpass==confirmpass)
    {
        alert("You password Change Successfully")
       
    }

 
   console.log(email,newpass)
    axios.put('http://localhost:5252/updatepassword/',{newpass:newpass,email:email})
    .then(res=>{
        console.log(res.data)
          alert("Password Updated Successfully");
    })
    
    .catch(err=>{console.log(err)})
}


    return(
        <div className="forgetpas">
            <div className="foret-head">
                <h2>Create New Password</h2>
                </div>
            <div className=" text-white text-center">
                <h1>Welcome You all</h1>
            </div>
           <div className="admin-foret">
            <div className="forget-form">

                <div className="">
                <label className="from-label">E-mail</label>
                <input type="email" onChange={((e)=>setEmail(e.target.value))} placeholder="Email" className="form-control" />
            </div>
            <div className="forget-button text-end mt-3">
                <button onClick={submitHandle} type="submit" className="border-3 text-black btn btn-outline-primary w-25 py-2 px-2 rounded-2  form-control fw-bold">submit</button>
            </div>
                <div className="">
                   <label className="from-label">New Password</label>
                   <input type="password" onChange={((e)=>setNewpass(e.target.value))} className="form-control" placeholder="New Password" />
                </div>
                <div className="">
                   <label className="from-label">Confirm Password</label>
                   <input type="password" onChange={((e)=>setConfirm(e.target.value))} className="form-control" placeholder="Confirm Password" />
                </div>
                <div className="forget-button text-end mt-3">
                    <button onClick={oldConfirm} id="liveAlertBtn" className=" border-3 text-black btn btn-outline-primary w-25 py-2 px-2 rounded-2  form-control fw-bold">Confirm it</button>
                </div>

            </div>
           </div>
        </div>
    )
}

export default Forgetpas