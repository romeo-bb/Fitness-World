import React, { useState, useEffect } from "react";
import RedTitle from "../image/title-bg.svg";
import NavContact from "../components/NavContact";
import crad_1 from "../image/card-bg1.jpeg";
import crad_2 from "../image/card-bg2.jpeg";
import crad_3 from "../image/card-bg3.jpeg";
import crad_4 from "../image/card-bg4.jpeg";
import crad_5 from "../image/card_5.jpg";
import crad_6 from "../image/card_6.jpeg";
import crad_7 from "../image/card_7.jpeg";
import crad_8 from "../image/card_8.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  const [displayAll, setDisplayAll] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CardsData = [
    {
      id: 1,
      title: "The size of the exercise",
      date: "June 22, 2020",
      src: crad_4,
      views: "65.9K views",
      to: "/blog/volume",
    },
    {
      id: 2,
      title: "The energy",
      date: "June 24, 2020",
      src: crad_3,
      views: "40.2K views",
      to: "/blog/energy",
    },
    {
      id: 3,
      title: "How to burn calories easily and without a teacher",
      date: "July 22, 2020",
      src: crad_2,
      views: "10.7K views",
      to: "/blog/calories",
    },
    {
      id: 4,
      title: "What is yoga",
      date: "June 16, 2020",
      src: crad_1,
      views: "15.3K views",
    },
    {
      id: 5,
      title: "The size of the exercise",
      date: "June 6, 2023",
      src: crad_5,
      views: "23.9K views",
    },
    {
      id: 6,
      title: "The energy",
      date: "June 24, 2023",
      src: crad_6,
      views: "65.7K views",
    },
    {
      id: 7,
      title: "How to burn calories easily and without a teacher",
      date: "July 22, 2020",
      src: crad_7,
      views: "35.2K views",
    },
    {
      id: 8,
      title: "What is yoga",
      date: "June 16, 2023",
      src: crad_8,
      views: "19.6K views",
    },
  ];
  const visibleCardsdata = displayAll ? CardsData : CardsData.slice(0, 6);

  const toggleDisplay = () => {
    setDisplayAll(!displayAll);
  };

  return (
    <div className="h-auto w-full flex justify-center">
      <NavContact />
      <div className="container min-w-[360px] h-auto md:px-2 xsm:px-1 flex flex-col mt-28">
        <div className="relative mb-16">
          <p className="text-white relative z-10 text-[19px] uppercase font-bold mb-8 left-[10px]">
            More articles
          </p>
          <img
            src={RedTitle}
            alt="text_bg"
            className="w-[13rem] absolute top-[-4px] left-[-14px]"
          />
          <h1 className="text-[54px] xxl:text-[90px] lg:text-[60px] font-primary font-bold capitalize lg:leading-[110%] tracking-[-0.05em] mb-2">
            All articles in all categories.
          </h1>
        </div>
        <div className="m-auto grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 gap-x-8 gap-y-5 mb-6">
          {visibleCardsdata.map((card) => (
            <Link to={card.to}>
              <div
                key={CardsData.id}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow-xl h-[372px]"
              >
                <a
                  rel="noopener noreferrer"
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
        </div>
        <button
          onClick={toggleDisplay}
          className="text-white cursor-pointer bg-red-600 hover:bg-black px-5 py-5 rounded-md w-fit mb-6 m-auto"
        >
          {displayAll ? "Show First Blogs" : "Show All Blogs"}
        </button>
      </div>
    </div>
  );
};
export default Blog;
