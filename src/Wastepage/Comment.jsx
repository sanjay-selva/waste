import React, { useState } from 'react'
import axios from 'axios';
import Mainmenu from '../Mainpage/Mainmenu';

export default function Comment() {
  const [commt,setCommt]=useState("");


  const commentSubimt=(e) =>{
    e.preventDefault();
    axios.post("http://localhost:5252/comment",{commt})
    .then(res=>{
      console.log(res.data);
     window.location.reload();
    })
    .catch(err=>{console.log(err)})
  }
  return (
    <>
    <div className="">
      <Mainmenu/>
    <div className="container-fluid pt-4 comment-page">

    
    <div className="cards-container">
      <div className="row g-3  justify-content-center ">
       
      <div className="card card-suggestions  px-3 mx-3 col-lg-3 col-10">
        <div className="card-icon">💡</div>
        <h3>Suggestions</h3>
        <p>Share your ideas to help us improve our service.</p>
      </div>
      

      <div className="card card-complaints px-3  mx-3 col-lg-3 col-10">
        <div className="card-icon">⚠️</div>
        <h3>Complaints</h3>
        <p>Let us know if something went wrong or needs fixing.</p>
      </div>

      <div className="card card-praise px-3  mx-3 col-lg-3 col-10">
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
</div>
    </>
  )
}
