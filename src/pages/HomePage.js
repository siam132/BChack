import React from "react";
import "../App.css";
import Landing from "../components/landing";
import About from "../components/About";
import Schedule from "../components/Schedule";

function App() {
  return (
    <div className="App-header">
      <nav>
        <a href="#landing">Landing</a>
        <a href="#about">About</a>
        <a href="#schedule">Schedule</a>
      </nav>
      <div className="container">
        <Landing />
      </div>

      <div className="container">
        <About />
      </div>
      <div className="container">
        <Schedule />
      </div>
    </div>
  );
}

export default App;
