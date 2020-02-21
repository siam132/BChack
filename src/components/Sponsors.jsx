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
          <img className="silver rounded" src={ LinkedIn } alt="LinkedIn logo" />
          <img className="silver rounded" src={ Etsy } alt="Etsy logo" />
          <img className="silver rounded" src={ DigitalOcean } alt="DigitalOcean logo" />
          <img className="silver rounded" src={ WiTNY } alt="WiTNY logo" />
          <br />
          <img className="bronze rounded" src={ Google } alt="Google logo" />
          <img className="bronze rounded" src={ Asana } alt="Asana logo" />
          <img className="bronze rounded" src={ Cookies } alt="Insomnia Cookies logo" />
          <img className="bronze rounded" src={ CTP } alt="CUNY Tech Prep logo" />
          <img className="bronze rounded" src={ TRiO } alt="TRiO logo" />
          <img className="bronze rounded" src={ Calexico } alt="Calexico logo" />
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
