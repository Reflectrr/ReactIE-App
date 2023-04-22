"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MyAppbar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/" className="mx-3">
                ReactIE
            </Navbar.Brand>
            <Nav style={{ flex: 1 }} className="me-auto flex">
                <Nav.Link href="/">Home</Nav.Link>
                <span style={{ flexGrow: 1 }} />
                <Nav.Link href="/" className="mx-3">
                    Login
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}
