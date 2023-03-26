import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/devMatch.png";
import proj3 from "../assets/img/proj3.png";
import proj4 from "../assets/img/work-day-scheduler.png";
import proj5 from "../assets/img/passwordgenerator.png";
import proj6 from "../assets/img/notetaker.png";
export const Projects = () => {

    const projects = [
        {
            title: "devMatch",
            description: "A dating app for web developers",
            developement: "MERN Appplication",
            imgUrl: proj2,
            projectUrl: "https://github.com/Ezmaa/devMatch",
            deployedUrl: "https://ezmaa.github.io/Drink-Outside-The-Box/"
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
            projectUrl: "https://github.com/Ezmaa",
            deployedUrl: "https://ezmaa.github.io/Work-Day-Scheduler/"
        },
        {
            title: "Weather Dashboard",
            description: "A weahter dashboard that collects information from the openweather api",
            developement: "JavaScript, CSS, HTML",
            imgUrl: proj3, 
            projectUrl: "https://github.com/Ezmaa/Weather-Dashboard",
            deployedUrl: "https://ezmaa.github.io/Weather-Dashboard/"
        },
        {
            title: "Work Day Scheduler",
            description: "This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
            developement: "JavaScript, CSS, HTML",
            imgUrl: proj4, 
            projectUrl: "https://github.com/Ezmaa/Work-Day-Scheduler",
            deployedUrl: "https://ezmaa.github.io/Work-Day-Scheduler/"
        },
        {
            title: "Password Generator",
            description: "Javascript console that allows the randomization of generating a new paswword",
            developement: "JavaScript, CSS, HTML",
            imgUrl: proj5, 
            projectUrl: "https://github.com/Ezmaa/Password-Generator",
            deployedUrl: "https://ezmaa.github.io/Password-Generator/"
        },
        {
            title: "Note Taker App",
            description: "Express.js back end password based on the user's choice of special characters.",
            developement: "JavaScript, CSS, HTML",
            imgUrl: proj6, 
            projectUrl: "https://github.com/Ezmaa/Note-Taker-App",
            deployedUrl: "https://ezmaa.github.io/Note-Taker-App/"
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