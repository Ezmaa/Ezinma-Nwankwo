import { Container, Row, Col } from "react-bootstrap";
import { Envelope } from "react-bootstrap-icons";
import headerImg from "../assets/img/laptop-wave.png";


export const MainPage = () => {
    
    return (
        <section className="main" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Relentlessly Solving Problems</h1>
                        <p>I am a driven software developer able to communicate proficiently and professionally in a team setting.  I can adapt and prioritize workflow, which allows me to work well with my team. “Great teamwork is the only way we create the breakthroughs that define our careers.”</p>
                        <button onClick={() => console.log('working')}>Let's Connect<Envelope size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Waving Laptop" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}