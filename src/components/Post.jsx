import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export function Post({ post, isPostLoading }) {
  return isPostLoading ? (
    <Container className="mt-5">
      <div id={`post-${post.id}`}>
        <h2>Loading...</h2>
      </div>
    </Container>
  ) : (
    <Container className="mt-5">
      <div id={`post-${post.id}`}>
        {post && <h2>{post.title}</h2>}
        <p>{post.body}</p>
      </div>
    </Container>
  );
}
