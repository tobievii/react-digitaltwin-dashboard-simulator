import React from "react";
import "./Temperature.css";

const Temperature = props => {
  let temperatureValue = props.temperature + " C";
  return (
    <div className="temperature-master">
      <div className="temperature-bar" />
      <div className="temperature-info">
        <span className="temperature-label">TEMPERATURE</span>
        <span className="temperature-value">{temperatureValue}</span>
      </div>
    </div>
  );
};

export default Temperature;
