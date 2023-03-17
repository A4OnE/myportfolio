import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialMedia from "../../PageComponent/Home/SocialMedia/SocialMedia";
import kitty from "../../UI/Resources/Image/kitty-unscreen.gif";

function Footer() {
  return (
    <div className="bg-[#171C28] text-white  flex flex-col items-center   py-8 px-2 md:px-0">
      <div>
        <Link href={"/"}>
          <div className=" h-10  flex justify-center items-center cursor-pointer mt-12  md:text-xl font-bold  Agustina">
            <div className="">
              😈 🎃 😈 Made by Nischal Karki chhetri 😈 🎃 😈
            </div>
            <div className="h-fit flex   items-center">
              <div>
                {" "}
                <Image
                  src={kitty}
                  // placeholder="blur"
                  //   srcSet={`${val.image} 2x, ${val.image} 600vw`}
                  //   blurDataURL={val.image}
                  // priority
                  alt={"loading ..."}
                  height={"100%"}
                  width={"100%"}
                  className="w-full   h-fit    object-cover object-center "
                />{" "}
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className=" py-4 md:flex justify-between    w-full items-end    ">
        <div className="capitalize font-bold text-sm md:text-base   flex justify-center md:block">
          &copy; {new Date().getFullYear()} Nischal Karki Chhetri. All Rights
          Reserved.{" "}
        </div>
        <div className="pt-7 md:pt-0 flex justify-center md:block  ">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Footer;
