import { Container, Row, Col } from "react-bootstrap";
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
import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
  const skills = [
    {
      title: "JavaScript",
      imgUrl: javascriptIcon,
    },
    {
      title: "React",
      imgUrl: reactIcon,
    },
    {
      title: "Bootstrap",
      imgUrl: bootstrapIcon,
    },
    {
      title: "CSS3",
      imgUrl: css3Icon,
    },
    {
      title: "Sql",
      imgUrl: sqlIcon,
    },
    {
      title: "NodeJs",
      imgUrl: nodeJsIcon,
    },
    {
      title: "MongoDb",
      imgUrl: mongoDbIcon,
    },
    {
      title: "PWA",
      imgUrl: pwaIcon,
    },
    {
      title: "Rest Api",
      imgUrl: restIcon,
    },
  ];
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Skills</h2>
            <Row>
              {skills.map((skill, index) => {
                return <SkillsCard key={index} {...skill} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
