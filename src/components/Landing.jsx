import React from "react";
import Zoom from "react-reveal/Zoom";
import Countdown from "react-countdown";

import "../scss/Landing.scss";

function Landing() {
  return (
    <div id="landing" className="row">
      <div className="col-12">
        <Zoom cascade duration={3000}>
          <h2 className="intro disable-user-select">Where Your Fantasies Come Alive</h2>
        </Zoom>

        <h1 className="title disable-user-select">
          HACK <br /> BROOKLYN
        </h1>

        <div className="information">
          <p className="date">March 29th, 2020</p>

          <a
            className="location"
            href="https://www.google.com/maps/place/Brooklyn+College/@40.6304648,-73.9543017,17z/data=!4m5!3m4!1s0x89c244b4f418b1cd:0xb1d4b115f28f8e17!8m2!3d40.6302494!4d-73.9553609"
          >
            Brooklyn College
          </a>
        </div>

        {/* button to typeform */}
        <div className="col-12">
          <button href="#" className="btn register">
            Register
          </button>
        </div>

        {/* We should move it down the page somewhere later on */}
        <Countdown
          date={new Date("Mar 29, 2020 00:00:00 EST")}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (!completed) {
              return (
                <span className="countdown-clock">
                  {days} days, {hours} hours, {minutes} minutes, and {seconds}{" "}
                  seconds to go!
                </span>
              );
            } else {
              return <span className="countdown-clock">Hack on!</span>;
            }
          }}
        />
      </div>
    </div>
  );
}

export default Landing;
