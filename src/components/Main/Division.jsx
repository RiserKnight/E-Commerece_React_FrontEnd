import React from "react";
import Male from "../../../FemaleSign.jpg";
import Female from "../../../FemaleSign.jpg";
import "../../../public/styles.css";
import { Container, Row, Col } from "react-bootstrap";

function Division() {
  return (
    <div className="division-div">
      <Container fluid className="container-fluid" id="divisionContainer">
        <Row>
          <Col>
            <img className="section" src={Male} alt="His" />
            <h3 className="sectionHeading clickable">His</h3>
          </Col>
          <Col>
            <div />
          </Col>
          <Col>
            <img className="section" src={Female} alt="Her" />
            <h3 className="sectionHeading clickable">Her</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Division;
