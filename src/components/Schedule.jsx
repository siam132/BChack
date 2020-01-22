import React from "react";
import scheduleData from "../data/Schedule";

function Schedule() {
  return (
    <div id="schedule">
        <div className="row">
        <div className="col-12 text-center">
          <h1>Schedule</h1>
        </div>
        </div>
        <div className="row">
        <div className="col-6 schedule">
          <table className="table">
            <thead>
              <tr>
                <th scope="col-6"> Time</th>
                <th scope="col-6">Acitvity</th>
              </tr>
            </thead>
            <tbody>
            {scheduleData.map(e => {
              return <ActivityRenderer time={e.time} activity={e.activity} />;
            })}
            </tbody>
          </table>
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
