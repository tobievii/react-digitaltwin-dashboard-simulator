import React, { Component } from "react";
import Toolbar from "./Components/Navbar/Toolbar/Toolbar";
import SideDrawer from "./Components/Navbar/SideDrawer/SideDrawer";
import BackDrop from "./Components/Navbar/Backdrop/Backdrop";
import Controller from "./Components/Controller/Controller";
import Monitor from "./Components/Monitor/Monitor";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    tempChecker: false,
    humidityChecker: false,
    windSpeedChecker: false,
    temp: 65.3,
    humid: 77.8,
    wind: 48.4
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleAttr = (attrName, value) => {
    if (attrName === "temperature" && value === true) {
      this.setState(prevState => {
        return {
          tempChecker: value,
          temp: prevState.temp + 3.5
        };
      });
    } else if (attrName === "temperature" && value === false) {
      this.setState(prevState => {
        return {
          tempChecker: false,
          temp: prevState.temp - 3.5
        };
      });
    } else if (attrName === "humidity" && value === true) {
      this.setState(prevState => {
        return {
          humidityChecker: value,
          humid: prevState.humid - 4
        };
      });
    } else if (attrName === "humidity" && value === false) {
      this.setState(prevState => {
        return {
          humidityChecker: false,
          humid: prevState.humid + 4
        };
      });
    } else if (attrName === "windspeed" && value === true) {
      this.setState(prevState => {
        return {
          windSpeedChecker: value,
          wind: prevState.wind + 5.2
        };
      });
    } else if (attrName === "windspeed" && value === false) {
      this.setState(prevState => {
        return {
          windSpeedChecker: false,
          wind: prevState.wind - 5.2
        };
      });
    }
  };
  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <div style={{ marginTop: "64px" }}>
          <div className="master-body">
            <div className="master-controller">
              <Controller
                handleAttributes={this.handleAttr}
                btnStateTemp={this.state.tempChecker}
                btnStateHumid={this.state.humidityChecker}
                btnStateWind={this.state.windSpeedChecker}
              />
            </div>
            <div className="master-monitor">
              <Monitor
                tempV={this.state.temp}
                humidV={this.state.humid}
                windV={this.state.wind}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
