import React, { Component, CSSProperties } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardShadow from "../components/CardMapper";
import cgiLogo from "../assets/CgiLogo.png";
import lboroLogo from "../assets/LboroLogo.jpg";
import SubHeading from "../components/SubHeading";

class Experience extends Component<{ borderShadow: CSSProperties }> {
  render() {
    type experienceType = {
      workName: string;
      workImage?: string;
      workRole: string;
      workDescription?: string;
      workTechnologies?: string[];
    };

    const experienceItems: experienceType[] = [
      {
        workName: "Loughborough University",
        workImage: lboroLogo,
        workRole: "Research Software Developer",
        workDescription: `Development of an image manipulation algorithm in data analysis 
                          software along with python-based front end client.`,
        workTechnologies: [
          "Python",
          "Computer Vision",
          "Graphics Programming",
          "NumPy",
          "SciPy",
          "Kivy",
          "SciKit-Image",
          "Git",
          "GitHub",
        ],
      },

      {
        workName: "CGI IT UK",
        workImage: cgiLogo,
        workRole: "Junior Software Engineer",
        workDescription: `Java web API Devlopment, design and development of 
                          a Python server side automation tool and performant
                          C++ network software.`,
        workTechnologies: [
          "Java",
          "C++",
          "Python",
          "SVN",
          "Robot Framework",
          "API Development",
          "Git",
          "GTest",
          "JUnit",

          "Linux Development",
          "Bash",
          "PowerShell",
          "Maven",
          "JUnit",
        ],
      },
    ];

    const ExperienceItem = ({
      workName,
      workImage,
      workRole,
      workDescription,
      workTechnologies,
    }: experienceType) => (
      <Col lg="6" xs="12" style={{ display: "flex" }}>
        <Row>
          <CardShadow>
            <Card.Body>
              <Row>
                <Col sm="4">
                  <Card.Text>
                    <div className="h4 lead">{workName}</div>
                  </Card.Text>
                  <Card.Img
                    src={workImage}
                    style={{
                      backgroundColor: "transparent",
                      maxWidth: "10rem",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                  <Card.Text>
                    <div className="py-2 text-center lead">{workRole}</div>
                  </Card.Text>
                </Col>
                <Col sm="8">
                  <Card.Text style={{ paddingTop: "1.5rem" }}>
                    {workDescription}
                  </Card.Text>
                  {workTechnologies?.map((workTechnology: string) => (
                    <div
                      style={{
                        display: "inline-block",
                        padding: "0.5rem",
                        margin: "0.5rem",
                        backgroundColor: "blue",
                        color: "white",
                        borderRadius: "0.75rem",
                        fontWeight: "lighter",
                        ...this.props.borderShadow,
                      }}
                    >
                      {workTechnology}
                    </div>
                  ))}
                </Col>
              </Row>
            </Card.Body>
          </CardShadow>
        </Row>
      </Col>
    );

    return (
      <Container>
        <SubHeading headingTitle="Experience" />
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
