import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      image: "/api/placeholder/1200/400",
      title: "Welcome to Our Site",
      description: "Discover amazing products and services",
    },
    {
      id: 2,
      image: "/api/placeholder/1200/400",
      title: "Special Offers",
      description: "Don't miss out on our latest deals",
    },
    {
      id: 3,
      image: "/api/placeholder/1200/400",
      title: "Join Our Community",
      description: "Connect with like-minded individuals",
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="font-mont text-4xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="font-mont text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
