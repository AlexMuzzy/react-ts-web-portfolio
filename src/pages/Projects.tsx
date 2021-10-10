import { Component, CSSProperties } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardShadow from "../components/CardMapper";
import SubHeading from "../components/SubHeading";

class Projects extends Component<{ borderShadow: CSSProperties }> {
  render() {
    type projectType = {
      projectName: string;
      projectImage?: string;
      projectTechnologies?: string[];
    };

    const projectItems: projectType[] = [
      {
        projectName: "Mobile Robotic Optic Mapper",
      },
    ];

    return (
      <Container fluid>
        <SubHeading headingTitle="Skills"/>
        <Row
          style={{
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
          }}
        >
          {projectItems.map((projectItem: projectType) => (
            <Col md="6" xl="4" style={{ display: "flex" }}>
              <CardShadow>
                {projectItem.projectName}
              </CardShadow>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Projects;
