import React, { Component } from "react";
import LandingPage from "./LandingPage/landingPage";
import BottomNavBar from "./BottomNavBar/bottomNavBar";
import Experience from "./Experience/experience";

class App extends Component {
  componentDidMount(){
    document.title = "AMuzzy"
  }

  render() {
    return (
      <>
        <LandingPage />
        <Experience />
        <BottomNavBar />
      </>
    );
  }
}

export default App;
