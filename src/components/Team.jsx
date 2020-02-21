import React, { useState } from "react";
import { Contributors, Organizers } from "../data/Contributor_Info";
import defaultPic from "../assets/web-dev-pics/test_avatar.png";
import "../scss/Team.scss";

function Team() {
  const [ width ] = useState(window.screen.width)
  return (
    <div id="organizers" className="row">
      <div className="col-12">
        <h2 className="col-12 text-center">Meet the Organizers!</h2>
        <div id="organizers-listings" className="row listings">
        {Organizers.map(person => (
          <div className={ width < 500 ? "col-6" : "col-3" } align="center">
            <ProfileView person={person} />
          </div>
        ))}
        </div>

        <h2 className="col-12 text-center">Meet the Contributors!</h2>
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