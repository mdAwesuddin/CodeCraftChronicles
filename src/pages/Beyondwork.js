import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BlogsState } from "../Context";

const Beyondwork = () => {
  const { images } = BlogsState() || {};
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    if (images && images.length > 0) {
      const flattenedImages =
        images[0]?.image.map((imgObj) => imgObj.image) || [];
      setImageList(flattenedImages);
    }
  }, [images]);

  const firstSliderImages = imageList.slice(0, 15);
  const secondSliderImages = imageList.slice(15);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="my-8">
        <h1 className="sm:text-3xl text-2xl pb-3 font-bold font-playwrite text-gray-900 text-center dark:text-gray-300">
          Where Life's{" "}
          <span className="text-bigheading leading-12 text-gradient-to-r from-blue-400 to-purple-500">
            {" "}
            Best Moments
          </span>{" "}
          Happen
        </h1>
      </div>
      <div className="slider-container my-10 mx-3">
        {imageList.length > 0 ? (
          <>
            <Slider {...settings} className="space-x-4">
              {firstSliderImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="h-72 flex justify-center items-center overflow-hidden"
                >
                  <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="object-cover h-full w-72"
                  />
                </div>
              ))}
            </Slider>

            {secondSliderImages.length > 0 && (
              <Slider {...settings1} className="my-12 space-x-4">
                {secondSliderImages.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="h-72 flex justify-center items-center overflow-hidden"
                  >
                    <img
                      src={imageUrl}
                      alt={`Slide ${index + 1}`}
                      className="object-cover h-full w-72"
                    />
                  </div>
                ))}
              </Slider>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Beyondwork;
