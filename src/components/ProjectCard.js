import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl, deployedUrl, developement }) => {
    return (
      <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-text">
          <h4>{title}</h4>
          <div>{description}</div>
          <div>{developement}</div>
          <a href={projectUrl}><Button variant="secondary">Github</Button></a> 
          <a href={deployedUrl}><Button variant="secondary">Deployed</Button></a> 
        </div>
      </div>
    </Col>
  )
}




