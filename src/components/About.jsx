import React from "react";
import bc_logo from "../bc_logo.png";

function About() {
  return (
    <div id="about">
      <div className="row p-4">
        <div className="col-9">
          <h1 className="about_title">About</h1>
          <p className="about_text">
            Brooklyn College sits at the heart of a borough well-known for its
            innovation. Brooklyn College has always served to bring
            transformative, distinctive, and affordable education to students
            from all backgrounds. Nearly 20,000 students enroll every semester,
            comprising of individuals from over 130 countries, speaking more
            than 100 languages. The enrollment is comprised of 59% female and
            41% male undergraduate and graduate students. The CIS Department has
            a total of four degrees it supports: Computer Science, Computational
            Mathematics, Information Systems, and Mulitmedia Computing and
            Computer science alone is the second largest major on campus!
          </p>
        </div>

        <div className="col-3">
          <img src={bc_logo} alt="..." className="img-thumbnail rounded-pill" />
        </div>
      </div>
    </div>
  );
}

export default About;
