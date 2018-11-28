import React, { Component } from "react";
import "./SliderButton.css";

class SliderButtonWind extends Component {
  handleChange = () => {
    let currState = !this.props.buttonChecked,
      imgSrcAttribute = "alarming";
    this.props.onWindSpeedToggle("windspeed", currState, imgSrcAttribute);
  };

  render() {
    return (
      <div>
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={this.props.buttonChecked}
            onChange={this.handleChange}
          />
          <span className="event-slider round" />
        </label>
      </div>
    );
  }
}

export default SliderButtonWind;
