import { Col, Container, Row } from "react-bootstrap";
import githubIcon from '../assets/img/github-icon.png';
import linkedinIcon from '../assets/img/linked-in-icon.png';

export const Footer = () => {
    return (
        <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="social-icon">
                <div>
              <a href="https://github.com/Ezmaa"><img src={githubIcon} alt="Icon" /></a>
              </div>
              <div>
              <a href="https://www.linkedin.com/in/ezinma-nwankwo-3b7905234"><img src={linkedinIcon} alt="Icon" /></a>
              </div>
            </div>
          </Col>
          <Col>
          <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    )
}