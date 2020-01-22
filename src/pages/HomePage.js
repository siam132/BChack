import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Landing from "../components/Landing";
import About from "../components/About";
import Tracks from "../components/Tracks"
import Schedule from "../components/Schedule";
import PreHack from "../components/PreHack";
import Sponsors from "../components/Sponsors";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function App() {
  return (
    <div className="App-header">

     {/* NAV BAR */}
      <ul className="nav" >
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
        <li className="nav-item">
          <a className="nav-link" href="#tracks">
            Tracks
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#schedule">
            Schedule
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#prehack">
            Pre-Hackathon Events
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#schedule">
            Sponsors
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
        <Tracks />
        <Schedule />
        <PreHack /> 
        <Sponsors />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
    );
  }


export default App;
