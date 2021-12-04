import React, { Component, CSSProperties } from "react";
import LandingPage from "./LandingPage";
import BottomNavBar from "./BottomNavBar";
import Experience from "./Experience";
import Projects from "./Projects";
import CanvasBackground from "../components/canvasBackground";

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
          <LandingPage />
          <Projects borderShadow={borderShadow} />
          <Experience borderShadow={borderShadow} />
        </div>
        <BottomNavBar />
      </>
    );
  }
}

export default App;
