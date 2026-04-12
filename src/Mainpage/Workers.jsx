import React from 'react';
import Mainmenu from './Mainmenu';

export default function Workers() {
  return (
    <div>
      <Mainmenu/>
   <section className="works-section">
  <div className="container">

    <div className="text-center mb-5">
      <h1 className="works-title">Work's</h1>
    </div>

    <div className="row align-items-center">

      {/* LEFT IMAGE */}
      <div className="col-lg-3 col-12">
        <div className="work-img m-4">
          <img src="src/image/19.jpg" alt="Loading..." />
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
          <img src="src/image/19.jpg" alt="Loading..." />
        </div>
      </div>

    </div>

    {/* BUTTON (No modal) */}
    <div className="text-center mt-5 mb-4">
      <a className="move-btn text-decoration-none"  href="Workerlogin">Get Move </a> 
    </div>

  </div>
</section>
       
      
    </div>
  )
}
