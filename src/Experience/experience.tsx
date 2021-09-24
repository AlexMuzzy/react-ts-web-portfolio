import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import cgiLogo from "../assets/cgi-logo.png";
import lboroLogo from "../assets/lboro-logo.jpg";

class Experience extends Component {
  render() {
    type experienceType = {
        workName: string;
        workImage: string;
        workRole: string;
      };
  
      const experienceItems: experienceType[] = [
        {
          workName: "CGI IT UK",
          workImage: cgiLogo,
          workRole: "Junior Software Engineer",
        },
        {
          workName: "Loughborough University",
          workImage: lboroLogo,
          workRole: "Research Software Developer",
        },
        {
          workName: "CGI IT UK",
          workImage: cgiLogo,
          workRole: "Software Engineering Placement",
        },
      ];
  
      const ExperienceItem = ({
        workName,
        workImage,
        workRole,
      }: experienceType) => (
        <Col md="4">
          <Card
            style={{
              borderRadius: "2rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              border: "none",
              margin: "1.5rem 0",
            }}
          >
            <Card.Body>
              <Card.Title className="h4">{workName}</Card.Title>
              <Card.Img
                src={workImage}
                style={{
                  backgroundColor: "transparent",
                }}
              />
              <Card.Text>
                <div className="py-2 text-center lead">{workRole}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );

    return (
      <Container
        style={{
          marginBottom: "3rem",
          marginTop: "2rem"
        }}
      >
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
            Experience
            <div style={{ color: "blue" }}>.</div>
          </h1>
        </Row>
        <Row>
          {experienceItems.map((experienceItem: experienceType) => (
            <ExperienceItem {...experienceItem} />
          ))}
        </Row>
      </Container>
    );
  }
}


export default Experience;