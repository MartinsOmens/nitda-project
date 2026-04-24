import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col justify-around gap-2 sm:gap-0 sm:flex-row bg-black text-white py-5 items-center">
      <div className="flex items-center gap-2 sm:gap-3">
        <Link to={"/"}>
          <img
            src={assets.logo}
            alt="NIHUB logo"
            width={120}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </Link>
        <h1 className="font-semibold text-sm sm:text-lg md:text-2xl truncate">
          NIHUB Events
        </h1>
      </div>

      <p className="text-sm text-white">
        All rights reserved. Copyright @NITDA
      </p>
      <div className="flex gap-2">
        <img
          src={assets.facebook_icon}
          alt="facebook_icon"
          className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={assets.twitter_icon}
          alt="twitter_icon"
          className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
        />
        <img
          src={assets.goggleplus_icon}
          alt="goggleplus_icon"
          className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Footer;
