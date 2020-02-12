import React from "react";
import Typical from 'react-typical';
import witch from "../assets/side-art.svg";
import "../scss/About.scss";
// import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';

function About() {

  const steps = [
    'educational disparity.', 1000,
    'accessibility.', 1000,
    'climate change.', 1000,
    'social good.', 1000,
    'housing inequality.', 1000,
    'mental health.', 1000,
    'sustainability.', 1000
  ];

  return (
    <div id="about" className="disable-user-select row">
      <div className="col-9">
        <div className="about-header">
          <h2>Welcome to <strong className="bold">Hack Brooklyn!</strong></h2>
        </div>
        <div className="about-summary">
          <p>
            Hack Brooklyn is where your quest begins. Step into a world of magic on <strong className="bold">March 29th</strong> where over 150 of the brightest students in New York will come together to build innovative solutions for
              <span className="about-summary-solutions">
              <Typical
                wrapper="span"
                steps={steps}
                loop={Infinity}
              />
            </span>
          </p>
        </div>
        <div className="about-description">
          <p>
            Over the course of 12 hours, teams of up to four students will collaborate to use the technology of today to solve present-day problems and create the world of tomorrow. Create a project, acquire new skills, and network with other hackers and companies as you learn and grow in the heart of Brooklyn. Whether this is the first time you’ve ever seen a line of code or the hundredth time you’ve published an app, Hack Brooklyn has something for everyone. With a multitude of interactive workshops and events ranging from the basics of programming to the hottest and latest technologies, you’ll leave Hack Brooklyn with something new.
            </p>

          <p>
            One of our goals for Hack Brooklyn is to encourage diversity by supporting, boosting, and emboldening women and minorities in tech, as well as creating a safe, inclusive community where we can all work on changing the make-up and attitudes of the tech community. Regardless of who you are, Hack Brooklyn welcomes you. Join us for 12 hours of exploration and discovery and unlock your true potential.
            </p>
        </div>
      </div>
      <div className="col-3">
        <img className="witch" src={witch} alt="witch" />
      </div>
    </div>
  );
}

export default About;
