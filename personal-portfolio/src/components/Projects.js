import { Container, Row, Col } from "react-bootstrap";

export const Projects = () => {

    const projects = [
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
        },
        {
            title: "Drink Outside The Box",
            description: "An app that generates a random drink and a joke",
            developement: "JavaScript, CSS, Bulma",
            imgUrl: proj1, 
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
            <Row>
                <Col size={12}>
                <h2>Projects</h2>
                <Row>
                      </Row>
                </Col>
            </Row>
            </Container>
        </section>
    )
}