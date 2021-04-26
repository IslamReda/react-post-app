import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Card } from 'react-bootstrap'

import LoginContext from "../LoginContext";

const Auth = (props) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useContext(LoginContext);

    const login = async (userEmail, userPassword) => {
        const userData = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${userEmail}`);
        const user = userData.data[0];
        if (!user) {
            alert("Invalid User!");
        } else {
            if (user.username !== userPassword) {
                alert("Invalid Password!");
                return;
            }
            console.log("valid");
            auth.userName = user.username;
            auth.userId = user.id;
            localStorage.setItem("userName", auth.userName);
            localStorage.setItem("userId", auth.userId);
            props.handleLogin();
            history.push('/');
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Invalid Credintials!');
            return;
        }
        await login(email, password)

    }

    return (
        <Card className="my-5 mx-2">
            <Card.Body>
                <Container className="my-5">
                    <Form  onSubmit={onSubmit}>
                        <Form.Group className="mt-5" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="The password is the username" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary mt-3" type="submit">
                            Login
                        </Button>
                    </Form>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default Auth;
