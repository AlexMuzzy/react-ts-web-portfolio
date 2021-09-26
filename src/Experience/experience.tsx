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
      workDescription?: string;
      workTechnologies?: string[];
    };

    const experienceItems: experienceType[] = [
      {
        workName: "CGI IT UK",
        workImage: cgiLogo,
        workRole: "Junior Software Engineer",
        workDescription: `Java Web back-end & 
                          high performance C++ networking software.`,
        workTechnologies: [
          "Java",
          "C++",
          "SVN",
          "Linux Development",
          "GTest",
          "JUnit",
          "Java Servlet",
          "Network Programming",
        ],
      },
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
        workRole: "Software Engineering Placement",
        workDescription: `Java web API Devlopment & 
                          design and development of 
                          a Python server side automation tool.`,
        workTechnologies: [
          "Java",
          "C++",
          "Python",
          "SVN",
          "Robot Framework",
          "API Development",
          "Git",
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
      <Col md="6" xl="4" style={{ display: "flex" }}>
        <Row>
          <Card
            style={{
              borderRadius: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              border: "none",
              margin: "1em",
              width: "100%",
            }}
          >
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
                        borderRadius: "1rem",
                        fontWeight: "lighter",
                      }}
                    >
                      {workTechnology}
                    </div>
                  ))}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    );

    return (
      <Container
        style={{
          marginBottom: "3rem",
          marginTop: "2rem",
        }}
        fluid
      >
        <Row
          style={{
            height: "100%",
            display: "flex",
          }}
        >
          <h3 style={{ paddingLeft: "1rem" }}>Experience</h3>
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
