import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap'

export function Header({ userId }) {
  return (
    <Navbar bg="teal" variant="dark">
      <Container className="text-center">
        <Navbar.Brand>
          <h2>Welcome to our Blog User #{userId}</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
