import React, { Fragment, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import whiteLogo from "../../assets/images/logo_white.png";
import blackLogo from "../../assets/images/logo_black.png";

export default function TopNavigation() {
  const [navProps, setNavProps] = useState({
    navTitle: "navTitle",
    navLogo: [whiteLogo],
    navBackground: "navBackgroundScroll",
    navItem: "navItem",
  });

  const onScroll = () => {
    if (window.scrollY > 100) {
      setNavProps({
        navTitle: "navTitleScroll",
        navLogo: [blackLogo],
        navBackground: "navBackgroundScroll",
        navItem: "navItemScroll",
      });
    } else if (window.scrollY < 100) {
      setNavProps({
        navTitle: "navTitle",
        navLogo: [whiteLogo],
        navBackground: "navBackground",
        navItem: "navItem",
      });
    }
  };

  useEffect(() => {
    // Do something here
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="dark"
        className={navProps.navBackground}
      >
        <Navbar.Brand href="#home" className={navProps.navTitle}>
          <img src={navProps.navLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="NavMarginRight">
            <Nav.Link className={navProps.navItem} href="#deets">
              HOME
            </Nav.Link>
            <Nav.Link className={navProps.navItem} href="#deets">
              ABOUT
            </Nav.Link>
            <Nav.Link className={navProps.navItem} href="#deets">
              SERVICE
            </Nav.Link>
            <Nav.Link className={navProps.navItem} href="#deets">
              COURSES
            </Nav.Link>
            <Nav.Link className={navProps.navItem} href="#deets">
              PORTFOLIO
            </Nav.Link>
            <Nav.Link className={navProps.navItem} href="#deets">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
