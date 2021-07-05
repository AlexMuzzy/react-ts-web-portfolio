import React, { Component } from "react";
import { Nav, Navbar, Container, Jumbotron, Row, Col } from "react-bootstrap";

import "./landingPage.css";

type MyProps = {};
type MyState = { width: number; height: number };

class LandingPage extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
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
    this.setState({ width: docWidth, height: docHeight });
  }

  // Allows for dynamic resizing of document in React to affect background size.

  render() {
    const jumbotronStyle = {
      backgroundColor: "transparent !important",
      display: "flex",
      minHeight: "inherit",
      margin: "0",
      padding: "0",
    };

    const landingRow = {
      minHeight: this.state.height / 3,
    };

    return (
      <>
        <Navbar bg="light" variant="light" expand="md" id="top-navbar">
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
        <Container style={{ minHeight: this.state.height }}>
          <Jumbotron className="clear-colour" style={jumbotronStyle}>
            <Row>
              <Col md="12" lg="10">
                <Row style={landingRow}></Row>
                <Row style={landingRow}>
                  <h1 className="m-auto text-center" style={{ height: "100%" }}>
                    Alex Musgrove
                  </h1>
                </Row>
                <Row style={landingRow}></Row>
              </Col>
              <Col md="12" lg="2" style={{ height: "100%" }}>
                <Row style={landingRow}></Row>
                <Row style={{ borderLeft: "2px solid black", ...landingRow }}>

                </Row>
                <Row style={landingRow}></Row>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </>
    );
  }
}

export default LandingPage;
