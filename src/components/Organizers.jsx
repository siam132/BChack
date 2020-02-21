import React from "react";
import { contributors, organizers } from "../data/Contributor_Info";
import "../scss/Organizers.scss";
import "../scss/Ground.scss";
import defaultPic from "../assets/web-dev-pics/test_avatar.png";

export default function Organizers() {
    return (
      <div id="organizers">
        <div className="row organizers-title">
          <div className="col-12">
            <h1>Meet the Organizers!</h1>
          </div>
        </div>
        <div id="organizers-listings" className="row listings">
          {organizers.map(person => (
            <div className="col-lg-3 col-sm-6 avatar-card" align="center">
                <ProfileView person={person} />
            </div>
          ))}
        </div>

        <div className="row organizers-title pt-5">
          <div className="col-12">
            <h1>Meet the Contributors!</h1>
          </div>
        </div>
        <div id="contributors-listings" className="row listings">
          {contributors.map(person => (
            <div className="col-lg-3 col-sm-6 avatar-card" align="center">
                <ProfileView person={person} />
            </div>
          ))}
        </div>
      </div>
    );
}

export function ProfileView(props) {
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