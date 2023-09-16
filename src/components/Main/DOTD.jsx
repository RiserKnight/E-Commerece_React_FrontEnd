import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DOTD1 from "../../../DOTD1.jpg";
import DOTD2 from "../../../DOTD1.jpg";
import DOTD3 from "../../../DOTD4.jpg";
import DOTD4 from "../../../DOTD4.jpg";
import "../../../public/styles.css";

function DOTD() {
  return (
    <div className="DOTD-div">
      <h1 className="heading">Deal of the Day</h1>

      <Container fluid className="container-fluid">
        <Row>
          <Col>
            <img className="feature-box" src={DOTD1} alt="Shirt" />
            <div className="product-description-div">
              <p className="product-description">Free Fire T-Shirt</p>
              <p id="discount" className="product-description">
                20% Off
              </p>
              <p id="rate" className="product-description">
                Rs. 199
              </p>
            </div>
          </Col>
          <Col>
            <img className="feature-box" src={DOTD2} alt="Shirt" />
            <div className="product-description-div">
              <p className="product-description">Free Fire T-Shirt</p>
              <p id="discount" className="product-description">
                20% Off
              </p>
              <p id="rate" className="product-description">
                Rs. 199
              </p>
            </div>
          </Col>
          <Col>
            <img className="feature-box" src={DOTD3} alt="Shirt" />
            <div className="product-description-div">
              <p className="product-description">Free Fire T-Shirt</p>
              <p id="discount" className="product-description">
                20% Off
              </p>
              <p id="rate" className="product-description">
                Rs. 199
              </p>
            </div>
          </Col>
          <Col>
            <img className="feature-box" src={DOTD4} alt="Shirt" />
            <div className="product-description-div">
              <p className="product-description">Free Fire T-Shirt</p>
              <p id="discount" className="product-description">
                20% Off
              </p>
              <p id="rate" className="product-description">
                Rs. 199
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DOTD;
