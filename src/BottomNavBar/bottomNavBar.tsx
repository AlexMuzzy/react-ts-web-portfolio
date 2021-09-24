import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Navbar } from "react-bootstrap";

import "./bottomNavBar.css";

class BottomNavBar extends Component {
  render() {
    type contactType = {
      icon: IconDefinition;
      link?: string;
    };

    // All associated social media connections and their links go here.
    let contactItems: contactType[] = [
      { icon: faFacebook, link: "https://www.facebook.com/AlexMuzey/" },
      { icon: faGithub, link: "https://github.com/AlexMuzzy" },
      { icon: faInstagram, link: "https://www.instagram.com/alex.muzzy/" },
      { icon: faLinkedin, link: "https://www.linkedin.com/in/alex-musgrove-242a0b16a/" },
    ];

    const NavBarItem = ({ icon, link }: contactType) => (
      <a href={link}>
        <Navbar.Text
          style={{
            color: "white",
          }}
          className="mx-4"
        >
          <FontAwesomeIcon icon={icon} size="2x" className="hvr-fade" />
        </Navbar.Text>
      </a>
    );

    return (
      <Navbar fixed="bottom" style={{ backgroundColor: "blue" }}>
        <Navbar.Collapse style={{ justifyContent: "center", width: "100%" }}>
          {contactItems.map((contactItem: contactType) => (
            <NavBarItem {...contactItem} />
          ))}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default BottomNavBar;
