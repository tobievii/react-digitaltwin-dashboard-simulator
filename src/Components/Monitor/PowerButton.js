import React, { Component } from "react";
import "./PowerButton.css";

class SliderButton extends Component {
  state = {
    clicked: false
  };

  handleChange = () => {
    this.setState(prevState => {
      return { clicked: !prevState.clicked };
    });
  };

  render() {
    return (
      <div>
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={this.state.clicked}
            onChange={this.handleChange}
          />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}

export default SliderButton;
