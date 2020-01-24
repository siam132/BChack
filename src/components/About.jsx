import React from "react";
import Typical from 'react-typical';
import witch from "../witchHack.svg";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div id="about">
      <Slide top duration={1000}>
        <div className="row p-4" >
          <div className="col-9 col-sm-12">
            <p className="about_text" style={{ 'text-align': 'left' }}>
              Hack Brooklyn is where your quest begins.
              Step into a world of magic on March 29th where 200 students will come
              to build innovative solutions for
            <Typical
                steps={['educational disparity.', 1000, 'accessibility.', 1000, 'climate change.', 1000, 'social good.', 1000, 'housing inequality.', 1000, 'racism.', 1000, 'mental health.', 1000, 'sustainability.', 1000]}
                loop={Infinity}
              />
            </p>
          </div>
          <div className="col-12">
            <img className="witch" src={witch} alt="..." height="300px" width="300px" />
          </div>
        </div>
      </Slide>

      <div className="row text-center cards-group">
        <div className="col-12">
          <p className="about_text">Our 4 Sectors of Social Good:</p>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
          <Fade top duration={1000}>
            <div className="card text-center">
              <div className="card-body">
                <h5 class="card-title">Sustainability</h5>
                <hr></hr>
                <p className="card-text">Tackle issues like climate change, energy,
                food production, water scarcity, and biodiversity </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
          <Fade top duration={1000} delay={100}>
            <div className="card text-center">
              <div className="card-body">
                <h5 class="card-title">Accessibility</h5>
                <hr></hr>
                <p className="card-text">Help make the world more accessible,
                create tools for different needs! </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
          <Fade top duration={1000} delay={200}>
            <div className="card text-center">
              <div className="card-body">
                <h5 class="card-title">Education</h5>
                <hr></hr>
                <p className="card-text">Find ways to improve education quality, and 
                increase access to knowledge around the world.</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
          <Fade top duration={1000} delay={300}>
            <div className="card text-center">
              <div className="card-body">
                <h5 class="card-title">Health</h5>
                <hr></hr>
                <p className="card-text">Alert: Engineers Needed!</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;
