import React from "react";
import Cookies from "../assets/company-logos/insomniacookies.png";
import LinkedIn from "../assets/company-logos/linkedin.png";
import Etsy from "../assets/company-logos/etsy.png";
import DigitalOcean from "../assets/company-logos/digitalocean.png";
import Google from "../assets/company-logos/google.png";
import WiTNY from "../assets/company-logos/witny.png";
import Asana from "../assets/company-logos/asana.png";
import CTP from "../assets/company-logos/ctp.png";
import TRiO from "../assets/company-logos/trio.png";
import Calexico from "../assets/company-logos/calexico.png"
import "../scss/Sponsors.scss"

function Sponsors() {
  return (
    <div id="sponsors" className="text-center row">
      <div className="col-12">
        <h2 className="col-12 text-center">Sponsors & Friends</h2>
        <p className="thanks">
          Huge thanks to all of our sponsors and partners for their amazing support!
        </p>
        <div>
          <a href="https://www.linkedin.com/company/linkedin/life/af8c939d-a352-40da-a06e-eb8c2b35bbd4/" target="_blank" rel="noopener noreferrer"><img className="silver rounded" src={ LinkedIn } alt="LinkedIn logo" /></a>
          <a href="https://www.etsy.com/about?ref=ftr" target="_blank" rel="noopener noreferrer"><img className="silver rounded" src={ Etsy } alt="Etsy logo" /></a>
          <a href="https://www.digitalocean.com/about/" target="_blank" rel="noopener noreferrer"><img className="silver rounded" src={ DigitalOcean } alt="DigitalOcean logo" /></a>
          <a href="https://witny.org/" target="_blank" rel="noopener noreferrer"><img className="silver rounded" src={ WiTNY } alt="WiTNY logo" /></a>
          <br />
          <a href="https://about.google/" target="_blank" rel="noopener noreferrer"><img className="bronze rounded" src={ Google } alt="Google logo" /></a>
          <a href="https://asana.com/company" target="_blank" rel="noopener noreferrer"><img className="bronze rounded" src={ Asana } alt="Asana logo" /></a>
          <a href="https://insomniacookies.com/about" target="_blank" rel="noopener noreferrer"><img className="bronze rounded" src={ Cookies } alt="Insomnia Cookies logo" /></a>
          <a href="https://cunytechprep.nyc/" target="_blank" rel="noopener noreferrer"><img className="bronze rounded" src={ CTP } alt="CUNY Tech Prep logo" /></a>
          <a href="https://www2.ed.gov/programs/triostudsupp/index.html" target="_blank" rel="noopener noreferrer"><img className="bronze rounded" src={ TRiO } alt="TRiO logo" /></a>
          <a href="https://www.calexico.com/" target="_blank" rel="noopener noreferrer"><img className="bronze rounded" src={ Calexico } alt="Calexico logo" /></a>
        </div>
        
        <p className="sponsor">
          Care about empowering diverse students to tackle large-scale issues around the world? <br /> Get in touch with us to support the cause. 
        </p>

        <a href="mailto:sponsor@hackbrooklyn.org">
          <button type="button" class="btn contact">
            Contact us
          </button>
        </a>
        
      </div>
    </div>
  );
}

export default Sponsors;
