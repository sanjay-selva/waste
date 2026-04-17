import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Mainmenu from './Mainmenu'

export default function Mainfrnd() {

   const [commt,setCommt]=useState("");
    const [success,setSuccess]=useState(false);
  
  
    const handleSubmit=(e)=>{
      e.preventDefault();
  
      setSuccess(true);
     
      
      setTimeout(()=>{
        setSuccess(false);
        e.target.reset();
      },2000)
    }
  
    const commentSubimt=(e) =>{
      e.preventDefault();
      axios.post("http://localhost:5252/comment",{commt})
      .then(res=>{
        console.log(res.data);
        alert("Feedback Sent...!");
        window.location.reload(); 
      })
      .catch(err=>{console.log(err)})
    }
  return (
    <section>
      <Mainmenu/>
      <div className="mainpage">
      
      
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">


          <div className="carousel-item active" data-bs-interval="1000">
            <div className=" carousel-img-wrapper ">
            <img src="src/assets/20.jpg"  className=" carousel-img "  alt="Loading..." />
            </div>
            <div className="carousel-caption">
              
                <div className="row">

                  <div className="col-12 col-lg-8 mb-5 text-start ">

                    <h1 className="brand-h1 d-inline-block  modal-body text-start">WASTE HOM*</h1>
                   
                    
                 <div >
          
                  <b className=" text-start ">Door to Door collection <span className='color-line'> |</span> Street bins <span className='color-line'> |</span> Dump yards <span className='color-line'> |</span> Recycling Centers <span className='color-line'> |</span> Special Collections Points ...? </b>  </div>
                    <div className="">
                      <p className="mt-3 fw-bold text-start d-none d-lg-block ">Waste collection is an essential service that helps keep our environment clean and healthy. It involves the systematic gathering of <mark className=' text-primary bg-black'> waste  materials from homes, industries, and public places Proper waste collection prevents the spread of diseases and reduces pollution in air, water, and soil .</mark> It also plays a key role in recycling, where reusable materials are separated and processed to conserve natural resources. Efficient waste management systems support sustainable development and improve the overall quality of life in communities.</p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-3 justify-content-center align-content-center">
                    <div className="pb-3">
                       <img src="src/assets/29.png" className='my-3 ms-2 logo-icon' width="250" alt="Loading img" />
                    </div>
                 
                    <button className="btn futuristic-btn text-end" data-bs-toggle="modal" data-bs-target="#startModal">
                      Get Start
                    </button>
                  </div>
                  </div>
              </div>
            </div>
            


          <div className="carousel-item " data-bs-interval="2000">
           <div className=" carousel-img-wrapper ">
            <img src="src/assets/18.jpg"  className=" carousel-img " alt="Loading..." />
           </div>
            <div className="carousel-caption">
              

                <div className="row ">

                  <div className="col-12 col-lg-8 mb-5 text-start">

                    <h1 className="brand-h1 d-inline-block modal-body text-start">WASTE HOM*</h1>
                   
                    
                 <div >
                  <b className=" text-start ">Door to Door collection <span className='color-line'> |</span> Street bins <span className='color-line'> |</span> Dump yards <span className='color-line'> |</span> Recycling Centers <span className='color-line'> |</span> Special Collections Points ...? </b>   </div>
                    <div className="">
                       <p className="mt-3 fw-bold text-start d-none d-lg-block ">Waste collection is an essential service that helps keep our environment clean and healthy. It involves the systematic gathering of <mark className=' text-primary bg-black'> waste  materials from homes, industries, and public places Proper waste collection prevents the spread of diseases and reduces pollution in air, water, and soil .</mark> It also plays a key role in recycling, where reusable materials are separated and processed to conserve natural resources. Efficient waste management systems support sustainable development and improve the overall quality of life in communities.</p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-3 justify-content-center align-content-center">
                    <div className="pb-3">
                       <img src="src/assets/29.png" className='my-3 ms-2 logo-icon' width="250" alt="Loading img" />
                    </div>
                 
                    <button className="btn futuristic-btn " data-bs-toggle="modal" data-bs-target="#startModal">
                      Get Start
                    </button>
        
                  </div>
                 
                  </div>
              </div>
            </div>
           

     
                <div className="carousel-item " data-bs-interval="2000">
           <div className=" carousel-img-wrapper ">
            <img src="src/assets/16.jpg"  className=" carousel-img " alt="Loading..." />
         </div>
            <div className="carousel-caption">
           

                <div className="row ">

                  <div className="col-12 col-lg-8 mb-5 text-start">

                    <h1 className="brand-h1 d-inline-block modal-body text-start">WASTE HOM*</h1>
                   
                    
                 <div >
                  <b className=" text-start ">Door to Door collection <span className='color-line'> |</span> Street bins <span className='color-line'> |</span> Dump yards <span className='color-line'> |</span> Recycling Centers <span className='color-line'> |</span> Special Collections Points ...? </b>   </div>
                    <div className="">
                       <p className="mt-3 fw-bold text-start d-none d-lg-block ">Waste collection is an essential service that helps keep our environment clean and healthy. It involves the systematic gathering of <mark className=' text-primary bg-black'> waste  materials from homes, industries, and public places Proper waste collection prevents the spread of diseases and reduces pollution in air, water, and soil .</mark> It also plays a key role in recycling, where reusable materials are separated and processed to conserve natural resources. Efficient waste management systems support sustainable development and improve the overall quality of life in communities.</p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-3 justify-content-center align-content-center">
                    <div className="pb-3">
                       <img src="src/assets/29.png" className='my-3 ms-2 logo-icon' width="250" alt="Loading img" />
                    </div>
                 
                    <button className="btn futuristic-btn" data-bs-toggle="modal" data-bs-target="#startModal">
                      Get Start
                    </button>
        
                  </div>
                 
                  </div>
              </div>
            </div>
           
                

        
                <div className="carousel-item " data-bs-interval="2000">
           <div className=" carousel-img-wrapper ">
            <img src="src/assets/23.jpg"  className=" carousel-img " alt="Loading..." />
          </div>        
          <div className="carousel-caption">
              

                <div className="row ">

                  <div className="col-12 col-lg-8 mb-5 text-start">

                    <h1 className="brand-h1 d-inline-block modal-body text-start">WASTE HOM*</h1>
                   
                    
                 <div >
                  <b className=" text-start ">Door to Door collection <span className='color-line'> |</span> Street bins <span className='color-line'> |</span> Dump yards <span className='color-line'> |</span> Recycling Centers <span className='color-line'> |</span> Special Collections Points ...? </b>   </div>
                    <div className="">
                       <p className="mt-3 fw-bold text-start d-none d-lg-block ">Waste collection is an essential service that helps keep our environment clean and healthy. It involves the systematic gathering of <mark className=' text-primary bg-black'> waste  materials from homes, industries, and public places Proper waste collection prevents the spread of diseases and reduces pollution in air, water, and soil .</mark> It also plays a key role in recycling, where reusable materials are separated and processed to conserve natural resources. Efficient waste management systems support sustainable development and improve the overall quality of life in communities.</p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-3 justify-content-center align-content-center">
                    <div className="pb-3">
                       <img src="src/assets/29.png" className='my-3 ms-2 logo-icon' width="250" alt="Loading img" />
                    </div>
                 
                    <button className="btn futuristic-btn" data-bs-toggle="modal" data-bs-target="#startModal">
                      Get Start
                    </button>
        
                  </div>
                 
                  </div>
              </div>
            </div>
            

             
             
             <div className="carousel-item " data-bs-interval="2000">
          <div className=" carousel-img-wrapper ">
            <img src="src/assets/5.jpg"  className=" carousel-img " alt="Loading..." />
          </div>
            <div className="carousel-caption">
             
                <div className="row ">

                  <div className="col-12 col-lg-8 mb-5 text-start">

                    <h1 className="brand-h1 d-inline-block modal-body text-start">WASTE HOM*</h1>
                   
                    
                 <div >
                  <b className=" text-start ">Door to Door collection <span className='color-line'> |</span> Street bins <span className='color-line'> |</span> Dump yards <span className='color-line'> |</span> Recycling Centers <span className='color-line'> |</span> Special Collections Points ...? </b>   </div>
                    <div className="">
                       <p className="mt-3 fw-bold text-start d-none d-lg-block ">Waste collection is an essential service that helps keep our environment clean and healthy. It involves the systematic gathering of <mark className=' text-primary bg-black'> waste  materials from homes, industries, and public places Proper waste collection prevents the spread of diseases and reduces pollution in air, water, and soil .</mark> It also plays a key role in recycling, where reusable materials are separated and processed to conserve natural resources. Efficient waste management systems support sustainable development and improve the overall quality of life in communities.</p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-3 justify-content-center align-content-center">
                    <div className=" pb-3">
                       <img src="src/assets/29.png" className='my-3 ms-2 logo-icon' width="250" alt="Loading img" />
                    </div>
                 
                    <button className="btn futuristic-btn" data-bs-toggle="modal" data-bs-target="#startModal">
                      Get Start
                    </button>
        
                  </div>
                 
                  </div>
              </div>
            </div>
            
            </div>
       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Next</span>
  </button>
      </div>

       <div className="modal fade  " id="startModal" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-body ">
                      <div className="modal-content futuristic-modal modal-body ">

                        <div className="modal-header">
                          <h5 className="modal-title">Waste Home Collection Service 🚀</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                          <p>Waste can be solid, liquid, or gaseous, and includes household, industrial, biomedical, and electronic waste.Overconsumption, industrial production, packaging, and improper disposal contribute to increasing waste.Improperly managed waste pollutes soil, water, and air, harming ecosystems and human health.Reduce, reuse, recycle, composting, and safe disposal are effective ways to manage waste.</p>
                        </div>

                        <div className="modal-footer">
                          <button className="btn futuristic-btn di" data-bs-dismiss="modal">Continue</button>
                        </div>

                      </div>
                    </div>
                  </div>

                  </div>

  {/* management section page  */}

  <section className="">
    
    <div className="management-section">

   
      
         
      <div className="container-fluid">

        <h1 className="title fade-in">Waste How Office Work's</h1>

        <div className="row align-items-center section-block">
          
          <div className="col-lg-4 col-12 mb-4">
            <div className="img-box slide-left">
              <img 
                src="src/assets/30.jpg " 
                alt="Office" 
              />
            </div>
          </div>

          <div className="col-lg-8 col-12">
            <div className="text-box slide-right">
              <p>
                In a waste management administrative office, the environment is usually busy and highly organized, as it serves as the control center for handling waste collection, processing, and disposal activities. The workers in such a place carry out a variety of responsibilities, each playing an important role in maintaining cleanliness and environmental safety.
              </p>
            </div>
          </div>

        </div>

       
<div className="col-lg-12 col-12">
 <div className="btn-container fade-in mt-3">
        <a href="Login" className="status-btn " >Admin Status</a>
    </div>
        </div>


        <div className="row align-items-center section-block reverse mt-5">

          <div className="col-lg-8 col-12">
            <div className="text-box slide-left">
              <p>
                They communicate regularly with field workers, such as drivers and sanitation workers, to address any issues like missed pickups or equipment problems. Technical staff monitor recycling data, landfill usage, and waste segregation efficiency. Overall, workers ensure smooth operations and help keep cities clean.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="img-box slide-right mt-4">
              <img 
                src="src/assets/31.jpg" 
                alt="Office Work" 
              />
            </div>
          </div>

        </div>
         
               </div>
    
    </div>
    </section>

     {/* Worker page  */}

    <section className="works-section">
  <div className="container">

    <div className="text-center mb-5">
      <h1 className="works-title">Work's</h1>
    </div>

    <div className="row align-items-center">

      {/* LEFT IMAGE */}
      <div className="col-lg-3 col-12">
        <div className="work-img m-4">
          <img src="src/assets/19.jpg" alt="Loading..." />
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="col-lg-6 col-12">
        <div className="work-text">
          <p>
            Waste management work involves organized planning and execution of
            collection and disposal processes.
          </p>

          <p>
            Coordination between workers and office improves efficiency and
            ensures clean surroundings.
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="col-lg-3 col-12">
        <div className="work-img m-4">
          <img src="src/assets/23.jpg" alt="Loading..." />
        </div>
      </div>

    </div>

    {/* BUTTON (No modal) */}
    <div className="text-center mt-5">
      <a className="move-btn text-decoration-none"  href="Workerlogin">Get Move </a> 
    </div>

  </div>
</section>


{/* Waste page  */}

 <section className="waste-section">
      <div className="container">
        <h1 className="title">Waste Types</h1>
        <div className="row justify-content-center">


        <div className="col-lg-4 col-md-6 mb-4">
            <div className="waste-card">
              <div className="emoji">🌿</div>
              <h5>Organic Waste</h5>
              <p>Food scraps and biodegradable materials.</p>
              <button
                className="btn btn-custom"
                data-bs-toggle="modal"
                data-bs-target="#modal2"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="waste-card">
              <div className="emoji">♻️</div>
              <h5>Recyclable Waste</h5>
              <p>Includes paper, plastic, and metals that can be reused.</p>
              <button
                className="btn btn-custom"
                data-bs-toggle="modal"
                data-bs-target="#modal1"
              >
                Learn More
              </button>
            </div>
          </div>

         
          

         
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="waste-card">
              <div className="emoji">⚠️</div>
              <h5>Hazardous Waste</h5>
              <p>Chemicals, batteries, and toxic materials.</p>
              <button
                className="btn btn-custom"
                data-bs-toggle="modal"
                data-bs-target="#modal3"
              >
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>

     
      <div className="modal fade" id="modal1">
        <div className="modal-dialog">
          <div className="modal-content modal-custom">
            <div className="modal-header">
              <h5>Recyclable Waste</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              Paper, plastic, glass, and metals can be recycled and reused.
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal2">
        <div className="modal-dialog">
          <div className="modal-content modal-custom">
            <div className="modal-header">
              <h5>Organic Waste</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              Food scraps and biodegradable materials can decompose naturally.
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal3">
        <div className="modal-dialog">
          <div className="modal-content modal-custom">
            <div className="modal-header">
              <h5>Hazardous Waste</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              Chemicals, batteries, and toxic materials need special disposal.
            </div>
          </div>
        </div>
      </div>


      <div className=" align-items-center text-center">
       
       <a href="Wasteadd">  <button
                className="btn btn-custom text-black"
                data-bs-toggle="modal"
                data-bs-target="#modal2"
              >
                Throw Waste
              </button>
              </a>
      </div>
    </section>


{/* waste type page */}
    <section>
    <div className="container-fluid pt-4 comment-page">

    
    <div className="cards-container ">
      <div className="row g-3 justify-content-center">
      <div className="card card-suggestions px-3  mx-3 col-lg-3 col-10">
        <div className="card-icon">💡</div>
        <h3>Suggestions</h3>
        <p>Share your ideas to help us improve our service.</p>
      </div>
      <div className="card card-complaintspx-3  mx-3 col-lg-3 col-10">
        <div className="card-icon">⚠️</div>
        <h3>Complaints</h3>
        <p>Let us know if something went wrong or needs fixing.</p>
      </div>
      <div className="card card-praisepx-3  mx-3 col-lg-3 col-10">
        <div className="card-icon">🎉</div>
        <h3>Praise</h3>
        <p>Tell us what you loved — your feedback motivates us!</p>
      </div>
    </div>
    </div>
<div className="p-5">
    <div className="">
        <h2 className='animated-header mb-4'>Feedback !</h2>
    </div>
    <div className="comment-box ">
      <h2>Vent Here! 😎</h2>
      <p className="comment-prompt">Good, bad, or hilarious — spill the beans! Your voice matters.</p>

      <form id="feedbackForm "  >
        
        <textarea required onChange={((e)=>setCommt(e.target.value))} className='form-control' id="feedbackInput" placeholder="Type your feedback here..."rows="3" ></textarea>
        <div className=" text-end mt-3">
        <button onClick={commentSubimt} className=" btn btn-outline-success border-2 fw-bold py-1 px-3" type="submit">Submit</button>
        </div>
       
      </form>

      </div>

    </div>
</div>
      
    </section>


    {/* contact page  */}

     <section >
        <div className='contact-text'>
        <div className="contact">
          <h1 className='text-center fw-bold pt-5 text-white'>Contact</h1>
        </div>

        <div className="row g-0">

          <div className="col-lg-6 col-12 justify-content-center align-content-center">
            <img src="src/assets/18.jpg" className='p-3 rounded-5' alt="Loading..." height="100%" width="100%" />
          </div>

          <div className="col-lg-6 col-12">
            

            <form onSubmit={handleSubmit}>
                <h1 className='text-center fw-bold mb-4'>Form</h1>
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
      zIndex: 999
    }}>Form submitted successfully!</div>}
          </div>
         
        </div>
        </div>
      </section>


      {/* About page  */}

      <section>
       
        <div className="about">
            <div className="about-h1">
                <h1>About</h1>
            </div>
            <div className="col-12 about-h1">
                <a className="navbar-brand " href="#">
  <img src="src/assets/29.png" width="48" alt="Loading img" />

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
                   <a href="#"> copy.mail/2026 </a>
                </div>
            </div>
        </div>
      </section>

    </section>





  )
}
