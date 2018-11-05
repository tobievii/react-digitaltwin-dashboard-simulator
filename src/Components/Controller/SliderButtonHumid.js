import React, { Component } from "react";
import "./SliderButton.css";

class SliderButtonHumid extends Component {
  handleChange = () => {
    let currState = !this.props.buttonChecked;
    this.props.onHumidityToggle("humidity", currState);
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

export default SliderButtonHumid;
