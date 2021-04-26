import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

const Header = (props) => {

    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <h2>{props.title}</h2>
                </Navbar.Brand>

                {props.userName ? <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/create">Create Post</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Button variant="outline-danger mx-4" href="/logout">Logout</Button>

                    <h3>{props.userName}</h3>
                </Nav> : ""}
            </Container>
        </Navbar>
    )
}

export default Header;


