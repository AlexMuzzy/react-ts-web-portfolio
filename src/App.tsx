import React, { Component } from "react";
import LandingPage from "./LandingPage/landingPage";
import BottomNavBar from "./BottomNavBar/bottomNavBar";

class App extends Component {
  componentDidMount(){
    document.title = "AMuzzy"
  }

  render() {
    return (
      <>
        <LandingPage />
        <BottomNavBar />
      </>
    );
  }
}

export default App;
