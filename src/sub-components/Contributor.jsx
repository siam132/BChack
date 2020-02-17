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

      {/*       <p>Founders of Hack Brooklyn, got together website, sponsors, clubs and everything in the mix.</p>
      <a href="https://www.instagram.com/bc_compsci/"></a>
      <a href="https://www.facebook.com/groups/bc.cis.club/"></a> */}
    </div>
  );
}
