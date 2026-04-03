import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faMobileRetro,faAddressCard,faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Useradd(){
        const[uname,setUname]=useState("");
        const[ulname,setUlname]=useState("");
        const[uphno,setUphno]=useState("");
        const[uimg,setUimg]=useState(null);
        const[uaddress,setUaddress]=useState("");
        const[upass,setUpass]=useState("");


     const handleFileChange=(e)=>{
        setUimg(e.target.files[0]);
     }

    const userAddpage=async(e)=>{
        e.preventDefault();

    const formData=new FormData();
          formData.append('file',uimg);
          console.log(uimg)
        try{
            const res=await axios.post("http://localhost:5252/useruploadimage/",formData,{
                headers:{
                    "Content-Type":'multipart/form-data',
                },
            });

            console.log(res.data.message);
            console.log(res.data);
        let uimage=res.data.message;
        axios.post("http://localhost:5252/useradd/",{uname,ulname,uphno,uimage,uaddress,upass})
        .then(res=>{
            console.log(res.data)
            if(res.data)
            {
                alert("Register Successfully")
            }   
        })
    
        .catch(err=>{
            console.log({message:"Error"+err})
        });
     
    }
 catch{(error=>(console.log(error)));}

}

    return(
        <div className="Useradd">
        <div className="Useradd-heading ">
            <h2>User's Registration</h2>
            <p>Create your Working Current ID here...</p>
        </div>
                <div className="User-add"> 
                    <form onSubmit={userAddpage}>
                <div className="row g-0 user-form " id="user-input">     
                  
                     <div className="mb-5  mt-3">
                        <h3 className="text-center text-white fw-bold ">Welcome You All</h3>
                    </div>               
                        <div className=" col-lg-6 mb-2  p-2">  
                            <span className=" position-absolute m-2 text-white">
                                
                              <FontAwesomeIcon icon={faUser} style={{width:"30px",height:"20px"}}></FontAwesomeIcon>
                            </span>
                            <input type="text" required  name="uname" onChange={((e)=>setUname(e.target.value))} className="form-control text-center fw-bold"  placeholder="Name"/>
                        </div>    

                        <div className=" col-lg-6 mb-2  p-2">
                             <span className=" position-absolute m-2 text-white">
                                
                              <FontAwesomeIcon icon={faUser} style={{width:"30px",height:"20px"}}></FontAwesomeIcon>
                            </span>
                            <input type="text" required name="ulname" onChange={((e)=>setUlname(e.target.value))} className="form-control text-center fw-bold"  placeholder="Last Name"/>
                        </div>
                            
                        <div className=" col-lg-10 p-2 ">
                             <span className=" position-absolute m-2 text-white">
                           
                              <FontAwesomeIcon icon={faMobileRetro} style={{width:"30px",height:"20px"}}></FontAwesomeIcon>
                            </span>
                            <input type="number" required name="uphno" onChange={((e)=>setUphno(e.target.value))} className="form-control text-center fw-bold"  placeholder="Phone Number"/>
                        </div>
                            
                        <div className=" col-lg-10 p-2 ">
                            <label className=" fw-bold form-label text-white ">Upload Home Image</label>
                          <input type="file" required onChange={((e)=>handleFileChange(e))} className="form-control fw-bold bg-transparent" alt="Upload image" />
                        </div>
                            
                        <div className=" text-area text-end  col-lg-10 p-2">
                             <span className=" text-white">
                                <i className="fa-solid "></i>
                              <FontAwesomeIcon icon={faAddressCard} style={{width:"30px",height:"22px"}}></FontAwesomeIcon>
                            </span>
                           <textarea name="uaddress" required  onChange={((e)=>setUaddress(e.target.value))} className="form-control fw-bold" placeholder="Address....."></textarea>
                        </div>
                           
                        
                        <div className=" col-lg-10 p-2">
                             <span className=" position-absolute m-2 text-white">
                                
                              <FontAwesomeIcon icon={faEye} style={{width:"30px",height:"20px"}}></FontAwesomeIcon>
                            </span>
                            
                            <input type="Password" required  name="upass" onChange={((e)=>setUpass(e.target.value))} className="form-control text-center fw-bold"  placeholder="Password"/>
                        </div>       

                        <div className="useraddbutton d-flex justify-content-center mt-3">
                            <button className=" col-lg-7 col-8 btn px-5 py-2" >Submit</button>
                            </div>    
                            
                </div>
                </form>  
                </div>
            </div>
       
    )
}