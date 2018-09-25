import React, { Component } from "react";
import "./Temperature.css";

class Temperature extends Component {
  state = {
    temp: 65.3
  };
  render() {
    let temperatureValue = this.state.temp + " C";
    return (
      <div className="temperature-master">
        <div className="temperature-bar" />
        <div className="temperature-info">
          <span className="temperature-label">TEMPERATURE</span>
          <span className="temperature-value">{temperatureValue}</span>
        </div>
      </div>
    );
  }
}

export default Temperature;
