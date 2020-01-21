import React from "react";
import scheduleData from "../data/Schedule";

function Schedule() {
  return (
    <div id="schedule">
        <div className="row">
          <div className="col-4 col-md-4 col-sm-4 py-5">
          </div>
          <div className="col-7 col-md-7 col-sm-6 py-3">
            <h1 className="py-4 text-warning rounded">Schedule</h1>
            <div className="row">
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
      </div>

  );
}

function ActivityRenderer(props) {
  return (
      <tr>
        <td>{props.time}</td>
        <td>{props.activity}</td>
      </tr>
  );
}

export default Schedule;
