import axios from "axios";
import React, { useState } from "react";


 export default function Workeradd(){
    const [name,setName]=useState("");
    const [uname,setUname]=useState("");
    const [workid,setWorkid]=useState("");
    const [gender,setgender]=useState("");
    const [vehicl,setVehicle]=useState("");
    const [lcation,setLocation]=useState("");
    const [phno,setPhno]=useState("");
    const [pass,setPass]=useState("");
    const [pops,setPops]=useState("");

    const workSubmit=(e)=>{
        e.preventDefault();

        axios.post("http://localhost:5252/workeradd",{name,uname,workid,gender,vehicl,lcation,phno,pass})
    .then(res=>{console.log(res.data)

        alert("Save data");
        setPops("success")
        if("success")
            setInterval(() => {
                 window.location.reload();
            }, 2000);
           
    })
    
    
    .catch(err=>{console.log("Error "+err)
    });
    }
    return(
        
        <section className="Workeradd">
        <div className="container-fluid">
            <div className="row g-0 p-2 ">
                <div className="col-lg-7 p-4 " >
                    <div className=" text-center mb-4">
                        <h2  className="">Register</h2>
                        <h4 className="">Welcome All</h4>
                    </div>
                    <form onSubmit={workSubmit} className="p-5 border rounded-2 text-black font-monospace">
                

                    <div className=" row mb-3 align-items-center">
                        <label className=" col-3  col-form-label">Name </label>
                        <div className="col-7">
                            <input onChange={((e)=>setName(e.target.value))} required placeholder="name" className="  form-control" type="text" />
                        </div>
                
                    </div>
                    
                    <div className=" row align-items-center mb-3">
                        <label className="col-3 col-form-label ">User Name </label>
                        <div className=" col-7">
                            <input onChange={((e)=>setUname(e.target.value))} required placeholder="user name" className=" form-control" type="text" />
                        </div>
                
                    </div>

                    <div className=" row align-items-center mb-3">
                        <label className="col-3 ">Worker I'd </label>
                        <div className=" col-7 col-form-label ">
                <input onChange={((e)=>setWorkid(e.target.value))} placeholder="I'd" required className=" form-control" type="number" />
                </div>
                    </div>


                    <div className="row align-items-center mb-3">
                    <label className="col-3 col-form-label" >Gender</label>
                    <div className="col-7 col-form-label">
                    <select onChange={((e)=>setgender(e.target.value))} className=" form-control">
                        <option> Select Gender</option>
                        <option >Male</option>
                        <option >Female</option>
                        <option >Other</option>
                    </select>
                    </div>
                    </div>

                    <div className="row align-items-center mb-3">
                         <div className="">
                    <b> *Required for all commercial vehicles</b>
                </div>
                    <label className="col-3 col-form-label">Vehicle No. </label>
                    <div className="col-7">
                         <input onChange={((e)=>setVehicle(e.target.value))} className=" form-control " placeholder=" Enter vehicle number" type="text" />
                    </div>
                
                    </div>
                
            
               <div className="row align-items-center mb-3">
               
                    <label className="col-3 col-form-label">Location </label>
                    <div className="col-7">
                        <textarea onChange={((e)=>setLocation(e.target.value))} required placeholder="Address."  className=" form-control"></textarea>
                    </div>
                
                    </div>


                <div className=" row align-items-center mb-3">
                        <label className=" col-3 col-form-label">Phone No</label>
                        <div className=" col-7">
                            <input onChange={((e)=>setPhno(e.target.value))} required placeholder="+91:xxxxxxx" className=" form-control" type="number" />
                        </div>
                
                    </div>


               <div className=" row align-items-center">
                        <label className="col-3">Password </label>
               <div className="col-7">
                 <input onChange={((e)=>setPass(e.target.value))} required className=" form-control " placeholder=" password" type="password" />
               </div>
               
               <div className=" d-inline-flex mt-4">
                <div className="">
                    Do You have an Account You can <a href="Workerlogin">Login</a> here
                    </div>
                    <div className="mt-5 mb-2">
                         <button className="Submit btn btn-outline-primary border-2 fw-bold">Submit</button>
                    </div>
            

               
               </div>

              {pops && (
  <div
    style={{
      position:"fixed",
      top:0,
      left:0,
      width:"100%",
      height:"100%",
      backgroundColor:"rgba(0,0,0,0.6)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex:999
    }}
  >
    <div
    style={{
        background:"white",
        width:"500px",
        textAlign:"center",
        padding:"10px",
        borderRadius:"15px"
    }}>
        {pops === "success" ?(
            <>
            <h2>Welcome Worker</h2>
            <h3  style={{color:"green"}}>SuccessFully Save Data  🎉</h3>
         
         <button onClick={()=>setPops("")}></button>   
         </>): ""
            }


    </div>
  </div>
)}
                    </div>
                </form>
              
                </div>
                
                <div className="  col-lg-5 d-flex justify-content-center align-items-center">
    <img 
        src="src/image/18.jpg" 
        className="p-4 img-fluid m-3 rounded-5" 
        alt="Vehicle" 
    />
</div>
            </div>
        </div>
       
        </section>
    )
}