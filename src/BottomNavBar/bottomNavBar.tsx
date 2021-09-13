import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class BottomNavBar extends Component {
  render() {
    type contactType = {
      icon: IconDefinition;
      text: string;
      link?: string;
    };

    // All associated social media connections and their links go here.
    let contactItems: contactType[] = [
      { icon: faFacebook, text: "Facebook" },
      { icon: faGithub, text: "GitHub" },
      { icon: faInstagram, text: "Instagram" },
      { icon: faLinkedin, text: "LinkedIn" },
    ];

    const NavBarItem = ({ icon, text, link }: contactType) => (
      <Navbar.Text
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          marginRight: "5vw",
        }}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
        <div className="pl-2 pt-1 d-none d-sm-block">{text}</div>
      </Navbar.Text>
    );

    return (
      <Navbar fixed="bottom" style={{ backgroundColor: "blue" }}>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse style={{ justifyContent: "center" }}>
            {contactItems.map((contactItem: contactType) => (
              <NavBarItem {...contactItem} />
            ))}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default BottomNavBar;