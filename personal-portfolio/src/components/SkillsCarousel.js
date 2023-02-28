import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javascriptIcon from "../assets/img/jsIcon.png";
import reactIcon from "../assets/img/reactIcon.png";
import bootstrapIcon from "../assets/img/bootstrapIcon.png";
import css3Icon from "../assets/img/cssIcon.png";
import sqlIcon from "../assets/img/mySQLIcon.png";
import nodeJsIcon from "../assets/img/nodeJsIcon.png";
import mongoDbIcon from "../assets/img/mongoDbIcon.png";
import pwaIcon from "../assets/img/pwaIcon.png";
import restIcon from "../assets/img/restApiIcon.png";

export const SkillsCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skills" id="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skillbox">
                            <h2>
                                Skills
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skillslider">
                                <div className="item">
                                    <img src={javascriptIcon} alt="JavaScript" />
                                    <h4>JavaScript</h4>
                                </div>
                                <div className="item">
                                    <img src={reactIcon} alt="React" />
                                    <h4>React</h4>
                                </div>
                                <div className="item">
                                    <img src={bootstrapIcon} alt="Bootstrap" />
                                    <h4>Bootstrap</h4>
                                </div>
                                <div className="item">
                                    <img src={css3Icon } alt="CSS3" />
                                    <h4>CSS3</h4>
                                </div>
                                <div className="item">
                                    <img src={sqlIcon} alt="Sql" />
                                    <h4>Sql</h4>
                                </div>
                                <div className="item">
                                    <img src={nodeJsIcon} alt="NodeJs" />
                                    <h4>NodeJs</h4>
                                </div>
                                <div className="item">
                                    <img src={mongoDbIcon} alt="MongoDb" />
                                    <h4>MongoDb</h4>
                                </div>
                                <div className="item">
                                    <img src={pwaIcon} alt="Progressive Web App" />
                                    <h4>Progressive Web App</h4>
                                </div>
                                <div className="item">
                                    <img src={restIcon} alt="Rest Api" />
                                    <h4>Rest Api</h4>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

