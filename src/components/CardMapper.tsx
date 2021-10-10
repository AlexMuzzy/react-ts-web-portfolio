import React, { Component, CSSProperties } from "react";
import { Card } from "react-bootstrap";

class CardShadow extends Component {
  render() {
    const borderShadow: CSSProperties = {
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    };

    return (
      <Card
        style={{
          borderRadius: "1rem",
          border: "none",
          margin: "1em",
          width: "100%",
          ...borderShadow,
        }}
      >
        {this.props?.children}
      </Card>
    );
  }
}

export default CardShadow;