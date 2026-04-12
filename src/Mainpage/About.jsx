import React from 'react'
import Mainmenu from './Mainmenu'

export default function About() {
  return (
    <div>
      <Mainmenu/>
      <section>
       
        <div className="about">
            <div className="about-h1">
                <h1>About</h1>
            </div>
            <div className="col-12 about-h1">
                <a className="navbar-brand " href="#">
  <img src="/src/image/29.png" width="48" alt="Loading img" />

  <b className="brand-text" style={{ fontSize:"22px"}}>WASTE HOM*</b>
</a>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                 <ul>
                    <li className=' fw-bolder'>Home</li>
                     <p> <a href="#" className=' text-decoration-none'>Full Detail's</a></p>
                     <p> <a href="#" className=' text-decoration-none'>Image's</a></p>
                      <p> <a href="#" className=' text-decoration-none'>Waste HOM</a></p>

                 </ul>
                </div>

                <div className="col-lg-3 col-12">
                    <ul>
                    <li  className='fw-bolder'>Management</li>
                    <p> <a href="#" className=' text-decoration-none'>Admin Status</a></p>
                     <p> <a href="#" className=' text-decoration-none'>Worke Detail's</a></p>
                      <p> <a href="#" className=' text-decoration-none'>Discipline</a></p>


                 </ul>
                </div>

                <div className="col-lg-3 col-12">
                    <ul>
                         <li  className='fw-bolder'>User's</li>
                   <p className=' g-0'> <a href="" className=' text-decoration-none'>Waste Types</a></p>
                     <p > <a href="#" className=' text-decoration-none'>User's</a></p>
                      <p> <a href="#" className=' text-decoration-none'>Feedback</a></p>
                 </ul>
                </div>
                <div className="col-lg-3 col-12">
                    <ul>
                    <li  className=' fw-bolder'>Contact</li>
                   <p> <a href="#" className=' text-decoration-none'><b>Phno :</b> +91 76565 98276</a></p>
                     <p> <a href="#" className=' text-decoration-none'><b>Email :</b>Sanjay@gmail.com</a></p>
                      <p> <a href="#" className=' text-decoration-none'><b>Web Link :</b>www.http://Waste.com</a></p>


                 </ul>
                </div>

                <div className=" text-center" style={{ marginTop:"4rem", color:"white" }}>
                   <a href=""> copy.mail/2026 </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
