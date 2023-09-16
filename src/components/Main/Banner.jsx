import React from "react";
import feedbackBanner from "../../../FeedbackBanner.gif";
import caraouselBanner2 from "../../../1440x383.png";
import caraouselBanner1 from "../../../girls go ultimate.png";
import caraouselBanner3 from "../../../your own design.png";
import caraouselBanner4 from "../../../allProduct.png";
import "../../../public/styles.css";
import Carousel from "react-bootstrap/Carousel";

function IntroBanner() {
  return (
    <Carousel interval={3000} className="IntroBanner">
      <Carousel.Item>
        <img
          className="d-block"
          id="banner-img"
          src={caraouselBanner1}
          alt="Special Collection slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          id="banner-img"
          src={caraouselBanner2}
          alt="Tees slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          id="banner-img"
          src={caraouselBanner3}
          alt="Your Design slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          id="banner-img"
          src={caraouselBanner4}
          alt="Caps slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

function FeedbackBanner() {
  return <img className="banners" src={feedbackBanner} alt="Feedback Banner" />;
}

export { IntroBanner, FeedbackBanner };
