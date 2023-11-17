import React from "react";
import crad_1 from "../image/card-bg1.jpeg";
import crad_2 from "../image/card-bg2.jpeg";
import crad_3 from "../image/card-bg3.jpeg";
import crad_4 from "../image/card-bg4.jpeg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RedTitle from "../image/title-bg.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const FitNews = () => {
  const CardsData = [
    {
      title: "Exercise volume",
      date: "June 22, 2020",
      src: crad_4,
      views: "65.9K views",
      to: "/blog/volume",
    },
    {
      title: "The energy",
      date: "June 24, 2020",
      src: crad_3,
      views: "40.2K views",
      to: "/blog/energy",
    },
    {
      title: "How to burn calories easily and without a teacher",
      date: "July 22, 2020",
      src: crad_2,
      views: "10.7K views",
      to: "/blog/calories",
    },
    {
      title: "What is yoga",
      date: "June 16, 2020",
      src: crad_1,
      views: "15.3K views",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="h-auto w-full flex justify-center py-10">
      <div className="container min-w-[360px] h-auto md:px-2 xsm:px-1 flex flex-col">
        <div className="relative">
          <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
            News
          </p>
          <img
            src={RedTitle}
            alt="text_bg"
            className="w-[12rem] absolute top-[-6px] left-[-69px]"
          />
          <h1 className="text-[54px] xxl:text-[90px] lg:text-[60px] font-primary font-bold capitalize lg:leading-[110%] tracking-[-0.05em] mb-2">
            Latest articles from all categories!
          </h1>
        </div>
        <div className="w-full m-auto mb-5">
          <div className="mt-20">
            <Slider {...settings}>
              {CardsData.map((card, index) => (
                <Link to={card.to}>
                  <div
                    className="flex flex-col bg-white rounded-lg overflow-hidden shadow-xl h-[372px]"
                    key={index}
                  >
                    {/*dark:bg-gray-900 */}
                    <a
                      href="https://twitter.com/mandalosy"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                      <img
                        alt=""
                        className="bg-cover w-full h-52 dark:bg-gray-500"
                        src={card.src}
                      />
                    </a>
                    <div className="flex flex-col flex-1 p-6">
                      <a
                        rel="noopener noreferrer"
                        href="https://twitter.com/mandalosy"
                        aria-label="Te nulla oportere reprimique his dolorum"
                      ></a>
                      <a
                        rel="noopener noreferrer"
                        href="https://twitter.com/mandalosy"
                        className="text-xs tracki hover:underline text-violet-400"
                      >
                        Learn More
                      </a>
                      <h3 className="flex-1 py-2 text-lg font-semibold leadi text-black">
                        {card.title}
                      </h3>
                      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                        <span>{card.date}</span>
                        <span>{card.views}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center">
          <Link to="/blog">
            <button className="w-40 font-primary bg-red-600 text-xl rounded py-3 text-white border border-red-600 hover:bg-black hover:border-black hover:text-white transition duration-500 mt-4">
              Another Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FitNews;
