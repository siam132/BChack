import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Landing from "../components/landing";
import About from "../components/About";
import Schedule from "../components/Schedule";

class App extends React.Component {
  render() {
    return (
      <div className="App-header">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#landing">
              Landing
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
        </ul>
        <div className="container-fluid">
          <Landing />
          <About />
          <Schedule />
        </div>
      </div>
    );
  }
}

export default App;
