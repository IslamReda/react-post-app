import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap'

const PostDetails = (props) => {

    const [post, setPost] = useState([]);
    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}/comments`)
            .then((response) => response.json())
            .then((json) => setPostComments(json))
            .catch((err) => {
                console.log("No post");
                console.log(err);
            });

        fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then((response) => response.json())
            .then((json) => {
                setPost(json);
            }).catch((err) => {
                console.log("No post");
                console.log(err);
            });

    }, [props.match.params.id]);

    return (
        <Container >
            <Card className="my-5" border="primary" >
            <Card.Header><h3>Post</h3></Card.Header>

                <Card.Body className="my-2">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header><h3>Comments</h3></Card.Header>
                <Card.Body className="my-2">

                    {postComments.map((post) => {
                        return (<div key={post.id}>
                            <p>name: {post.name}</p>
                            <p>email: {post.email}</p>
                            <p>body: {post.body}</p>
                            <hr />
                        </div>)
                    })}
                </Card.Body>
            </Card>
        </Container>
    )
}

export default PostDetails



