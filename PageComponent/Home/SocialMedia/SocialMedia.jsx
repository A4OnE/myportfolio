import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import Link from "next/link";
import { FaGit, FaGithub, FaInstagram } from "react-icons/fa";
function SocialMedia() {
  return (
    <div className=" flex  gap-4  ">
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        <Link href={"https://www.facebook.com/Ninztex37"}>
          {" "}
          <FacebookIcon
            size={40}
            round
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
          />
        </Link>
      </div>
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        <Link href={"https://web.whatsapp.com/"}>
          <WhatsappIcon
            size={40}
            round
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
          />
        </Link>
      </div>{" "}
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        {" "}
        <Link href={"https://www.facebook.com/Ninztex37"}>
          <TwitterIcon
            size={40}
            round
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
            className="hover:scale-110  transition-all ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
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
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
          />
        </Link>
      </div>
      <div
        className={`  hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
      >
        {" "}
        <Link href={"https://www.facebook.com/Ninztex37"}>
          <LinkedinIcon
            size={40}
            round
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:opacity-80  rounded w-8 h-8"
          />
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
