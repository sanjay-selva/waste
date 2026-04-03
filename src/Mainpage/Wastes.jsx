import React from 'react'
import Mainmenu from './Mainmenu'

export default function Wastes() {
  return (
    <div>
 <Mainmenu/>
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
  
    </div>
)}

