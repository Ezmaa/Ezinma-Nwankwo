import { Col, Container, Row } from "react-bootstrap";
import alertImg from '../assets/img/spacesuit.png';

export const Footer = () => {
    return (
        <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={alertImg} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}