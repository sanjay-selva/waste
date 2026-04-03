import React from "react";

export default function Mainmenu(){



    return(
        <>
        
        <section className="custom-navbar">
          
            <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container">
    
    <a className="navbar-brand " href="#">
  <img src="/src/image/29.png" width="48" alt="Loading img" />

  <b className="brand-text">WASTE HOM*</b>
</a>

    <button className="navbar-toggler m-2 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
      <span className="navbar-toggler-icon text-dark"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
       
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

  <li className="nav-item m-1">
    <a className="nav-link multi-color-link active" href="Mainpage">Home</a>
  </li>

  {/* Management Dropdown */}
  <li className="nav-item dropdown multi-color-link m-1">
    <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown">
      Management
    </a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="Management">Admin Panel</a></li>
      <li><a className="dropdown-item" href="Workers">Worker Panel</a></li> 
    </ul>
  </li>
 
  {/* User */}
  <li className="nav-item dropdown multi-color-link m-1">
    <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown">
      User
    </a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="Wastes">Waste Type</a></li>
      <li><a className="dropdown-item" href="Comment">Customer Feedback</a></li>
    </ul>
  </li>

  {/* Info Dropdown */}
  <li className="nav-item dropdown multi-color-link m-1">
    <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown">
      Info
    </a>
    <ul className="dropdown-menu">
       <li><a className="dropdown-item" href="Contact">Contact</a></li>
      <li><a className="dropdown-item" href="#">About</a></li>
     
    </ul>
  </li>

</ul>
     <div className="">
    <a href="/Register"><button className="btn fw-bold py-2 px-4 m-1">Register</button></a>
     </div>
     <div className="">
    <a href="/Login"><button className="btn fw-bold py-2 px-4 m-1">Sign Up</button></a>
     </div>
    </div>
  </div>
</nav>

        </section>
        
      
       
        </>
    )
}