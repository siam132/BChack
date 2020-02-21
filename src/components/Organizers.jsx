import React from "react";
import { Contributors, Organizers } from "../data/Contributor_Info";
import "../scss/Organizers.scss";
import "../scss/Ground.scss";
import defaultPic from "../assets/web-dev-pics/test_avatar.png";
import Shahzoda from "../assets/team-pics/shahzoda.jpeg";

export default function Team() {
    return (
      <div id="organizers" className="row">
        <div className="col-12 organizers-title">
          <div>
            <h1>Meet the Organizers!</h1>
          </div>
        </div>
        {/* <div id="organizers-listings" className="row listings"> */}
          {Organizers.map(person => (
            <div className="col-lg-3 col-sm-4 avatar-card" align="center">
                <ProfileView person={person} />
            </div>
          ))}
        {/* </div> */}

        <div className="col-12 organizers-title pt-5">
          <div className="col-12">
            <h1>Meet the Contributors!</h1>
          </div>
        </div>
        {/* <div id="contributors-listings" className="row listings"> */}
          {Contributors.map(person => (
            <div className="col-lg-3 col-sm-4 avatar-card" align="center">
                <ProfileView person={person} />
            </div>
          ))}
        {/* </div> */}
      </div>
    );
}

export function ProfileView(props) {
  const { first, last, link, pic } = props.person;
  return (
    <div>
      <img
        src={ require("./../assets" + pic) || defaultPic}
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
        {/* <b className="avatar-role">
          {role}
        </b> */}
      </p>
    </div>
  );
}