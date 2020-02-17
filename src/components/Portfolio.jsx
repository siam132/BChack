import React from "react";
import contributor from "../data/Contributor_Info";
import Contributor from "../sub-components/Contributor";
import "../scss/Contact.scss";

function Contacts() {
  return (
    <div>
      <div id="contact" className="row">
        {/* TO DO: MAKE THE SLIDE HAPPEN WHEN THE ORGANIZERS SECTION IS VIEWED */}
        <div className="col-12">
          <h1>Meet the Team!</h1>
        </div>
        {/* <div className="col-4" align="center">
          <img src={MWEI} className="MWEI logo" />
          <p><b>Muslim Women's Education Initiative</b></p>
          <p>Helping Hands on Hack Day for a Seamless Hack Experience</p>
          <a href="https://www.instagram.com/explore/locations/101722999919422/brooklyn-college-islamic-society-muslim-womens-educational-initiative/"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/BCISO/"><i class="fab fa-facebook"></i></a>
        </div> */}
      </div>
      <div className="row">
        {contributor.map(person => (
          <Contributor
            first={person.first}
            last={person.last}
            pic={person.pic}
            role={person.role}
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
