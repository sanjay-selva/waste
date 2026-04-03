import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login(){

    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const navigate=useNavigate()
    const loginProcess=(e)=>{
         e.preventDefault();
           console.log(email,pass)
         axios.post('http://localhost:5252/adminlogin/',{email,pass})
         .then(res=>{
            console.log(res.data.length>0)
            console.log(res.data)
         if(res.data.length>0)
         {
            localStorage.setItem('aid',res.data[0].id)
            navigate("/Adminprofile/")
         }
         else
        {
            alert("The Statement is Wrong")
        }
         })
         .catch(err=>{console.log("Error"+err)})


    }
       


    return(
        <div className=" login-image" >
            
             <div className="login-heard">
                <h2>Login</h2>

                <h3>Welcome Back !</h3>

                </div>
              <div className="admin-login">
                <div className="login-form" >
                   <form onSubmit={loginProcess}>
                    <div className="">
                        <label className="form-label mb-0">E-mail</label>
                        <input type="email" name="E-mail" onChange={((e)=>setEmail(e.target.value))} className="form-control" placeholder="email.com" required  />
                    </div>

                    <div className=" mt-3">
                        <label className="form-label mb-0">Password</label>
                        <input type="password" name="Password" onChange={((e)=>setPass(e.target.value))} className="form-control" placeholder="password" required />
                    </div>

                    <div className="mt-3 d-block">
                        You have on account 
                        <a href="Register" className="btn text-primary fw-bold"> Register </a> and
                        <a href="Forgetpas" className="btn text-primary fw-bold"> Forget  Password</a>
                    </div>
                   <div className="mt-3 login-button  text-center" >
                     <button className="w-50 form-control btn btn-outline-primary fw-bold"  >Login</button>
                   </div>
                   </form>
                </div>
                
                </div>
            </div>
        
    )
}
export default Login