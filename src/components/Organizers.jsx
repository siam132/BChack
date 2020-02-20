import React from "react";
import contributor from "../data/Contributor_Info";
import "../scss/Organizers.scss";
import "../scss/Ground.scss";
import defaultPic from "../assets/web-dev-pics/test_avatar.png";

export default function Organizers() {
    return (
      <div id="organizers">
        <div id="organizers-title" className="row">
          <div className="col-12">
            <h1>Meet the Team!</h1>
          </div>
        </div>
        <div id="organizers-listings" className="row">
          {contributor.map(person => (
            <div className="col-lg-3 col-sm-6 avatar-card" align="center">
                <Contributor person={person} />
            </div>
          ))}
        </div>
      </div>
    );
}

export function Contributor(props) {
  const { first, last, link, pic, role } = props.person;
  return (
    <div>
      <img
        src={pic || defaultPic}
        alt={`${first} ${last}`}
        className="avatar-logo"
      />

      <p>
        <b className="avatar-name">
          <a href={link || '#'}>
            {first} {last}
          </a>
        </b>
        <br />
        <b className="avatar-role">
          {role}
        </b>
      </p>
    </div>
  );
}