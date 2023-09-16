import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DOTD1 from "../../../ModelNo1.jpg";
import DOTD2 from "../../../ModelNo2.jpg";
import DOTD3 from "../../../ModelNo3.jpg";
import DOTD4 from "../../../ModelNo4.jpg";
import "../../../public/styles.css";

function TOT() {
  return (
    <div className="TOT-div">
      <h1 className="heading">Top Trending</h1>

      <Container fluid className="container-fluid">
        <Row>
          <Col>
            <img
              className="feature-box"
              widht="168px"
              height="225px"
              src={DOTD1}
              alt="Shirt"
            />
            <div className="product-description-div">
              <p className="product-description">Model No 1</p>
              <p id="discount" className="product-description">
                20% Off
              </p>
              <p id="rate" className="product-description">
                Rs. 2000
              </p>
            </div>
          </Col>
          <Col>
            <img
              className="feature-box"
              widht="168px"
              height="225px"
              src={DOTD2}
              alt="Shirt"
            />
            <div className="product-description-div">
              <p className="product-description">Model No 2</p>
              <p id="discount" className="product-description">
                20% Off
              </p>
              <p id="rate" className="product-description">
                Rs. 2000
              </p>
            </div>
          </Col>
          <Col>
            <img
              className="feature-box"
              widht="168px"
              height="225px"
              src={DOTD3}
              alt="Shirt"
            />
            <div className="product-description-div">
              <p className="product-description">Model No 3</p>
              <p id="discount" className="product-description">
                20% Off
              </p>
              <p id="rate" className="product-description">
                Rs. 2000
              </p>
            </div>
          </Col>
          <Col>
            <img
              className="feature-box"
              widht="168px"
              height="225px"
              src={DOTD4}
              alt="Shirt"
            />
            <div className="product-description-div">
              <p className="product-description">Model No 4</p>
              <p id="discount" className="product-description">
                20% Off
              </p>
              <p id="rate" className="product-description">
                Rs. 2000
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TOT;
