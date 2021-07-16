import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LandingPage from "./LandingPage/landingPage";
import AboutPage from "./About/aboutPage";

import "./App.css";

type AppState = { height: number; width: number };
type AppProps = {}; // There should be no props since this is the 'main' parent component.

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  /**
   * Events to listen on each resize of browser. Will allow for size of landing page
   * component to be dynamically resized.
   * */

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let docHeight: number = window.innerHeight;
    let docWidth: number = window.innerWidth;

    this.setState({ width: docWidth, height: docHeight });
  }

  // Allows for dynamic resizing of document in React to affect background size.

  render() {
    return (
      <>
        <BottomNavbar/>
        <LandingPage height={this.state.height} />
        <AboutPage height={this.state.height} />
      </>
    );
  }
}

function BottomNavbar() {
  return (
    <Navbar
      bg="light"
      fixed="bottom"
      variant="light"
      expand="md"
      id="top-navbar"
    >
      <Container>
        <Navbar.Brand href="#home">Alex Musgrove</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
