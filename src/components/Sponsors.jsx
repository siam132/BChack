import React from "react";
import Cookies from "../insomniacookies.png";
import LinkedIn from "../linkedin.png"

function Sponsors() {
  return (
    <div id="sponsors" className="text-center">
        <h1>Sponsors</h1>
        <p>Care about empowering diverse students to tackle large-scale issues around the 
            world? Get in touch with us to support the cause.</p>
        <button type="button" class="btn btn-success">Contact us</button>
        <div align="left" id="genPadding">
            <img src={ Cookies } className="rounded" alt="Linkedin Logo"/> 
            <img src={ LinkedIn } className="rounded" alt="Insomnia Cookies logo"/>
        </div>
    </div>
  );
}

export default Sponsors;
