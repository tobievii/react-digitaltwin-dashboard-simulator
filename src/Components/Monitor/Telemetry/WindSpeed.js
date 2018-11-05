import React from "react";
import "./WindSpeed.css";

const WindSpeed = props => {
  let windspeedValue = props.windspeed + " km/h";
  return (
    <div className="windspeed-master">
      <div className="windspeed-bar" />
      <div className="windspeed-info">
        <span className="windspeed-label">WINDSPEED</span>
        <span className="windspeed-value">{windspeedValue}</span>
      </div>
    </div>
  );
};

export default WindSpeed;
