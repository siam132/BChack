import React from "react";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import "bootstrap/dist/css/bootstrap.css";

import "typeface-luckiest-guy";
import "typeface-nunito";
import "typeface-quicksand"

import "../App.scss";
import Landing from "../components/Landing";
import About from "../components/About";
// import Schedule from "../components/Schedule";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
import SocialGood from "../components/SocialGood";

function App() {
  return (
    <div className="App-header">
      {/* NAV BAR */}
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#landing">
            {/* code for home is under "../components/Landing.jsx" */}
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link" href="#schedule">
            Schedule
          </a>
        </li> */}

        <li className="nav-item">
          <a className="nav-link" href="#sponsors">
            Sponsors
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#faq">
            FAQ
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <div className="container-fluid">
        <Landing />
        <About />
        <SocialGood />
        {/* <Schedule /> */}
        <Sponsors />
        <FAQ />
        <Contact />
      </div>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={1000}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{}}
        ToggledStyle={{}}
      />
    </div>
  );
}

export default App;
