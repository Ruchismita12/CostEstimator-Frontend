
import React from "react";
import desktopPhoneImage from "../photos/desktop_phn.png";
import { useNavigate } from 'react-router-dom';

const FirstpageContent = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: "150px" }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1>Estimate your app</h1>
          <h1>development costs</h1>
          <p>Find out how much it will cost to build an app and</p>
          <p>how long it will take to launch it.</p>
          <p>An app cost calculator built with the user in mind.</p>

          {/* Button */}
          <div style={{ textAlign: "center" }}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => navigate('/Step1')}
            >
              Estimate my app {'->'}
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "120px" }}>
        <img src={desktopPhoneImage} alt="Desktop and Phone" />
      </div>
    </div>
  );
};

export default FirstpageContent;
