import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Card } from 'react-bootstrap'
import LoginContext from "../LoginContext";

const CreatePost = () => {

    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const auth = useContext(LoginContext);

    const createPost = async (title, body) => {
        const payload = {
            title,
            body,
            userId: auth.userId,
        };
        const data = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);
        const post = data.data;
        console.log(post);
        history.push(`/posts/7`);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!title || !body) {
            alert('InvalidPpost!');
            return;
        }
        await createPost(title, body)

    }

    return (
        <Card className="my-5 mx-2">
            <Card.Header><h3>Create New Post</h3></Card.Header>
            <Card.Body>
                <Container className="my-5">
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mt-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mt-3" controlId="formBasicPassword">
                            <Form.Label>Body</Form.Label>

                            <Form.Control as="textarea" rows={10} type="text" placeholder="Body..."
                                value={body}
                                onChange={(e) => setBody(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary mt-3" type="submit">
                            Add Post
                </Button>
                    </Form>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default CreatePost;



