import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap'

export function PostInput({ handleGetPosts }) {
  const [value, setValue] = useState("");
  return (
    <Container>
      <Form>
        <Row>
          <Col sm={10}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="search" placeholder="Search for posts" value={value} onChange={(e) => setValue(e.target.value)} />
            </Form.Group>
          </Col>
          <Col sm={2}>
            <Button variant="primary" type="button" className="my-4"
              onClick={() => {
                handleGetPosts(value);
                setValue("");
              }}
            >
              Search
          </Button>
          </Col>
        </Row>
      </Form>
    </Container>

  );
}
