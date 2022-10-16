import React from "react";
import "./Navs.css";
import { Navbar, Nav, Container,Form ,Button} from "react-bootstrap";
import logo from "./../../assets/logo.png" ;

const Navs = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About us</Nav.Link>
                        <Nav.Link href="#link">Explore Food</Nav.Link>
                        <Nav.Link href="#link">Review</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                        <Form >
                            <Button >2335435223</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs