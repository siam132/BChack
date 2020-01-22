import React from "react";
import Typical from 'react-typical'



function Landing() {
  return (
    <div id="landing">
      <div className="container-fluid">
        <div className="row" id="organizers">
          
          <div className="col-12">
           
            <h1 className="glitch">HACK</h1>

            <Typical
              steps={['', 1000, 'Brooklyn', 1000]}
              loop={Infinity}
              wrapper="h1"
              className="glitch"
            /> 
          {/* <h1 className="glitch">HACK Brooklyn</h1> */}
          <p>Where Your Fantasies Come Alive</p>
            <p>⏰ March 29th </p>
            {/* link to location */}
            <p><a href="https://www.google.com/maps/place/Brooklyn+College/@40.6304648,-73.9543017,17z/data=!4m5!3m4!1s0x89c244b4f418b1cd:0xb1d4b115f28f8e17!8m2!3d40.6302494!4d-73.9553609">📍Brooklyn College</a></p>   
          </div>
        
          {/* EMBED GOOGLE MAPS */}
          {/* get an API key and attach it in the URL to build iframe :) */}
          {/* <iframe class="map" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/place/Brooklyn+College/@40.6310931,-73.956692,17.54z/data=!4m5!3m4!1s0x89c244b4f418b1cd:0xb1d4b115f28f8e17!8m2!3d40.6302494!4d-73.9553609"></iframe> */}
        </div>
       
       {/* button to typeform */}
        <div className="row">
          <div className="bttn-group">
            <a href="#" class="btn btn-outline-primary" role="button">Register</a>
            <a href="#" class="btn btn-outline-primary" role="button">Volunteer</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Landing;
