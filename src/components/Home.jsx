import { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Util from "../Util";
import { navLinks, tags } from "../data/Contacts";

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    background: #E7F2F8;

    .main {
        width: 100vw;
        height: 96vh;
        position: relative;
    }

    h3, h4 {
        width: 100%;
        text-align: center;
        padding-top: 32px;
        font-weight: 900;
        color: #CB41F9;
    }

    .column {
        width: 10%;
        @media (max-width: 1024px) {
            display: none;
        }
    }

    .col-8 {
        @media (max-width: 1024px) {
            width: 100%;
        }
    }

    .menuButton {
        background: #CB41F9;
        border: none;
        display: none;

        &:focus {
            outline: none;
        }

        @media (max-width: 1024px) {
            display: block;
        }
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20%;
    }
`;

const Nav = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    padding: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        padding-left: 16px;
    }
`;

const Anchor = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    outline: none;
    border: 1px solid #EADBEF;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 700;
    text-align: left;
    margin-bottom: 8px;
    width: 80%;
    border-radius: 8px;
    background: ${({ isActive }) => (isActive ? '#CB41F9' : 'transparent')};
    color: ${({ isActive }) => (isActive ? 'white' : 'black')};
    transition: all .5s ease-in-out;
    cursor: pointer;

    &:hover {
        color: ${({ isActive }) => (isActive ? 'white' : 'black')};
        background: ${({ isActive }) => (isActive ? '#CB41F9' : '#EADBEF')};
    }
`;

const MainCard = styled.div`
    background: #EADBEF;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border: none; 
    border-radius: 8px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
    box-shadow: 1px 2px 2px 2px rgba(5, 5, 5, 0.1);
`;

const Header = styled.div`
    display: flex;
    height: 64px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
        font-weight: 900;
        color: #CB41F9;
    }

    .inputGroup {
        width: 40%;
    }
`;

const Scroller = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    align-items: center;
    justify-content: center;
    height: 72vh;

    img {
        width: 240px;
        height: 128px;
        border-radius: 8px;
        margin: 8px;
        object-fit: cover;
        transition: all 0.8s ease-in-out;
        box-shadow: 1px 1px 1px 2px rgb(1, 1, 1, 0.2);

        &:hover {
            transform: scale(1.05);
        }
        
        @media (max-width: 600px) {
            width: 512px;
            height: 256px;
        }

        @media (max-width: 1024px) {
            width: 50%;
            height: 256px;
        }

        @media (max-width: 1308px) {
            width: 240px;
            height: 128px;
        }
    }

    ::-webkit-scrollbar {
        width: 8px;
        border: none;
    }

    ::-webkit-scrollbar-track {
        background: #EADBEF;
    }

    ::-webkit-scrollbar-thumb {
        background: #CB41F9;
        border-radius: 2px;
    }
`;

const Tag = styled.a`
    background: #EADBEF;
    padding: 16px;
    text-decoration: none;
    color: black;
    margin: 4px;
    border-radius: 16px;
    cursor: pointer;
    box-shadow: 1px 1px 1px 2px rgba(1, 1, 1, 0.1);
    transition: all 0.5s ease-in-out;

    &:hover {
        outline: none;
        color: black;
        transform: scale(1.1);
    }
`;

const DropDown = styled.div`
    display: flex;
    flex-direction: column;
    background: #E7F2F8;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${({ show }) => (show ? '0%' : '-100%')};
    z-index: 100;
    transition: all 1s ease-in-out;

    span {
        padding: 4px;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;

export default function Home() {

    const [photos, setPhotos] = useState([]);
    const [init, setInit] = useState(true);
    const [show, setShow] = useState(false);

    const [active, setActive] = useState(0);

    const setPhotoList = (list) => {
        setPhotos([]);
        setPhotos(arr => [...arr, ...list]);
    }

    if (init) {
        setInit(false);
        Util("nature", setPhotoList);
    }

    const search = (event) => {
        if (event.keyCode === 13) {
            Util(document.getElementById("input").value, setPhotoList);
        }
    }

    const setColor = (key) => {
        if (parseInt(key) === parseInt(active)) return true; else return false;
    }

    const setActiveTab = (key) => {
        setActive(key);
    }

    const setActiveFromNav = (key) => {
        setShow(false);
        setActive(key);
    }

    return (
        <Wrapper>
            <DropDown show={show}>
                {
                    navLinks.map((item, key) => (
                        <Anchor href={item.href} key={key} onClick={() => setActiveFromNav(key)} isActive={setColor(key)}><i className={item.icon}></i><span>{item.title}</span></Anchor>
                    ))
                }
                <Anchor href="#" onClick={() => setActiveFromNav(active)} isActive={false}>
                    <i className="icofont-close"></i><span>Close</span>
                </Anchor>

            </DropDown>
            <Container className="p-3 main" fluid>
                <Row>
                    <Col className="column">
                        <h4>WallpaperLib.</h4>
                        <Nav>
                            {
                                navLinks.map((item, key) => (
                                    <Anchor href={item.href} key={key} onClick={() => setActiveTab(key)} isActive={setColor(key)}><i className={item.icon}></i><span>{item.title}</span></Anchor>
                                ))
                            }
                        </Nav>
                    </Col>
                    <Col xs={8}>
                        <MainCard>
                            <Header>
                                <Button className="menuButton"
                                    onClick={() => setShow(!show)}
                                >
                                    <i className="icofont-navigation-menu"></i>
                                </Button>
                                <h2>Welcome!</h2>
                                <InputGroup className="mb-3 inputGroup">
                                    <InputGroup.Text id="basic-addon1"><i className="icofont-search-2"></i></InputGroup.Text>
                                    <FormControl
                                        id="input"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="basic-addon1"
                                        onKeyDown={(event) => {
                                            search(event);
                                        }}
                                    />
                                </InputGroup>
                            </Header>
                            <Scroller>
                                hello
                                {
                                    photos.map((item, key) => (
                                        <img src={item} alt="img" key={key} />
                                    ))
                                }
                            </Scroller>
                        </MainCard>
                    </Col>
                    <Col className="column">
                        <h3>Tags</h3>
                        <div className="tags">
                            {
                                tags.map((item, key) => (
                                    <Tag key={key} onClick={() => Util(item, setPhotoList)}>{item}</Tag>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}
