import React, { Component } from "react";
import { Container, Jumbotron, Row, Col, ListGroup } from "react-bootstrap";

import "./landingPage.css";
import background from "./../assets/paula-vermeulen-_f2m3mEkaaU-unsplash.jpg";

type MyProps = { height: number };

class LandingPage extends Component<MyProps, {}> {
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
          height: this.props.height,
        }}
      >
        <Jumbotron className="clear-colour" style={jumbotronStyle}>
          <Row>
            <Col md="12" lg="7">
              <Row style={landingRow} className="d-none d-lg-block"></Row>
              <Row style={landingRow}>
                <h1 className="m-auto text-center btn-shine">Alex Musgrove</h1>
              </Row>
              <Row style={landingRow} className="d-none d-lg-block"></Row>
            </Col>

            <Col md="12" lg="5" style={{ height: "100%" }}>
              <Row style={landingRow} className="d-none d-lg-block"></Row>
              <Row style={landingRow}>
                <ListGroup
                  variant="flush"
                  style={{ width: "100%" }}
                  className="mr-3"
                >
                  <ListGroup.Item>Home</ListGroup.Item>
                  <a href="#about">
                    <ListGroup.Item>About</ListGroup.Item>
                  </a>
                  <ListGroup.Item>Services</ListGroup.Item>
                  <ListGroup.Item>Contact</ListGroup.Item>
                </ListGroup>
              </Row>
              <Row style={landingRow} className="d-none d-lg-block"></Row>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default LandingPage;
