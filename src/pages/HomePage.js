import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Landing from "../components/landing";
import About from "../components/About";
import Schedule from "../components/Schedule";

function App() {
  return (
    <div className="App-header">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#landing">
            Landing
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#schedule">
            Schedule
          </a>
        </li>
      </ul>
      <div className="container-fluid">
        <Landing />
        <About />
        <Schedule />
      </div>
    </div>
  );
}

export default App;
