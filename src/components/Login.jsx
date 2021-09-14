import { useState } from "react";
import { Row, Col, Button, Card, Form, Alert, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

    const [isLogged, setIsLogged] = useState(false);

    const onLogin = (e) => {
        e.preventDefault();
        setIsLogged(true);
        window.location.href = "/home";
    }

    return (
        <Container className="p-5" fluid>
            <Card className="m-5">
                <Card.Header className="text-center">Login</Card.Header>
                {
                    isLogged && <Alert className="text-center" variant="success">Login success</Alert>
                }
                <Card.Body>
                    <Form onSubmit={onLogin} id="loginForm">
                        <Row>
                            <Col md>
                                <Form.Group className="m-2">
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control type="email" placeholder="Email" id="email" required>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group className="m-2">
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type="password" placeholder="Password" id="password" required>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" className="m-2" type="submit" xs={5}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login;