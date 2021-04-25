import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row, Card } from 'react-bootstrap'

export function PostItem({ post, handleView }) {
  return (
    <Container>
      <Card className="mx-5 my-5">
        <Card.Body className="my-2">
          <Row>
            <Col sm={10}>
              <h3>{post.title}</h3>
            </Col>
            <Col sm={2}>
              <Button variant="outline-primary" type="button" onClick={() => handleView(post)} >
                View post
                </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>


  );
}


