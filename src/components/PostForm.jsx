import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

export function PostForm({ handleSubmit }) {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  return (
    <Container className="my-3">
      <Form>
        {/* <Row> */}
        {/* <Col sm={10}> */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title here"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
        </Form.Group>
        {/* </Col> */}
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={bodyValue}
            onChange={(e) => setBodyValue(e.target.value)}
          />
        </Form.Group>
        {/* <Col sm={2}> */}
        <Button
          variant="success"
          type="submit"
          className="my-4"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(titleValue, bodyValue);
            setTitleValue("");
            setBodyValue("");
          }}
        >
          Submit
        </Button>
        {/* </Col> */}
        {/* </Row> */}
      </Form>
    </Container>
  );
}
