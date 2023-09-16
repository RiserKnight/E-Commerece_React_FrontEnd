import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import "../../../public/styles.css";

function Footer() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5
      }}
    />
  );
  return (
    <div className="footer">
      <Container fluid className="footer-container">
        <Row>
          <Col style={{ paddingLeft: "0" }}>
            <h3 style={{ textAlign: "left" }}>Company Name</h3>
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Customer Service</h5>
            <br />
            <ul type="none">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Return Order</li>
              <li>Cancel Order</li>
            </ul>
          </Col>

          <Col>
            <h5>COMPANY</h5>
            <br />
            <ul type="none">
              <li>About Us</li>
              <li>We're Hiring</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Blog</li>
            </ul>
          </Col>

          <Col>
            <h5>CONNECT WITH US</h5>
            <br />

            <div id="downloadImg3" className="footer-icon">
              <FacebookIcon />
            </div>

            <div id="downloadImg3" className="footer-icon">
              <InstagramIcon />
            </div>

            <div id="downloadImg3" className="footer-icon">
              <TwitterIcon />
            </div>

            <div id="downloadImg3" className="footer-icon">
              <PinterestIcon />
            </div>
          </Col>

          <Col>
            <h5>KEEP UP TO DATE</h5>
            <br />
            <form>
              <input
                type="email"
                className="subscription"
                placeholder="Enter Email Id"
              />
              <input
                type="submit"
                value="SUBSCRIBE"
                className="subscribeButton"
              />
            </form>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <ul type="none">
              <li>
                <a className="return_order" href="@.com">
                  15 Days return policy
                </a>{" "}
              </li>
              <br />
              <li>
                <a className="cod" href="@.com">
                  Cash on delivery
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>DOWNLOAD THE APP</h5>

            <img
              src="https://images.bewakoof.com/web/app_android_v1.png"
              title="android app"
              alt="android app"
              width="100px"
              className="download"
              id="downloadImg1"
            />
            <img
              src="https://images.bewakoof.com/web/app_ios_v1.png"
              title="ios app"
              alt="ios app"
              width="100px"
              className="download"
              id="downloadImg1"
            />
          </Col>

          <Col>
            <h5>100% SECURE PAYMENT</h5>
            <img
              src="https://images.bewakoof.com/web/secure-payments-image.png"
              title="secure payments"
              alt="secure payments"
              id="downloadImg2"
            />
          </Col>
          <Col />
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
}

export default Footer;
