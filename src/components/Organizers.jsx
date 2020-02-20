import React from "react";
import contributor from "../data/Contributor_Info";
import "../scss/Organizers.scss";
import "../scss/Ground.scss";
import default_pic from "../assets/web-dev-pics/test_avatar.png"

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
  const { first, last, github, pic, role } = props.person;
  return (
    <div>
      <img
        src={pic.url || default_pic}
        alt={`${first} ${last}`}
        className="avatar-logo"
      />

      <p>
        <b className="avatar-name">
          <a href={`${github}`}>{first} {last}</a>
        </b>
        <br />
        <b className="avatar-role">
          {role}
        </b>
      </p>
      {/*       <p>Founders of Hack Brooklyn, got together website, sponsors, clubs and everything in the mix.</p>
      <a href="https://www.instagram.com/bc_compsci/"></a>
      <a href="https://www.facebook.com/groups/bc.cis.club/"></a> */}
    </div>
  );
}