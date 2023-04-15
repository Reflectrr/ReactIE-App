import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyAppbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">ReactIE</Navbar.Brand>
        <Nav style={{ flex: 1 }} className="me-auto flex">
          <Nav.Link href="/">Home</Nav.Link>
          <span style={{ flexGrow: 1 }} />
          <Nav.Link href="/">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
