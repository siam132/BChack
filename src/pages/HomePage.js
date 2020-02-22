import React, { useState, useEffect } from "react";
import "typeface-luckiest-guy";
import "typeface-nunito";
import "typeface-quicksand";
import "typeface-delius";

import "../scss/App.scss";
import Landing from "../components/Landing";
import About from "../components/About";
import SocialGood from "../components/SocialGood";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
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
            <a className="nav-link" href="#organizers">
              Organizers
            </a>
          </li>
        </ul>
      </nav>
      <Landing />
      <About />
      <SocialGood />
      <Sponsors />
      <FAQ />
      <Team />
      <Ground />
    </div>
  );
}

export default HomePage;
