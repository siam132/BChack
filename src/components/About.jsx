import React from "react";
import Typical from 'react-typical';
import witch from "../witchHack.svg";

function About() {
  return (
    <div id="about">

      <div className="row p-4" >
        <div className="col-9">
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

        {/* SO THAT IMAGE IS ON RIGHT SIDE OF PAGE */}
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4">
        <img src={witch} alt="..." height="300px" width="300px" />
        </div>
        {/* <div className="col-3">
          <img src={bc_logo} alt="..." className="img-thumbnail rounded-pill" />
        </div> */}
      </div>

      {/* FOR SPACE */}
      <div className="row p-4"></div>
      
      
      <div className="row p-4">

        <div className="col-12">
          <p className="about_text" style={{'text-align':'center'}}>
            Our 4 Sectors of Social Good:

            {/* CARDS */}
            <div>
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2018/04/06/13/17/sustainability-3295824_960_720.jpg" width="100%" height="150px" alt="..." />
                <h4>Sustainability</h4>
                <p className="card-text">Tackle issues like climate change, energy, 
                food production, water scarcity, and biodiversity </p>
                <a href="#" class="btn btn-primary">Read More Online</a>
              </div>
              &nbsp;
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2019/12/21/12/37/eyeglasses-4710391_960_720.jpg" width="100%" height="150px" alt="..." />
                <h4>Accessibility</h4>
                <p className="card-text">Help make the world more accessible,
                 create tools for different needs! </p>
                <a href="#" class="btn btn-primary">Read More Online</a>
              </div>
              &nbsp;
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2015/06/02/12/59/narrative-794978_960_720.jpg" width="100%" height="150px" alt="..." />
                <h4>Education</h4>
                <p className="card-text">Find ways to improve education and increase access to knowledge</p>
                <a href="#" class="btn btn-primary">Read More Online</a>
              </div>
              &nbsp;
              <div className="card">
                <img src="https://cdn.pixabay.com/photo/2018/04/02/21/28/outdoors-3285239_960_720.jpg" width="100%" height="150px" alt="..." />
                <h4>Health</h4>
                <p className="card-text">Alert: Engineers Needed!</p>
                <a href="#" class="btn btn-primary">Read More Online</a>
              </div>
            </div>
          </p>
        </div>
      </div>

      {/* FOR SPACE */}
      <div className="row p-4"></div>
      <div className="row p-4"></div>

    </div>
  );
}

export default About;
