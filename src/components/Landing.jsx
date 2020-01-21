import React from "react";
// import Button from 'react-bootstrap/Button';

// function sendToTypeForm() {

// }


function Landing() {
  return (
    <div id="landing">
      <div className="container-fluid">
        <div className="row">
          
          <div className="col-12">
          <h1 className="glitch">HACK Brooklyn</h1>
            <p>⏰ March 29th </p>
            <p>📍 Brooklyn College</p>   
            {/* <a href="https://www.google.com/maps/place/Brooklyn+College/@40.6304648,-73.9543017,17z/data=!4m5!3m4!1s0x89c244b4f418b1cd:0xb1d4b115f28f8e17!8m2!3d40.6302494!4d-73.9553609">
              <img className="o-50" src="https://toppng.com/uploads/preview/royalty-free-stock-maps-icon-free-download-png-white-google-map-ico-115629001883xm3bupqk9.png" width="40px" height="40px" /> 
            </a>  */}
          </div>
        
          {/* EMBED GOOGLE MAPS */}
          {/* get an API key and attach it in the URL to build iframe :) */}
          {/* <iframe class="map" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/place/Brooklyn+College/@40.6310931,-73.956692,17.54z/data=!4m5!3m4!1s0x89c244b4f418b1cd:0xb1d4b115f28f8e17!8m2!3d40.6302494!4d-73.9553609"></iframe> */}
        </div>
       
       {/* button to typeform */}
        <div className="row">
          <div className="bttn-group">
            <button href="#" className="btn btn-danger mx-2 px-5 ">Register</button>
            <button href="#" className="btn btn-success mx-2 px-5">Volunteer</button>
          
           
          </div>

        </div>
      </div>
    </div>
  );
}

export default Landing;
