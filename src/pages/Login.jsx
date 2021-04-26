import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { BoxArrowInRight } from "react-bootstrap-icons";
import { Link, useNavigate } from "@reach/router";

export function Login({ handleGetPosts }) {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const navigate = useNavigate();


  // I was being helped by Aya but then I told her to stop, this is one of her methods in her Repo
  // const handleSubmit = (userName, password) => {

  //   fetch(
  //     `https://jsonplaceholder.typicode.com/users?username=${userName}&email=${password}`
  //   )
  //     .then((response) => response.json())
  //     .then((fetchedUsers) => {
  //       if (fetchedUsers.length > 0) {
  //         updateAutehnUser({ ...fetchedUsers[0], isAuthen: true, errorMsg: "" });
  //         navigate("/");
  //       } else {
  //         navigate("/login");
  //         updateAutehnUser({ errorMsg: "Invalid username or password.", isAuthen: false });
  //       }
  //     });
  // };

  return (
    <Container className="my-3">
      <Form>
        <Row>
          <Col sm={10}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g ahmed35@gmail.com"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col sm={10}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={passValue}
                onChange={(e) => setPassValue(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Button
              variant="primary"
              type="button"
              className="my-4"
              onClick={() => {
                // handleSubmit(emailValue, passValue);
                setEmailValue("");
                setPassValue("");
              }}
            >
              Login
              <BoxArrowInRight size="22px" />
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
