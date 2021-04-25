import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'

export function PostItem({ post, handleView }) {
  return (

    <Card className="mx-5 my-5">
    <Card.Body>
      <h3>{post.title}</h3>
      <Button variant="outline-primary" type="button" className="mt-4" onClick={() => handleView(post)} >
        View post
      </Button>
    </Card.Body>
    </Card>
  );
}


