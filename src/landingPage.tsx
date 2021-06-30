import React, { Component } from "react";
import { Nav, Navbar, Container, Jumbotron } from "react-bootstrap";

import "./landingPage.css";

type MyProps = {};
type MyState = { width: number; height: number };

class LandingPage extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    // Update Jumbotron size in landing page using devices height.
    const landingJumbo: number | undefined =
      document.getElementById("top-navbar")?.clientHeight;
    let docHeight: number = window.innerHeight;
    let docWidth: number = window.innerWidth;
    if (landingJumbo) {
      console.debug(
        "Height of Nav Bar found. negating it from background height."
      );
      docHeight = docHeight - landingJumbo * 2;
    } else {
      console.debug("Nav bar not found. Has it not rendered yet?");
    }
    this.setState({ width: docWidth, height: docHeight});
  }

  // Allows for dynamic resizing of document in React to affect background size.

  render() {
    const jumbotronStyle = {
      display: "flex",
      minHeight: "inherit",
      margin: "0",
      padding: "0",
    };

    return (
      <>
        <Navbar bg="dark" variant="dark" expand="md" id="top-navbar">
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
        <Container style={{ minHeight: this.state.height}}>
          <Jumbotron className="clear-colour" style={jumbotronStyle}>
            <h1 className="m-auto" style={{ height: "100%" }}>
              Alex Musgrove
            </h1>
          </Jumbotron>
        </Container>
      </>
    );
  }
}

export default LandingPage;
