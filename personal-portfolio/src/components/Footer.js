import { Col, Container, Row } from "react-bootstrap";
import githubIcon from '../assets/img/github-icon.png';
import linkedinIcon from '../assets/img/linked-in-icon.png';

export const Footer = () => {
    return (
        <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={8} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Ezmaa"><img src={githubIcon} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/ezinma-nwankwo-3b7905234"><img src={linkedinIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    )
}