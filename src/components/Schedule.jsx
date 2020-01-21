import React from "react";
import Clock from "react-live-clock";

import scheduleData from "../data/Schedule";

function Schedule() {
  return (
    
      <div id="schedule" className="container-fluid">
        <div className="row">
          <div className="col-4 col-md-4 col-sm-4 py-5">
          </div>
          <div className="col-7 col-md-7 col-sm-6 py-3">
            <h1 className="py-4 text-warning rounded">Schedule</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"> Time</th>
                  <th scope="col">Acitvity</th>
                </tr>
              </thead>
              {scheduleData.map(e => {
                return <ActivityRenderer time={e.time} activity={e.activity} />;
              })}
            </table>
          </div>
        </div>
      </div>

  );
}

function ActivityRenderer(props) {
  return (
    <tbody>
      <tr>
        <td>{props.time}</td>
        <td>{props.activity}</td>
      </tr>
    </tbody>
  );
}

export default Schedule;
