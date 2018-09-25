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
    noOfEvents: 4
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
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
              <Controller events={this.state.noOfEvents} />
            </div>
            <div className="master-monitor">
              <Monitor />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
