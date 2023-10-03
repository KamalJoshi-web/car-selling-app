import React from "react";
import { FaCar } from "react-icons/fa";

const CarCard = ({ cars }) => {
  return (
    <div className=" w-96 bg-slate-200 p-5 rounded-xl shadow-xl">
      {/* Car Icon */}
      <h2>
        <FaCar size={33} />
      </h2>
      {/* Car Detail */}
      <div className=" flex justify-between items-center my-3">
        <h1 className=" font-medium text-xl tracking-wide ">
          {cars.car} {cars.car_model}
        </h1>
        <h3 className=" text-lg "> {cars.car_model_year} </h3>
      </div>
      {/* Car Avalability */}
      <div>
        {/* Car Color */}
        <div className=" inline-flex gap-5 items-center ">
          <h4 className=" text-lg">Color</h4>
          <div
            className={` w-8 h-8 rounded-lg`}
            style={{ backgroundColor: cars?.car_color }}
          ></div>
        </div>
        {/* Car Price */}
        <div className="flex justify-between items-center my-2 tracking-wider">
          <h2 className=" text-xl"> {cars.price} </h2>
          <button
            type="button"
            className={`focus:outline-none text-white 
             hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ${
               cars.availability ? "bg-purple-700" : "bg-purple-300"
             } `}
          >
            {cars.availability ? "Buy now" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
