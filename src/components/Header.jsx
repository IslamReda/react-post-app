import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap'

export function Header({ title }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="text-center">
        <Navbar.Brand>
          <h2>{title}</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
