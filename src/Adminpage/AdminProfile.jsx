import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Adminprofile(){
    const aid=localStorage.getItem('aid');
    const[image,setImage]=useState(null);
    const[logout,setLogout]=useState(false);
    const[showPops,SetShowPops]=useState("");

 const[values,setValues]=useState({
      adnam:"",
      adid:"",
      img:"",
      email:"",
      phno:""

    });

useEffect(()=>{
    axios.get('http://localhost:5252/adminprofile/'+aid)
   
.then(res=>{
    console.log(res.data[0])
    setValues(res.data[0])   
})

.catch(err=>console.log("Error"+err))
    

},[aid])
   
    const handleImage=(e)=>{
      setImage(e.target.files[0]);
    }

   const handleUpdate=(e)=>{
    e.preventDefault()
  
  const formData = new FormData();

  
   formData.append("adnam",values.adnam);
   formData.append("adid",values.adid);
   formData.append("email",values.email);
   formData.append("phno",values.phno);

   formData.append("img", values.img);

  if (image) {
    formData.append("image", image);
  }
  

   axios.put('http://localhost:5252/updateadmin/'+aid,formData)

  .then(res=>{
    console.log(res.data)
    if(res.data)
    {
      SetShowPops("success");
    }
  
   })
  
  .catch(err=>{console.log("Error"+err)
    
   });

  };

  const handleLogout=(e)=>{
    localStorage.removeItem("aid");
    window.location.href="/login";
  }


    return(

        
        <div className="admin-profile" >
          <div className="adminprofile">
            
            <h2 >Your are Welcome Admin </h2>
           </div>
           
              {/* Admin profile */}
          <div className=" admin-row">
          <div className="row g-0  ">
       
            <div className="col-lg-4 mt-3 p-5">
          <div className="card " >
            <div className="admin-h2">
              <h2 className=" my-3">Admin Profile</h2>
            </div>
            <div className="admin-image">
            <img className="card-img-top" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"  src={`http://localhost:5252/Upload/image/${values.img}`} alt="Add Profile"  />
            
            <div className="card-body">
              <div className="card-title ">
                <h2 className=" my-4">{values.adnam}</h2>
                <h4 className=" mt-3">{values.adid}</h4>
              </div>
            </div>
            </div>
            </div>       
        </div>


    {/* admin first dashbord  */}
 <div className="col-lg-4 mt-3 p-5 ">
  <div className="card">
  <div className="row g-0  ">
       <div className="admin-h2 mb-4">
              <h2 className=" ">Admin Dashbord</h2>
            </div>
  
    <div className="col-lg-3 col-4 m-2" >
     <Link to="/Totalusers"> <img className="card-img w-75 " src="src/assets/6.png" alt="Upload image" /> </Link> 
      <label className=" form-label mt-3  fw-bold">Total Users</label>
     </div>
     <div className="col-lg-3 col-4 m-2" >
      <Link to="/Totaltask"><img className="card-img w-75 " src="src/assets/7.png" alt="Upload image" /> </Link>
      <label className=" form-label mt-3  fw-bold">Total Waste Tasks</label>
     </div>

     <div className="col-lg-3 col-4 m-2">
     <Link to="/Completedtask"> <img className="card-img w-75 " src="src/assets/9.png" alt="Upload image" /></Link>
       <label className=" form-label mt-3  fw-bold">Completed Tasks</label>
     
     </div>

     <div className="col-lg-3 col-4 m-2">
      <Link to="/Workerdetails"> <img className="card-img w-75 " src="src/assets/10.png" alt="Upload image" /></Link>
       <label className=" form-label  fw-bold mt-3">Total Workers</label>
       
     </div>
     
</div>
</div>
 </div>


 {/* admin second dashbord  */}
 <div className="col-lg-4 mt-3 p-5 ">
    <div className="card">
  <div className="row g-0  ">
   
     <div className="admin-h2 mb-4">
              <h2 className=" ">Add Dashbord</h2>
            </div>

    <div className="col-lg-3 col-4 m-2 " >
      <Link to="/Useradd"> <img className="card-img w-75 " src="src/assets/15.png" alt="Upload image" /></Link>
      <label className=" form-label fw-bold mt-3">Users add </label>
     </div>
     <div className="col-lg-3 col-4  m-2" >
      <Link to="/Wasteadd"> <img className="card-img w-75 " src="src/assets/14.png" alt="Upload image" /></Link>
      <label className=" form-label fw-bold mt-3">Waste Category </label>
     </div>
     <div className="col-lg-3 col-4 m-2">
         <Link to="/Workeradd"> <img className="card-img w-75 " src="src/assets/11.png" alt="Upload image" />   </Link>
        <label className=" form-label fw-bold mt-3">Worker / Driver Add</label>
    
    </div>
     <div className="col-lg-3 col-4 m-2"> 
    <Link to="/Comment">  <img className="card-img w-75 " src="src/assets/12.png" alt="Upload image" /></Link>
       <label className=" form-label fw-bold mt-3">Complaint /Feedback</label>
     
     </div>


</div>
</div>
</div>
 </div>
 </div>
 

 {/* In active member  */}
 <div className="row g-0">
  <div className="col-lg-12 ">
    
    <div className="card">
      <div className="card-title">
        <div className="admin-h2">
      <h2>In-Active Users</h2>
    </div>
      </div>
      <div className="card-footer bg-black">
        <div className="">
          <table className=" text-center table table-responsive table-striped table-dark table-hover">
              <thead>
                <td>Id#</td>
                <td>Name</td>
                <td>User Id</td>
                <td>User Phno</td>
                <td>Add</td>
                <td>Delete</td>
              </thead>
             <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
 </div>



 {/* Admin side bar page  */}
    <div className="">
  
<div className="offcanvas offcanvas-start" data-bs-scroll="true"  id="offcanvasWithBothOptions">
  <div className="offcanvas-header bg-primary d-flex justify-content-center">
    <h2 className="offcanvas-title fw-fw-bolder text-white" id="offcanvasWithBothOptionsLabel">Admin Profile</h2>
  </div>
  <div className="offcanvas-body">
    

    
    <div  className="text-center" id="offcanvas-adminprofile">
        
       
                <img className="px-3" src={`http://localhost:5252/Upload/image/${values.img}`} alt="Add Profile"  />
                
                <h3 className="text-center fw-bold mt-4"> {values.adnam}</h3>
                <h4 className="text-center fw-bolder mt-2">{values.adid}</h4>
                <h4 className="text-center mt-2">{values.email}</h4>
                <h5 className="text-center mt-2">{values.phno}</h5>

            <div className="button-light d-flex justify-content-around my-5">

         <Link className="btn btn-outline-success fw-bold px-4 py-2 rounded-3" 
         data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</Link>
         <button className="btn btn-outline-danger fw-bold  px-4 py-2 rounded-3" onClick={handleLogout}>Logout</button>
            </div>
            <a href="#" className="btn ">admin@gmail.com</a>
            </div>
             
           

  </div>
  </div>
  
</div>


{/* Admin Edit page  */}
<div className="">
    <form onSubmit={handleUpdate}>  
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content" id="modal-img">
      <div className="modal-header justify-content-center">
        <h1 className="modal-title   text-light" id="staticBackdropLabel">Admin Update</h1>

      </div>
      
      <div className="modal-body ">
      <div className="row g-0 " id="modal-input">
       
        <div className="col-lg-12 text-center">
            <img src={`http://localhost:5252/Upload/image/${values.img}`}   className="w-50" alt="Upload img" />
        </div>
        <div className="col-lg-12 text-center">
         <input type="file" onChange={handleImage} />
      </div>

        <div className="col-lg-6 ">
            <div className="p-2">
            <input type="text" value={values.adnam} onChange={((e)=>setValues({...values,adnam:e.target.value}))} className="form-control mt-3" />
            </div>
            <div className="p-2">
            <input type="text"  value={values.adid} onChange={((e)=>setValues({...values,adid:e.target.value}))} className="form-control mt-3 " />
            </div>
        </div>
        <div className="col-lg-6 ">
            <div className="p-2">
            <input type="text" value={values.email} onChange={((e)=>setValues({...values,email:e.target.value}))}  className="form-control mt-3" />
           </div>
           <div className="p-2">
            <input type="text" value={values.phno} onChange={((e)=>setValues({...values,phno:e.target.value}))}  className="form-control  mt-3 "/>
            </div>
        </div>
        
      </div>
      
      </div>
      
      <div className="modal-footer justify-content-around">
           <button type="button"  className="px-4 py-2 btn btn-danger "  data-bs-dismiss="modal">Close</button>

        <button type="submit" className="btn btn-primary px-4 py-2 " >Update</button>
      </div>
      {/* Admin update  */}

{
  showPops && (
   <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"fixed",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    backgroundColor:"rgba(0,0,0,0.7)",
    zIndex:999,
   }}>
    <div
    style={{
      background:"#ffffff",
      padding:"3rem",
      borderRadius:"10px",
      textAlign:"center",
      width:"440px",
      
    }}>

      {showPops === "success" ?(
        <>
        <h2 style={{color:"green",fontWeight:"600px"}} >Update Successfully ✅</h2>
        <p className=" fw-bold">Welcome You All 👍</p>
        <button className="btn btn-outline-primary px-3 py-2" onClick={()=>SetShowPops("")} >Ok</button>
        </>
      ):""}

    </div>


   </div>
  )
}
    </div>
  </div>
</div>

</form> 
                </div>


             </div>
      

    )
}