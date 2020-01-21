import React from "react";
import Clock from "react-live-clock";

import scheduleData from "../data/Schedule";

function Schedule() {
  return (
    <div id="schedule">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 py-5">
            
              <Clock
                className="clock"
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"US/Eastern"}
              />
         
          </div>

          <div className="col-7 py-3">
            <h1 className="py-4 text-success rounded">Schedule</h1>
            {scheduleData.map(e => {
              return <ActivityRenderer time={e.time} activity={e.activity} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityRenderer(props) {
  return (
    <div className="row border-top schedule-style py-2">
      <div className="col-3 ">
        <ul>
          <li>{props.time}</li>
        </ul>
      </div>
      <div className="col-8">
        <h3>{props.activity}</h3>
      </div>
    </div>
  );
}

export default Schedule;
