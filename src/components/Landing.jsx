import React from "react";

import "../scss/Landing.scss";
import Zoom from "react-reveal/Zoom";
import Countdown from "react-countdown";

function Landing() {
  return (
    <div id="landing" className="row">
      <div className="col-12">
        <p className="intro disable-user-select">
          <Zoom cascade duration={3000}>
            Where Your Fantasies Come Alive
          </Zoom>
        </p>
        <h1 className="disable-user-select">
          HACK<span className="brooklyn">BROOKLYN</span>
        </h1>

        <p className="date-and-time">March 29th 8:00 am - March 30th 8:00 am</p>
        <p>
          <a className="locater" href="https://hackbrooklyn.devpost.com">
            Virtual hackathon hosted by Brooklyn College
          </a>
        </p>

        <Countdown
          date={new Date("Mar 29, 2020 08:00:00 EDT")}
          renderer={({ hours, completed }) => {
            if (!completed) {
              return (
                <p className="countdown-clock-hours">
                  {String(hours) + " hours,"}
                </p>
              );
            } else {
              return <p className="countdown-clock">Hack on!</p>;
            }
          }}
        />

        {/* <Countdown
          date={new Date("Mar 29, 2020 08:00:00 EDT")}
          renderer={({ minutes, seconds, completed }) => {
            if (!completed) {
              return (
                <p className="countdown-clock">
                  {String(minutes) +
                    " minutes, and " +
                    String(seconds) +
                    " seconds to go!"}
                </p>
              );
            } else {
              return <p className="countdown-clock">Hack on!</p>;
            }
          }}
        /> */}

        {/* <a
          href="https://hackbrooklyn.typeform.com/to/wOd4nK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn register">
            Register
          </button>
        </a> */}
      </div>
    </div>
  );
}

export default Landing;
