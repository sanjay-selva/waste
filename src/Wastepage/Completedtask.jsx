import axios from "axios";
import React, { useEffect, useState } from "react";


export default function Completedtask(){
    const [completed,setCompleted]=useState([]);
    

    useEffect(()=>{
        axios.get("http://localhost:5252/completed/")
        .then(res=>{
            setCompleted(res.data)
            console.log(res.data);
        })
        .catch(err=>{
            console.log("Error"+err);
        })
    },[])
    return(
        <>
        <section  class="completed-list pt-4">
<div className="">
   <h2 className="text-center mb-3"> Completed Task List</h2>
</div>
      
      <div class="row header m-2">
        <span>ID</span>
        <span>Name</span>
        <span>Phone No</span>
        <span>Date</span>
        <span>Status</span>
      </div>

      
      
        {
            completed.map((item,i)=>(
<div class="row m-2" key={i}>
           
        <span>{i+1}</span>
        <span>{item.uname}</span>
        <span>{item.uphno}</span>
        <span>{item.udt ? item.udt.split("T")[0] : "" }</span>
        <span>{item.status}</span>
 </div>
         ))
        }
     


    </section>
        </>
    )
}