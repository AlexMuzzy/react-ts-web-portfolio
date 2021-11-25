import { Component, CSSProperties } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import CardShadow from "../components/CardMapper";
import SubHeading from "../components/SubHeading";

import robotMapper from "../assets/robot-mapper.jpg";
import astroField from "../assets/astrofield.jpg";
import appLocker from "../assets/applocker.jpg";

import "./styles/projects.css";

class Projects extends Component<{ borderShadow: CSSProperties }> {
  render() {
    type projectType = {
      projectName: string;
      projectImage?: string;
      projectDescription: string;
      projectTechnologies?: string[];
      projectLink?: string;
    };

    const projectItems: projectType[] = [
      {
        projectName: "Mobile Robotic Optic Mapper",
        projectImage: robotMapper,
        projectDescription: `A research project that was used for my University
                             Dissertation where Graphical Mapper process was implemented
                             on top of a Visual SLAM system. 
                             
                             A visual-based collision detection system was also written as a concurrent process 
                             to allow autonomous movement.`,
        projectTechnologies: [
          "C++",
          "ROS2 Foxy",
          "Orb-SLAM2",
          "Pointcloud",
          "Git",
          "Python 3",
          "Linux",
          "NumPy",
        ],
        projectLink: "https://github.com/AlexMuzzy/ORB_SLAM2-AUTO",
      },

      {
        projectName: "AstroField",
        projectImage: astroField,
        projectDescription: `A mobile game made in Unity, a rocket flies through an
                             infinite runner that has to avoid oncoming asteroids 
                             as they become increasingly more prevalent.`,
        projectTechnologies: ["Blender", "C#", "Unity"],
        projectLink: "https://github.com/AlexMuzzy/AstroField",
      },

      {
        projectName: "AppLocker",
        projectImage: appLocker,
        projectDescription: `An android app locker application, allowing you to lock
                             apps behind a password authentication system 
                             via asynchrounous calls.`,
        projectTechnologies: ["Java", "Gradle", "Android", "SQL", "SQLite"],
        projectLink: "https://github.com/AlexMuzzy/appLocker",
      },
    ];

    const ProjectItem = ({
      projectName,
      projectImage,
      projectDescription,
      projectTechnologies,
      projectLink,
    }: projectType) => (
      <Col lg="6" xs="12" style={{ display: "flex", width: "100% !important" }}>
        <CardShadow>
          <Card.Body>
            <Row>
              <Col sm="6">
                <Card.Text>
                  <div className="h4 lead">{projectName}</div>
                </Card.Text>
                <Card.Img
                  src={projectImage}
                  style={{
                    backgroundColor: "transparent",
                    maxWidth: "20rem",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
              </Col>
              <Col sm="6">
                <Card.Text style={{ paddingTop: "1.5rem" }}>
                  {projectDescription}
                </Card.Text>
                {projectTechnologies?.map((projectTechnology: string) => (
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
                    {projectTechnology}
                  </div>
                ))}
                <Card.Text>
                  <p>
                    <a href={projectLink}>Github Link: {projectLink} </a>
                  </p>
                </Card.Text>
              </Col>
            </Row>
            <Row></Row>
          </Card.Body>
        </CardShadow>
      </Col>
    );

    return (
      <Container>
        <SubHeading headingTitle="Projects" />
        <Row
          style={{
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            overflow: "auto",
            overflowY: "hidden",
          }}
          id="blue-scrollbar"
        >
          {projectItems.map((projectItem: projectType) => (
            <ProjectItem {...projectItem} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Projects;
