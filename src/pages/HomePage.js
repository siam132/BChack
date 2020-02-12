import React, { useState, useEffect } from "react";
// import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import "typeface-luckiest-guy";
import "typeface-nunito";
import "typeface-quicksand";

import "../scss/App.scss";
import Landing from "../components/Landing";
import About from "../components/About";
import SocialGood from "../components/SocialGood";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
import Ground from "../components/Ground";

function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    });
  });

  return (
    <div className="container-fluid">
      <nav
        className={scrolled ? "navbar fixed-top scrolled" : "navbar fixed-top"}
      >
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#landing">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sponsors">
              Sponsors
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Landing />
      <About />
      <SocialGood />
      <FAQ />
      <Contact /> {/* Should probably turn this into an "About the Organizers" section */}
      <Sponsors />
      <Ground />
      {/* <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={1000}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{}}
        ToggledStyle={{}}
      /> */}
    </div>
  );
}

export default HomePage;
