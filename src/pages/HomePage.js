import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Landing from "../components/Landing";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import FAQ from "../components/FAQ";
import Schedule from "../components/Schedule";



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
        <li className="nav-item">
          <a className="nav-link" href="#schedule">
            Schedule
          </a>
        </li>
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
      </ul>

      <div className="container-fluid">
        <Landing />
        <About />
        <Schedule/>
        <Sponsors />
        <FAQ />
      </div>
    </div>
    );
  }


export default App;
