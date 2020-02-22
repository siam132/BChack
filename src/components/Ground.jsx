import React from 'react';
import "../scss/Ground.scss";
import Background from "../assets/bottom-ground.svg";

function Ground() {
  return (
    <div id="ground" className="row">
        <img alt="..." src={ Background } />
    </div>
  );
}

export default Ground;