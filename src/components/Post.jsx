import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row, Card } from 'react-bootstrap'

const Post = (props) => {
  return (

    <Container>
      <Card className="mx-5 my-5">
        <Card.Body className="my-2">
          <Row>
            <Col sm={10}>
              <h3>{props.post.title}</h3>
            </Col>
            <Col sm={2}>
              <Button variant="outline-primary" type="button" href={`/posts/${props.post.id}`} >View</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>

  )
}

Post.defaultProps = {
  showBody: true,
  showLink: true,
};


export default Post;

