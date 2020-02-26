import React, { useState } from 'react';

import '../scss/SocialGood.scss';
import Sustainability from '../assets/social-good/sustainability.svg';
import Accessibility from '../assets/social-good/accessibility.svg';
import Education from '../assets/social-good/education.svg';
import Health from '../assets/social-good/health.svg';

function SocialGood() {
  const [ width ] = useState(window.screen.width);

  return (
    <div id="socialgood" className="row">
        <h2 className="col-12 text-center">Our 4 Sectors of Social Good</h2>
        <div className="card-group">
          <div className={(width < 450 ? "col-9" : "col-md-6 col-lg-3") + " card-container"}>
            <div className="card text-center">
              <img src={Sustainability} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sustainability</h5>
                <hr></hr>
                <p className="card-text">Tackle issues like climate change, energy,
                  food production, water scarcity, and biodiversity </p>
              </div>
            </div>
          </div>
          <div className={(width < 450 ? "col-9" :"col-md-6 col-lg-3") + " card-container"}>
            <div className="card text-center">
              <img src={Accessibility} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Accessibility</h5>
                <hr></hr>
                <p className="card-text">Help make the world more accessible and
                  create tools for people with different needs! </p>
              </div>
            </div>
          </div>
          <div className={(width < 450 ? "col-9" :"col-md-6 col-lg-3") + " card-container"}>
            <div className="card text-center">
              <img src={Education} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Education</h5>
                <hr></hr>
                <p className="card-text">Improve education quality and
                  increase access to knowledge around the world.</p>
              </div>
            </div>
          </div>
          <div className={(width < 450 ? "col-9" :"col-md-6 col-lg-3") + " card-container"}>
            <div className="card text-center">
              <img src={Health} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Health</h5>
                <hr></hr>
                <p className="card-text">How can technology be used to solve some of 
                the problems around health and health care? 
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SocialGood;
