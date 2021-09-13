import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class LandingPage extends Component {
  render() {
    return (
      <Container style={{ height: "95vh" }}>
        <Row style={{ height: "100%", display: "flex" }}>
          <h1
            className="text-center display-1"
            style={{ flexWrap: "wrap", alignItems: "center", display: "flex" }}
          >
            Alex
            <div style={{ color: "blue" }} className="ml-3 ">
              Musgrove.
            </div>
          </h1>
        </Row>
      </Container>
    );
  }
}

export default LandingPage;
