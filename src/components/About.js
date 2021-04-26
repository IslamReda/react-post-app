import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Card, Container, Button, Col, Row } from 'react-bootstrap'
const About = () => {
    return (


//         <Row>
//     <Col xs={12} md={8}>
//       xs=12 md=8
//     </Col>
//     <Col xs={6} md={4}>
//       xs=6 md=4
//     </Col>
//   </Row>
        <Container className="my-5 mx-5">
            <Card border="danger"  style={{ width: '90%' }}>
                <Card.Header className="text-center"><h3>About Us</h3></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row><Col  md={10}><h5>Shehab Eldeen</h5></Col>
                        <Col  md={2}><Button variant="outline-primary" type="button" href="https://github.com/ShehabEl-DeenAlalkamy" >Github</Button> </Col></Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row><Col  md={10}><h5>Sondos Medhat</h5></Col>
                    <Col  md={2}> <Button variant="outline-primary" type="button" href="https://github.com/sondos-medhat" >Github</Button></Col></Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row><Col  md={10}><h5>Islam Reda</h5></Col>
                    <Col  md={2}> <Button variant="outline-primary" type="button" href="https://github.com/IslamReda" >Github</Button></Col></Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row><Col  md={10}><h5>Ahmed Samy</h5></Col>
                    <Col  md={2}><Button variant="outline-primary" type="button" href="https://github.com/Ahmedsamymahrous" >Github</Button></Col></Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>

    )
}

export default About;
