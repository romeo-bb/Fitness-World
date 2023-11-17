import React, { useEffect } from "react";
import NavContact from "../components/NavContact";
import img1 from "../image/sh1.png";
import img2 from "../image/iso prtein powder.jpg";
import img3 from "../image/straps pull.jpg";
import img4 from "../image/travel p.jpg";
import img5 from "../image/yeoreo women.jpg";
import img6 from "../image/workout shorts.jpg";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ProductsItems = [
    {
      ProductName: "Shaker",
      Price: "$15.86",
      src: img1,
      to: "/blog/volume",
    },
    {
      ProductName: "Iso prtein powder",
      Price: "$44.55",
      src: img2,
      to: "/blog/volume",
    },
    {
      ProductName: "Straps pull",
      Price: "$19.30",
      src: img3,
      to: "/blog/volume",
    },
    {
      ProductName: "Travel prtein powder",
      Price: "$6.33",
      src: img4,
      to: "/blog/volume",
    },
    {
      ProductName: "Yeoreo women",
      Price: "$18.95",
      src: img5,
      to: "/blog/volume",
    },
    {
      ProductName: "Workout shorts",
      Price: "$18.00",
      src: img6,
      to: "/blog/volume",
    },
  ];

  return (
    <div className="h-auto w-full flex justify-center mb-10">
      <NavContact />
      <div className="container min-w-[370px] h-auto md:px-2 xsm:px-1 flex flex-col mt-28">
        <div className="w-full mb-10">
          <h1 className="h11 flex justify-center">Our Products</h1>
        </div>
        <div className="w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-1 gap-y-6 place-items-center">
          {ProductsItems.map((items, index) => (
            <div
              key={index}
              class="h-[400px] bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl w-[320px] justify-between shadow-lg"
            >
              <div className="h-[75%] bg-white rounded-xl w-full flex justify-center">
                <div className="h-full w-full">
                  <img
                    src={items.src}
                    alt=""
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex flex-row justify-between">
                  <div class="flex flex-col">
                    <span class="text-xl font-bold">{items.ProductName}</span>
                  </div>
                  <span class="font-bold  text-red-600">{items.Price}</span>
                </div>
                <a href="https://twitter.com/mandalosy">
                  <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md w-full">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
