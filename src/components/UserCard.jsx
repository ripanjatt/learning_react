import Card from "react-bootstrap/Card";
import styled from "styled-components";

const Wrapper = styled.div`

    margin: 4px;
    
    .card {
        height: 64px;
        justify-content: center;
        cursor: pointer;
    }

    .img {
        width: 48px;
        height: 48px;
        border-radius: 48px;
    }
    .info {
        align-items: center;
    }
`;

export default function UserCard(props) {
    let data = props.data;

    return (
        <Wrapper onClick={() => props.onClick(props.data)}>
            <Card className="card">
                <Card.Body className="d-flex info">
                    <img src={data.img} className="img" alt="img"/>
                    <h5 className="text-center m-2">{data.name}</h5>
                </Card.Body>
            </Card>
        </Wrapper>
    )
}
