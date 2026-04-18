import React from 'react';
import Mainmenu from './Mainmenu';

export default function Management() {
  return (
    <>
<section className="">
  <Mainmenu/>
    <div className="management-section">

   
      
         
      <div className="container-fluid">

        <h1 className="title fade-in">Waste How Office Work's</h1>

        <div className="row align-items-center section-block">
          
          <div className="col-lg-4 col-12 mb-4">
            <div className="img-box slide-left">
              <img 
                src="/assets/30.jpg " 
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
                src="/assets/31.jpg" 
                alt="Office Work" 
              />
            </div>
          </div>

        </div>
         
               </div>
    
    </div>
    </section>
    </>
  )
}
