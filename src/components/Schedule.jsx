import React from "react";
import Clock from "react-live-clock";

import scheduleData from "../data/Schedule";

function Schedule() {
  return (
    <div id="schedule container-fluid">
      <div className="">
        <div className="row">
          <div className="col-4 col-md-4 col-sm-4 py-5">
            
              <Clock
                className="clock"
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"US/Eastern"}
              />
         
          </div>
          <div className="col-7 col-md-7 col-sm-6 py-3">
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
    <div className="row border-top schedule-style p-2">
      <div className="col-3 col-md-3 col-sm-3 ">
        <ul>
          <li className="h3">{props.time}</li>
        </ul>
      </div>
      <div className="col-8 col-md-8 col-sm-8">
        <h3>{props.activity}</h3>
      </div>
    </div>
  );
}

export default Schedule;
