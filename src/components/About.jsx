import React from "react";
import Typical from 'react-typical';
import witch from "../witchHack.svg";

function About() {
  return (
  <div id="about">
    <div className="row p-4" >
      <div className="col-9 col-sm-12">
      {/* <h1 className="about_title">About</h1> */}
      <p className="about_text" style={{'text-align':'left'}}>
        Hack Brooklyn is where your quest begins.
        Step into a world of magic on March 29th where 200 students will come 
        to build innovative solutions for
        <Typical
        steps={['educational disparity.', 1000, 'accessibility.', 1000, 'climate change.', 1000, 'social good.', 1000, 'housing inequality.', 1000, 'racism.', 1000, 'mental health.', 1000, 'sustainability.', 1000]}
        loop={Infinity}
        /> 
      </p>
      </div>
    </div>
      
    {/* SO THAT IMAGE IS ON RIGHT SIDE OF PAGE */}
    <div className="row center-text">
      <div className="col-12">
        <img className="witch" src={witch} alt="..." height="300px" width="300px" />
      </div>
      {/* <div className="col-3">
      <img src={bc_logo} alt="..." className="img-thumbnail rounded-pill" />
      </div> */}
    </div>

    {/* FOR SPACE */}
    {/* <div className="row p-4"></div> */}


    <div className="row p-4 text-center">
      <div className="col-12">
          <p className="about_text" style={{'text-align':'center'}}>
          Our 4 Sectors of Social Good:
          </p>
        </div>
      {/* <div className="row"> */}
        {/* CARDS */}
        <div className="col-xs-6 col-md-3 col-sm-6 col-lg-3">
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2018/04/06/13/17/sustainability-3295824_960_720.jpg" width="100%" height="150px" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Sustainability</h5>
              <p className="card-text">Tackle issues like climate change, energy, 
                food production, water scarcity, and biodiversity </p>
            </div>
          </div>
        </div>
        {/* &nbsp; */}
        <div className="col-xs-6 col-md-3 col-sm-6 col-lg-3">
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2019/12/21/12/37/eyeglasses-4710391_960_720.jpg" width="100%" height="150px" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Accessibility</h5>
              <p className="card-text">Help make the world more accessible,
              create tools for different needs! </p>
            </div>
          </div>
        </div>
      {/* &nbsp; */}
      <div className="col-xs-6 col-md-3 col-sm-6 col-lg-3">
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2015/06/02/12/59/narrative-794978_960_720.jpg" width="100%" height="150px" alt="..." />
          <div className="card-body"> 
            <h5 class="card-title">Education</h5>
            <p className="card-text">Find ways to improve education and increase access to knowledge</p>
          </div>
        </div>
      {/* &nbsp; */}
      </div>
      <div className="col-xs-6 col-md-3 col-sm-6 col-lg-3">
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2018/04/02/21/28/outdoors-3285239_960_720.jpg" width="100%" height="150px" alt="..." />
          <div className="card-body">
            <h5 class="card-title">Health</h5>
            <p className="card-text">Alert: Engineers Needed!</p>
          </div>
        </div>
      </div>
    {/* </div> */}
    {/* FOR SPACE
    <div className="row p-4"></div>
    <div className="row p-4"></div> */}
    </div>
    </div>
  );
}

export default About;
