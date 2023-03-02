import { Col, Button, Card } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="project-card">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Github</Button>
        </Card.Body>
      </Card>
      </div>
      </Col>
    )
}