import React, { Component } from "react";
import LandingPage from "./LandingPage/landingPage";
import BottomNavBar from "./BottomNavBar/bottomNavBar";
import Experience from "./Experience/experience";

class App extends Component {
  componentDidMount() {
    document.title = "AMuzzy";
  }

  render() {
    return (
      <>
        <div style={{ marginBottom: "3.5rem" }}>
          {/* Margin is given to offset the navbar height as 
          its absolute position overlays the above elements. */}
          <LandingPage />
          <Experience />
        </div>
        <BottomNavBar />
      </>
    );
  }
}

export default App;
