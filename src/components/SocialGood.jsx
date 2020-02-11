import React from "react";
import Sustainability from "../Sustainability.svg";
import Accessibility from "../Accessibility.svg";
import Education from "../Education.svg";
import Health from "../Health.svg";
import "../scss/SocialGood.scss";


function SocialGood() {

  return (
    <div id="socialgood" className="row disable-user-select">
      {/* <div className="row text-center cards-group"> */}
        <div className="col-12 text-center">
          <p className="socialgood_text">Our 4 Sectors of Social Good</p>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 card-container">
          <div className="card text-center">
            <img src={Sustainability} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Sustainability</h5>
              <hr></hr>
              <p className="card-text">Tackle issues like climate change, energy,
                food production, water scarcity, and biodiversity </p>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 card-container">
          <div className="card text-center">
            <img src={Accessibility} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Accessibility</h5>
              <hr></hr>
              <p className="card-text">Help make the world more accessible and
                create tools for people with different needs! </p>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 card-container">
          <div className="card text-center">
            <img src={Education} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Education</h5>
              <hr></hr>
              <p className="card-text">Improve education quality and
                increase access to knowledge around the world.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 card-container">
          <div className="card text-center">
            <img src={Health} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Health</h5>
              <hr></hr>
              <p className="card-text">Alert: Engineers Needed!</p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default SocialGood;
