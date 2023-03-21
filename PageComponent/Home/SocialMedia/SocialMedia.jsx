import React from "react";

import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
function SocialMedia() {
  return (
    <div className=" flex  gap-4  ">
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        <Link href={"https://www.facebook.com/Ninztex37"}>
          {" "}
          <FaFacebook
            style={{ color: "#0000ff" }}
            size={40}
            round
            className="  bg-white  rounded-full hover:scale-110 transition-all ease-in-out duration-300 hover:opacity-80   w-8 h-8"
          />
        </Link>
      </div>
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        <Link href={"https://web.whatsapp.com/"}>
          <FaWhatsapp
            size={40}
            round
            style={{ color: "hsl(142,100%,50%)" }}
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
          />
        </Link>
      </div>{" "}
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        {" "}
        <Link href={"https://www.facebook.com/Ninztex37"}>
          <FaTwitter
            size={40}
            round
            style={{ color: "hsl(187,93%,63%)" }}
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
          />
        </Link>
      </div>{" "}
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        {" "}
        <Link href={"https://www.instagram.com/nischalkc10/"}>
          <FaInstagram
            size={40}
            round
            style={{ color: "hsl(15,100%,50%)" }}
            className="hover:scale-110   transition-all  ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
          />
        </Link>
      </div>
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        {" "}
        <Link href={"https://github.com/A4OnE"}>
          <FaGithub
            size={40}
            round
            className="   hover:scale-110 transition-all ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
          />
        </Link>
      </div>
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        {" "}
        <Link href={"https://www.facebook.com/Ninztex37"}>
          <FaLinkedin
            size={40}
            style={{ color: "#0177B5" }}
            round
            className=" bg-white  hover:scale-110 transition-all ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
          />
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
