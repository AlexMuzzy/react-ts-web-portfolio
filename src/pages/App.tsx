import React, { Component, CSSProperties } from "react";
import LandingPage from "./LandingPage";
import BottomNavBar from "./BottomNavBar";
import Experience from "./Experience";
import Projects from "./Projects";

class App extends Component {
  componentDidMount() {
    document.title = "AMuzzy";
  }

  render() {
    const borderShadow: CSSProperties = {
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    };

    return (
      <>
        <div style={{ marginBottom: "3.5rem" }}>
          {/* Margin is given to offset the navbar height as 
          its absolute position overlays the above elements. */}
          <LandingPage />
          <Projects borderShadow={borderShadow} />
          <Experience borderShadow={borderShadow}/>
        </div>
        <BottomNavBar />
      </>
    );
  }
}

export default App;
