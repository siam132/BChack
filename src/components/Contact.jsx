import React from "react";
import RoundImage from "react-rounded-image";
import {SocialIcon} from "react-social-icons";
import WICS from "../Logos/wicsLogo.png";
import CS from "../Logos/comSciLogo.png";
import MWEI from "../Logos/MWEILogo.png";

function Contacts() {
  return (
    <div id="contact">
      <h1>Meet the Organizers!</h1>

        <div className="container-fluid">
          <div className="row" style={{padding: 30}}>
          <div className = "col-4" align="center">
              <RoundImage 
                image={CS}
                roundColor="#321124"
                imageWidth="120"
                imageHeight="120"
                roundedSize="8"
              />
              <br />
              
              <p><b>Computer Science Club </b>
                <br />
                Founders of Hack Brooklyn, got together website, sponsors, clubs and everything in the mix
                <br />
                <SocialIcon url="https://www.instagram.com/bc_compsci/" /> &nbsp;
                {/* TO DO: remove automatic line break */}
                {/* <a href = "https://bc-compsciclub.github.io/ ">
                  <RoundImage
                    image={CS}
                    roundedSize="0"
                    imageWidth="45"
                    imageHeight="45"
                  />
                </a> */}
                <SocialIcon url="https://www.facebook.com/groups/bc.cis.club/" />
              </p>
            </div>
            <div className="col-4" align="center">
              {/* picture */}
              <RoundImage 
                image={WICS}
                roundColor="#321124"
                imageWidth="120"
                imageHeight="120"
                roundedSize="8"
              />
              <br />
              
              <p><b>Women in Computer Science Club </b>
                <br />
                Founders of Hack Brooklyn, got together website, sponsors, clubs and everything in the mix
                <br />
                <SocialIcon url="https://www.instagram.com/bc_wics_/" /> &nbsp;
                <SocialIcon url="https://www.linkedin.com/in/wics-brooklyn-college-70643b192/" /> &nbsp;
                <SocialIcon url="https://www.facebook.com/BCWomenInCS/" />
              </p>

            </div>
            <div className = "col-4" align="center">
                            {/* picture */}
                            <RoundImage 
                image={MWEI}
                roundColor="#321124"
                imageWidth="120"
                imageHeight="120"
                roundedSize="8"
              />
              <br />
              
              <p><b>Muslim Women's Education Initiative</b>
                <br />
                Helping Hands on the Day for a Seamless Hack Experience
                <br />
                <SocialIcon url="https://www.instagram.com/explore/locations/101722999919422/brooklyn-college-islamic-society-muslim-womens-educational-initiative/" /> &nbsp;
                <SocialIcon url="https://www.facebook.com/BCISO/" />
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Contacts;
