import React from "react";
import "../scss/Contact.scss";

export default function Contributor(props) {
  return (
    <div className="col-3 avatar-card" align="center">
      <img
        src={props.pic}
        alt={`${props.first} ${props.last}`} // alt text reflects the contributor's name
        className="avatar-logo"
      />

      <p>
        <b className="avatar-name">
          {props.first} {props.last}
        </b>
        <br />
        <b className="avatar-role">
          {props.role}
        </b>
      </p>
    </div>
  );
}
