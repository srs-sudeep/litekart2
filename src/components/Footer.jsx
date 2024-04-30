import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
  footerSupportLinks2,
} from "../data";

const Footer = () => {
  return (
    <div className="bg-[#49B9C8] text-black">

      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img className="h-12"
            src="./logo_cropped.png"
            alt=""
            style={{ filter: "brightness(0) invert(0)" }}
          />
          <br />
          <p className="text-white">Delivering health and wellness to your doorstep with care and convenience.</p>
          <div className="text-white flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-2 font-semibold">Our Services</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-white hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6 mb-2"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-2 font-semibold">Explore More</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-white hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-2 font-semibold">Support</h1>
          {footerSupportLinks2.map((link,index) => (
            <li key={index}>
              <Link
                className="text-white hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-white text-sm pb-8">
        <span>© 2024 Vaidya. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>

    </div>
  );
};

export default Footer;
