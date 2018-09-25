import React, { Component } from "react";
import "./Humidity.css";

class Humidity extends Component {
  state = {
    humid: 77.1
  };
  render() {
    let humidityValue = this.state.humid + " %";
    return (
      <div className="humidity-master">
        <div className="humidity-bar" />
        <div className="humidity-info">
          <span className="humidity-label">HUMIDITY</span>
          <span className="humidity-value">{humidityValue}</span>
        </div>
      </div>
    );
  }
}

export default Humidity;
