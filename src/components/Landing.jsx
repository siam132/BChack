import React from "react";
import Zoom from 'react-reveal/Zoom';
import Countdown from 'react-countdown';
import "../scss/Landing.scss"

function Landing() {
  return (
    <div id="landing" className="row">
      <div className="col-12">
        <p className="intro"><Zoom cascade duration={3000}>Where Your Fantasies Come Alive</Zoom></p>
        <h1>HACK <span class="brooklyn">Brooklyn</span></h1>
        <p>March 29th, 7am - 9pm | <a className="locater" href="https://www.google.com/maps/place/Brooklyn+College/@40.6304648,-73.9543017,17z/data=!4m5!3m4!1s0x89c244b4f418b1cd:0xb1d4b115f28f8e17!8m2!3d40.6302494!4d-73.9553609"> Brooklyn College </a>
        </p>
        <Countdown
          date={new Date('Mar 29, 2020 00:00:00 EST')}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (!completed) {
              return <p className="countdown-clock">{ String(days) + " days, " + String(hours) + " hours, " + String(minutes) + " minutes, and " + String(seconds) + " seconds to go!" }</p>;
            } else {
              return <p className="countdown-clock">Hack on!</p>;
            }
          }}
        />
        <div class="bttn-wrapper">
          <button href="#" className="btn register">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
