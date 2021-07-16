import { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

class AboutPage extends Component<{ height: number }, {}> {
  render() {
    return (
      <Container style={{ height: this.props.height }} id="about">
        <Jumbotron className="clear-colour">
          <h1 className="m-auto text-center align-middle">About Page</h1>
        </Jumbotron>
      </Container>
    );
  }
}

export default AboutPage;
