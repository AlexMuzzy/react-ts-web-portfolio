import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";


class LandingPage extends Component {
  render() {
    return (
        <Container style={{ height: "100vh" }}>
          <Row
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              className="text-center display-3"
              style={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              Alex
              <div style={{ color: "blue" }} className="ml-3">
                Musgrove.
              </div>
            </h1>
          </Row>
        </Container>
    );
  }
}

export default LandingPage;
