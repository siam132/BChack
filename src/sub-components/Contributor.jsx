import React from "react";
import "../scss/Contact.scss";

export default function Contributor(props) {
  return (
    <div className="col-3 avatar-card" align="center">
      <img
        src={props.pic}
        alt="Computer Science Club logo"
        className="avatar-logo"
      />
      <p>
        <b className="avatar-name">
          {props.first} {props.last}
        </b>
        <br></br>
        <b className="avatar-role">{props.role}</b>
      </p>
      
      
    </div>
  );
}
