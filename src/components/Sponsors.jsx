import React from "react";
import Cookies from "../assets/company_logos/insomniacookies.png";
import LinkedIn from "../assets/company_logos/linkedin.png";

function Sponsors() {
  return (
    <div id="sponsors" className="text-center">
      <h1 className="section_title">Sponsors</h1>
      <p>
        Care about empowering diverse students to tackle large-scale issues
        around the world? Get in touch with us to support the cause.
      </p>

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-6 p-5">
            <img src={Cookies} className="rounded" alt="Linkedin Logo" />
          </div>
          <div className="col-6 p-5">
            <img
              src={LinkedIn}
              className="rounded"
              alt="Insomnia Cookies logo"
            />
          </div>
        </div>

        <button type="button" class="btn btn-outline-dark px-5">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default Sponsors;
