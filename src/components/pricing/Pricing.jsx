import React from "react";
import RedTitle from "../../image/title-bg.svg";
import PricingBox from "./PricingBox";
import Img1 from "../../image/Food-bg.png";
import Img2 from "../../image/Girl-bg.png";
import Img3 from "../../image/Man-bg.png";
import PriceModal from "../PriceModal";
import { useState } from "react";

const Pricing = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <div className="h-auto w-full flex justify-center py-10">
      <div className="container h-auto md:px-2 xsm:px-1 min-w-[355px] flex flex-col">
        <div className="flex flex-col text-center relative items-center">
          <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-6">
            PRICING CHART
          </p>
          <img
            src={RedTitle}
            alt="text_bg"
            className="w-[16rem] absolute -top-[9px]"
          />

          <h2 className="text-[3.4rem] font-bold mb-4">
            Exclusive Pricing Plan
          </h2>
        </div>
        <div className="flex lg:flex-row xsm:flex-col gap-10 mt-10 relative z-[2] w-full items-center">
          <PricingBox
            img={Img1}
            price="75"
            month="p/m"
            level="Basic"
            feature1="3 diets"
            feature2="One training program"
            feature3="Duration: one month"
            feature4="Weekly Adjustment"
            setopen={setOpenModal}
            setPrice={setSelectedPrice}
            setLevel={setSelectedLevel}
          />
          <PricingBox
            img={Img2}
            price="100"
            month="p/m"
            level="Accompaniment"
            feature1="6 lunch systems"
            feature2="One training program"
            feature3="Weekly adjustment"
            feature4="Duration: one month"
            setopen={setOpenModal}
            setPrice={setSelectedPrice}
            setLevel={setSelectedLevel}
          />
          <PricingBox
            img={Img3}
            price="250"
            month="p/3m"
            level="Change your body"
            feature1="18 diet (6 per month)"
            feature2="2 training programs"
            feature3="Weekly adjustment"
            feature4="Duration: 3 months"
            setopen={setOpenModal}
            setPrice={setSelectedPrice}
            setLevel={setSelectedLevel}
          />
        </div>
        <PriceModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          selectedPrice={selectedPrice}
          selectedLevel={selectedLevel}
        />
      </div>
    </div>
  );
};

export default Pricing;
