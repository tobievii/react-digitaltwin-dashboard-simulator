import React from "react";
import "./Humidity.css";

const Humidity = props => {
  let humidityValue = props.humidity + " %";
  return (
    <div className="humidity-master">
      <div className="humidity-bar" />
      <div className="humidity-info">
        <span className="humidity-label">HUMIDITY</span>
        <span className="humidity-value">{humidityValue}</span>
      </div>
    </div>
  );
};

export default Humidity;
