import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../NavBar/NavBarBrand.css";

export default function NavBarBrand() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navBar">
      <Container>
        <Navbar.Brand href="#home" className="titleNavbar">START BOOTSTRAP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="optionsNavBar">
            <Nav.Link href="#portafolio">PORTAFOLIO</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
