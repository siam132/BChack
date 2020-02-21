import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "typeface-luckiest-guy";
import "typeface-nunito";
import "typeface-quicksand";

import "../scss/App.scss";

import Landing from "../components/Landing";
import About from "../components/About";
import SocialGood from "../components/SocialGood";
import Schedule from "../components/Schedule";
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
    <div id="homepage" className="container-fluid">
      <div id="content">
        <Navbar
          expand="lg"
          fixed="top"
          className={scrolled ? "scrolled" : ""}
        >
          <Navbar.Brand href="#landing">
            <img
              src="logo192.png"
              alt="Logo"
              className="navbar-logo img-responsive d-inline-block align-middle"
            />
            &nbsp;HACK BROOKLYN
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-content"
            className="navbar-menu ml-auto"
          />
          <Navbar.Collapse id="navbar-content">
            <Nav className="ml-auto">
              <Nav.Link href="#landing">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#organizers">Organizers</Nav.Link>
              <Nav.Link href="#sponsors">Sponsors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Landing />
        <About />
        <SocialGood />
        <Sponsors />
        <FAQ />
        <Team />
        <Ground />
      </div>
    </div>
  );
}

export default HomePage;
