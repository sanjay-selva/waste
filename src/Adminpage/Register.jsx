import React, { useState } from "react";
import axios from "axios";

function Register(){
    const[adname,setAdame]=useState("");
    const[adid,setAdid]=useState("");
    const[img,setImg]=useState(null);
    const[email,setEmail]=useState("");
    const[phno,setPhno]=useState("");
    const[pass,setPass]=useState("");

    const handleFileChange=(e)=>{
        setImg(e.target.files[0])
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const formData=new FormData();
        formData.append('file',img);
        console.log(img)


        try{

            const response=await axios.post('http://localhost:5252/Uploading',formData,{
                headers:{
                    "Content-Type":'multipart/form-data',
                },
            });

            console.log(response.data.message);
            console.log(response.data)
            let image=response.data.message;

              axios.post('http://localhost:5252/Register/',{adname,adid,image,email,phno,pass})
        .then(response=>{
            console.log(response)
            if(response)
            {
            alert("The Register Sucessfully ")   
             setTimeout(() => window.location.reload(), 2000);
            }
        })
        .catch(err=>{
            console.log({message:err+"Error"})
        })
        }
        
        catch(error)
        {
            console.log(error,'File Uploading Error..')
        }
   
       
      
    }
     
    return(
       
        <div className="admin-reg">
            <div className="admin-head">
            <h2 className="">Admin Register</h2>
                    <h3>Welcome You all</h3>
                    </div>
            <div className="admin-register">
                
                <div className="register-form">
                    <form onSubmit={handleSubmit}>
                    <div className=" ">
                        <label className="form-label mb-0">Name</label>
                        <input type="text" className="form-control"  onChange={((e)=>setAdame(e.target.value))} placeholder="Name" required/>
                    </div>

                    <div className="mt-3">
                        <label className="form-label mb-0">Admin ID</label>
                        <input type="number" className="form-control" onChange={((e)=>setAdid(e.target.value))} placeholder="Admin ID" required/>
                    </div>

                    <div className="mt-3">
                        <label className="form-label mb-0" >Admin Image</label>
                        <input type="file" className="form-control" name="image"   onChange={((e)=>handleFileChange(e))} required />
                    </div>

                    <div className="mt-3">
                        <label className="form-label mb-0">E-mail</label>
                        <input type="email" className="form-control" onChange={((e)=>setEmail(e.target.value))} placeholder="email.com" required/>
                    </div>

                    <div className="mt-3">
                        <label className="form-label mb-0">Phone Number</label>
                        <input type="number" className="form-control"  onChange={((e)=>setPhno(e.target.value))} placeholder="+91 XXXXXXXXXX" required/>
                    </div>

                    <div className="mt-3">
                        <label className="form-label mb-0">Password</label>
                        <input type="password" className="form-control"  onChange={((e)=>setPass(e.target.value))} placeholder="Password" required/>
                    </div>

                    <div className="mt-2 text-center">
                        <button className="  w-50 form-control mt-5 fw-bold btn btn-outline-primary" >Sign Up</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
       
    )
}
export default Register