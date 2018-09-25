import React from "react";
import SliderButton from "./SliderButton";
import "./Controller.css";

const controller = props => {
  return (
    <div className="controller-master">
      <div className="controller-heading">
        <p className="controls">CONTROLS</p> <hr className="horizontal-line" />
      </div>
      <div className="controller-text">
        <p className="events">EVENTS</p>
      </div>
      <div className="controller-events">
        <ul>
          <li className="controller-li">
            <SliderButton />
            <p className="controller-button-text">INCREASE TEMPERATURE</p>
          </li>
          <li className="controller-li">
            <SliderButton />
            <p className="controller-button-text">DECREASE HUMIDITY</p>
          </li>
          <li className="controller-li">
            <SliderButton />
            <p className="controller-button-text">SEND ANOMALOUS TEMPERATURE</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default controller;
