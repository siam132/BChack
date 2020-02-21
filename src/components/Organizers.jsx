import React, { useState } from "react";
import { Contributors, Organizers } from "../data/Contributor_Info";
import "../scss/Organizers.scss";
import "../scss/Ground.scss";
import defaultPic from "../assets/web-dev-pics/test_avatar.png";

export default function Team() {
  const [ width ] = useState(window.screen.width)
  return (
    <div id="organizers" className="row">
      <div className="col-12">
        <div className="organizers-title">
          <h1>Meet the Organizers!</h1>
        </div>
        <div id="organizers-listings" className="row listings">
        {Organizers.map(person => (
          <div className={ width < 500 ? "col-6" : "col-3" } align="center">
            <ProfileView person={person} />
          </div>
        ))}
        </div>

        <div className="organizers-title">
          <h1>Meet the Contributors!</h1>
        </div>
        <div id="contributors-listings" className="row listings">
        {Contributors.map(person => (
          <div className={ width < 500 ? "col-6" : "col-3" } align="center">
            <ProfileView person={person} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export function ProfileView(props) {
  const { first, last, link, pic } = props.person;
  return (
    <div className="avatar">
      <img
        src={ require("./../assets" + pic) || defaultPic}
        alt={`${first} ${last}`}
        className="avatar-logo"
      />

      <p className="avatar-name">
          <a href={link || '#'}>
            {first} {last}
          </a>
        <br />
      </p>
    </div>
  );
}