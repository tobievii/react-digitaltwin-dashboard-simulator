import React, { Component } from "react";
import SlBtnTemp from "./SliderButtonTemp";
import SlBtnHumid from "./SliderButtonHumid";
import SlBtnWind from "./SliderButtonWind";
import "./Controller.css";

class Controller extends Component {
  handleChangedValue = (attr, eventValue, imgSrc) => {
    let currentEvent = eventValue;
    this.props.handleAttributes(attr, currentEvent, imgSrc);
  };

  render() {
    return (
      <div className="controller-master">
        <div className="controller-heading">
          <p className="controls">CONTROLS</p>
          <hr className="horizontal-line" />
        </div>
        <div className="controller-text">
          <p className="events">EVENTS</p>
        </div>
        <div className="controller-events">
          <ul>
            <li className="controller-li">
              <SlBtnTemp
                onTempToggle={this.handleChangedValue}
                buttonChecked={this.props.btnStateTemp}
              />
              <p className="controller-button-text">INCREASE TEMPERATURE</p>
            </li>
            <li className="controller-li">
              <SlBtnHumid
                onHumidityToggle={this.handleChangedValue}
                buttonChecked={this.props.btnStateHumid}
              />
              <p className="controller-button-text">DECREASE HUMIDITY</p>
            </li>
            <li className="controller-li">
              <SlBtnWind
                onWindSpeedToggle={this.handleChangedValue}
                buttonChecked={this.props.btnStateWind}
              />
              <p className="controller-button-text">
                SEND ANOMALOUS TEMPERATURE
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Controller;
