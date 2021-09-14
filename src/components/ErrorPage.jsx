import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export default function ErrorPage() {
    return (
        <Container>
            <h2>Page not found!</h2>
            <Button
                variant="primary"
                onClick={() => (window.location.href = "/learn_react")}>
                Go to Homepage!
            </Button>
        </Container>
    )
}
