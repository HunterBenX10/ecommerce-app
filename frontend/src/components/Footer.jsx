import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className=" w-full md:w-2/3 text-gray-600">
            Discover timeless style and everyday comfort with our curated
            collection of clothing and accessories. From casual essentials to
            statement pieces, we're here to bring quality, affordability, and
            inspiration to your wardrobe. Shop with confidence knowing we offer
            secure checkout, fast shipping, and hassle-free returns. Stay
            connected with us for the latest trends, exclusive offers, and new
            arrivals designed to fit your lifestyle.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1 (555) 123-4567</li>
            <li>info@foreveryou.com</li>
            <li>123 Main St, Anytown, USA</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          &copy; Copyright 2024@ forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
