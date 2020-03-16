import React from "react";

import Bloomberg from "../assets/company-logos/bloomberg.png";
import Cookies from "../assets/company-logos/insomniacookies.png";
import LinkedIn from "../assets/company-logos/linkedin.png";
import Etsy from "../assets/company-logos/etsy.png";
import DigitalOcean from "../assets/company-logos/digitalocean.png";
import Google from "../assets/company-logos/google.png";
import WiTNY from "../assets/company-logos/witny.png";
import Asana from "../assets/company-logos/asana.png";
import CTP from "../assets/company-logos/ctp.png";
import TRiO from "../assets/company-logos/trio.png";
import Calexico from "../assets/company-logos/calexico.png";
import "../scss/Sponsors.scss";

function Sponsors() {
  return (
    <div id="sponsors" className="text-center row">
      <div className="col-12">
        <h2 className="col-12 text-center">Sponsors & Friends</h2>
        <p className="thanks">
          Huge thanks to all of our sponsors and partners for their amazing
          support!
        </p>
        {/* prettier-ignore */}
        <div>
          {/* Silver Tier */}
          <Sponsor sponsor="Google" tier="silver" logo={Google} link="https://about.google" />
          <Sponsor sponsor="LinkedIn" tier="silver" logo={LinkedIn} link="https://www.linkedin.com/company/linkedin" />
          <Sponsor sponsor="Etsy" tier="silver" logo={Etsy} link="https://www.etsy.com/about" />
          <Sponsor sponsor="Bloomberg" tier="silver" logo={Bloomberg} link="https://www.bloomberg.com" />
          <Sponsor sponsor="WiTNY" tier="silver" logo={WiTNY} link="https://witny.org" />
          <Sponsor sponsor="DigitalOcean" tier="silver" logo={DigitalOcean} link="http://do.co/studenthackathon" />

          <br />

          {/* Bronze Tier and Friends */}
          <Sponsor sponsor="Insomnia Cookies" tier="bronze" logo={Cookies} link="https://insomniacookies.com/about" />
          <Sponsor sponsor="CUNY Tech Prep" tier="bronze" logo={CTP} link="https://cunytechprep.nyc" />
          <Sponsor sponsor="TRiO" tier="bronze" logo={TRiO} link="https://www2.ed.gov/programs/triostudsupp/index.html" />
          <Sponsor sponsor="Calexico" tier="bronze" logo={Calexico} link="https://www.calexico.com" />
        </div>

        <p className="sponsor">
          Care about empowering diverse students to tackle large-scale issues
          around the world?
          <br />
          Get in touch with us to support the cause.
        </p>

        <a href="mailto:sponsor@hackbrooklyn.org">
          <button type="button" className="btn contact">
            Contact us
          </button>
        </a>
      </div>
    </div>
  );
}

const Sponsor = props => {
  const tier = props.tier;

  const SponsorSpacing = () => {
    if (tier === "silver") {
      return (
        <br />
      );
    } else {
      return <span />;
    }
  }

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img
        className={`${props.tier} rounded`}
        src={props.logo}
        alt={`${props.sponsor} Logo`}
      />
      <SponsorSpacing />
    </a>
  );
};

export default Sponsors;
