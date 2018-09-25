import React, { Component } from "react";
import "./WindSpeed.css";

class WindSpeed extends Component {
  state = {
    wind: 48.4
  };
  render() {
    let windspeedValue = this.state.wind + " km/h";
    return (
      <div className="windspeed-master">
        <div className="windspeed-bar" />
        <div className="windspeed-info">
          <span className="windspeed-label">WINDSPEED</span>
          <span className="windspeed-value">{windspeedValue}</span>
        </div>
      </div>
    );
  }
}

export default WindSpeed;
