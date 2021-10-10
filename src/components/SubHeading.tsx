import React, { Component } from "react";
import { Row } from "react-bootstrap";

class SubHeading extends Component<{ headingTitle: string }> {
  render() {
    return (
      <Row style={{ height: "100%" }}>
        <h3 style={{ paddingLeft: "1rem" }}>{this.props.headingTitle}</h3>
      </Row>
    );
  }
}

export default SubHeading;