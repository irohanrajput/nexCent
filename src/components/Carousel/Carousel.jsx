// Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import Lessons from './CaraouselComponents/Lessons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marketing from '../Marketing/Marketing';
import CustomerReview from '../Body/CustomerReviews/CustomerReview';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
  };

  return (
    <div className="py-8 dark:bg-darkBackground">
      <Slider {...settings}>
        <div>
          <Lessons />
        </div>
        <div>
          <CustomerReview />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
