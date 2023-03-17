import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import SocialMedia from "../../PageComponent/Home/SocialMedia/SocialMedia";
import kitty from "../../UI/Resources/Image/kitty-unscreen.gif";
function Footer() {
  return (
    <div className="  flex flex-col items-center Raleway  py-8 px-2 md:px-0">
      <div>
        <Link href={"/"}>
          <div
            className=" h-10   flex justify-center items-center cursor-pointer mt-12
         text-xs   md:text-xl font-bold  Agustina"
          >
            <div className=" flex gap-2 md:gap-4   ">
              <Fade delay={0e3} cascade damping={0.1}>
                {" "}
                <div className=" hidden md:block">😈 🎃 😈</div>
                {/* <div className=" block md:hidden">😈</div> */}
              </Fade>
              <div className="text-xs md:text-2xl">
                <Fade delay={1e3} cascade damping={0.1}>
                  Made by Nischal Karki chhetri
                </Fade>
              </div>
              <Fade delay={4e3} cascade damping={0.1}>
                {" "}
                <div className=" hidden md:block">😈 🎃 😈</div>
                {/* <div className=" block md:hidden">😈</div> */}
              </Fade>
            </div>
            <div className="w-64 h-64 bg-red-800">
              <Fade delay={5e3} cascade damping={0.1}>
                <div className="w-64 h-64  flex  items-center">
                  <Image
                    src={kitty}
                    alt={"loading ..."}
                    height={100}
                    width={300}
                    className="w-64   h-64     "
                  />
                </div>
              </Fade>
            </div>
          </div>
        </Link>
      </div>

      <div className=" py-4 md:flex justify-between    w-full items-end    ">
        <div className="capitalize font-bold text-sm md:text-base   md:flex justify-center ">
          &copy; {new Date().getFullYear()} Nischal Karki Chhetri. All Rights
          Reserved.{" "}
        </div>
        <div className="pt-7 md:pt-0 md:flex justify-center   ">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Footer;
