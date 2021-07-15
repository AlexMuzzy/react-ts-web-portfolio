import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Container,
  Jumbotron,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

import "./landingPage.css";

import background from "./../assets/paula-vermeulen-_f2m3mEkaaU-unsplash.jpg";

type MyProps = { height: number };
type MyState = {};

class LandingPage extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }

  render() {
    const jumbotronStyle = {
      backgroundColor: "transparent !important",
      display: "flex",
      minHeight: "inherit",
      margin: "0",
      padding: "0",
    };

    const landingRow = {
      minHeight: this.props.height / 3,
    };

    return (
      <Container
        fluid
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          style={{
            height: this.props.height,
          }}
        >
          {/* <Navbar
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
          </Navbar> */}

          <Jumbotron className="clear-colour" style={jumbotronStyle}>
            <Row>
              <Col md="12" lg="8">
                <Row style={landingRow} className="d-none d-lg-block"></Row>
                <Row style={landingRow}>
                  <h1 className="m-auto text-center btn-shine">
                    Alex Musgrove
                  </h1>
                </Row>
                <Row style={landingRow} className="d-none d-lg-block"></Row>
              </Col>

              <Col md="12" lg="4" style={{ height: "100%" }}>
                <Row style={landingRow} className="d-none d-lg-block"></Row>
                <Row style={landingRow}>
                  <ListGroup variant="flush" style={{ width: "100%" }}>
                    <ListGroup.Item>Home</ListGroup.Item>
                    <ListGroup.Item>About</ListGroup.Item>
                    <ListGroup.Item>Services</ListGroup.Item>
                    <ListGroup.Item>Contact</ListGroup.Item>
                  </ListGroup>
                </Row>
                <Row style={landingRow} className="d-none d-lg-block"></Row>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </Container>
    );
  }
}

export default LandingPage;
