"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MyAppbar() {
    return (
        <Navbar bg="primary" variant="dark" style={{ flex: 1 }}>
            <Navbar.Brand href="/" className="mx-3" style={{ flexGrow: 1 }}>
                ReactionMiner
            </Navbar.Brand>
        </Navbar >
    );
}
