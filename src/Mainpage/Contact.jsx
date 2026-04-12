import React, { useState } from 'react';
import Mainmenu from './Mainmenu';

export default function Contact() {

  const [success,setSuccess]=useState(false);


  const handleSubmit=(e)=>{
    e.preventDefault();

    const form=e.target;
    setSuccess(true);
   
    
    setTimeout(()=>{
      setSuccess(false);
     form.reset();
    },2000);

  }
  return (
    <div>

      <Mainmenu/>
      <section >
        <div className='contact-text'>
        <div className="contact">
          <h1 className='text-center fw-bold pt-5 text-white'>Contact</h1>
        </div>

        <div className="row g-0">

          <div className="col-lg-6 col-12 justify-content-center align-content-center">
            <img src="src/image/18.jpg" className='p-3 rounded-5' alt="Loading..." height="100%" width="100%" />
          </div>

          <div className="col-lg-6 col-12">
            

            <form onSubmit={handleSubmit}>
                <h1 className='text-center fw-bold' style={{marginBottom:"28px"}}>Form</h1>
              <div className="input-text">
                <label>Name</label>
                <input type="text" name="name" required />
              </div>

              <div className="input-text">
                <label>Phone No</label>
                <input type="text" name="phno" required />
              </div>

              <div className="input-text">
                <label>E-mail</label>
                <input type="email" name="email" required />
              </div>

              <div className="input-text">
                <label>Address</label>
                <textarea name="address" required></textarea>
              </div>

              <button type="submit" className=' rounded-5 fw-bolder'>Submit</button>

            </form>
 {success && <div  style={{
      position: "fixed",
      top: "30px",
      right: "40px",
      background: "#caf0f8",
      color: "#023e8a",
      padding: "15px 20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      fontWeight: "bold",
       zIndex: 9999
    }}>Form submitted successfully!</div>}
          </div>
         
        </div>
        </div>
      </section>
    </div>
  )
}
