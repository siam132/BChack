import React, { Component } from "react";

function Schedule() {
  return (
    <div id="schedule">
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 py-3">
            <h1>Clock</h1>
          </div>
          <div className="col-5 py-3">
            <h1>Schedule</h1>

            <div className="row schedule-style py-5">
            <div className="col-3 ">
              <ul>
                <li>7:00 am</li>
                <li>8:00 am</li>
                <li>9:00 am</li>
              </ul>
            </div>
            <div className="col-8">
                <h3>Breakfast</h3>
                <h3>Not let shahzoda in because she sucks </h3>
                <h3>Hail siam as the new king and conclude the event</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
