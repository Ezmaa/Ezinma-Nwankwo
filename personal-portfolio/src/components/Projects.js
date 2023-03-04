import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/proj1.png"
export const Projects = () => {

    const projects = [
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1,
            projectUrl: "https://github.com/Ezmaa"
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
            projectUrl: "https://github.com/Ezmaa"
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
            projectUrl: "https://github.com/Ezmaa"
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
            projectUrl: "https://github.com/Ezmaa"
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
            projectUrl: "https://github.com/Ezmaa"
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
            projectUrl: "https://github.com/Ezmaa"
        },
       
    ]
    return (
        <section className="project" id="projects">
            <Container>
            <Row>
                <Col size={12}>
                <h2>Projects</h2>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
               </Row>
                </Col>
            </Row>
            </Container>
        </section>
    )
}