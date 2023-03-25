import { Col } from "react-bootstrap";

export const SkillsCard = ({ title, imgUrl }) => {
    return (
      <Col size={12} sm={6} md={4}>
      <div className="skill-imgbx">
        <img src={imgUrl} alt="" />
        <div className="skill-text">
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  )
}
