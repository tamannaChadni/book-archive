import React from "react";
import cover from "../../assets/cover.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container hero mx-auto bg-base-200 rounded-lg gap-5">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
        <img src={cover} className="max-w-sm rounded-lg shadow-2xl h-96 " />
        <div>
          <h1 className="text-5xl font-bold">
            {" "}
            There is nothing better <br /> than to read
          </h1>
          <Link to="/listed-book">
          <button className="btn bg-lime-500 mt-4 text-white">
            View The List
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
