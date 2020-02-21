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
        <p>
          Huge thanks to our sponsors and partners for their support! Care about empowering diverse 
          students to tackle large-scale issues around the world? Get in touch with us to 
          support the cause. 
        </p>
        <div>
          <img className="silver rounded" src={ LinkedIn } alt="LinkedIn logo" />
          <img className="silver rounded" src={ Etsy } alt="Etsy logo" />
          <img className="silver rounded" src={ WiTNY } alt="WiTNY logo" />
          <img className="silver rounded" src={ DigitalOcean } alt="DigitalOcean logo" />
          <img className="bronze rounded" src={ Google } alt="Google logo" />
          <img className="bronze rounded" src={ Asana } alt="Asana logo" />
          <img className="bronze rounded" src={ Cookies } alt="Insomnia Cookies Logo" />
          <img className="bronze rounded" src={ CTP } alt="Cuny Tech Prep logo" />
          <img className="bronze rounded" src={ TRiO } alt="TRiO Logo" />
          <img className="bronze rounded" src={ Calexico } alt="Calexico logo" />
        </div>
        <button type="button" class="btn contact">
        Contact us
        </button>
      </div>
    </div>
  );
}

export default Sponsors;
