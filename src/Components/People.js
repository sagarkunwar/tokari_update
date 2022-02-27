import { useState } from "react";
import Slider from "react-slick";
import "../styles/People.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import sagar from "../assets/sagar.jpg";
import rayan from "../assets/rayan.jpg";
import durgesh from "../assets/durgesh.jpg";

const image = [sagar, rayan, durgesh];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

const People = () => {
  const [SlideIndex, setSlideindex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSlideindex(next),
    centerMode: true,
  };
  return (
    <div className="people-container">
      <h1 className="people-heading">Our Team</h1>
      <h3 className="people-description">
        People with industry changing vision
      </h3>
      <div className="img-slider">
        <Slider {...settings} className="test-slider">
          {image.map((img, index) => (
            <div
              className={index === SlideIndex ? "slide slide-active" : "slide"}
              key={index}
            >
              <img src={img} alt="" />
              <h1>Hello</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default People;
