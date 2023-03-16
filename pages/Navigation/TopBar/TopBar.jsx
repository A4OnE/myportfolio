import React, { useState, useEffect } from "react";
import { NavData } from "../Navdata";
import { useRouter } from "next/router";
import LOGO from "../../../UI/Resources/Image/slider.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  MdClose,
  MdDehaze,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { FaCircle } from "react-icons/fa";
// import Collapse from "@kunukn/react-collapse";import React, { useState, useEffect } from "react";
// import Layout from "../Navigation/Layout/Layout";
// import Image from "next/image";
import img from "../../../UI/Resources/Image/hiccup.gif";
import SocialMedia from "../../../PageComponent/Home/SocialMedia/SocialMedia";
import Experience from "../../experience";
import WhatIDo from "../../whatIDo";
import { Fade } from "react-reveal";
// import TopBar from "../Navigation/TopBar/TopBar";
import ScrollTo from "react-scroll-into-view";
function TopBar({ DarkTheme, Theme }) {
  const [imageHeight, setImageHeight] = useState(false);
  const [subNav, showSubNav] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setImageHeight(true);
      } else {
        setImageHeight(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log(router);
  const [ID, setID] = useState("");
  const myIntroduction = [
    {
      title: "Hello, I'm Nischal Karki",
      description:
        "A passionate Front-End Software Developer  having an experience of building Web and Mobile applications with (React)/(Next) and some other cool libraries and frameworks.",
      image: img,
    },
  ];
  return (
    <>
      <div
        className={`${
          DarkTheme ? "text-white bg-[#171C28]" : "text-black bg-[#ECF9FF]"
        } h-20 flex justify-center items-center px-4 transition-all duration-300 delay-100 ease-in-out `}
      >
        <div
          onClick={() => scrollToTop()}
          className={`${
            imageHeight ? "block" : " hidden"
          } fixed bottom-5 right-5 bg-[#464546] shadow-md cursor-pointer shadow-[#8f8f8f] z-[1000] rounded-full text-white`}
        >
          <MdKeyboardArrowUp className="h-11 w-11 p-1" />
        </div>
        <div className="w-full" onClick={() => router.reload()}>
          <Link href={"/"} passHref>
            <div
              className={`flex gap-5 text-2xl mx-36 mt-5 ${
                DarkTheme ? "text-white" : "text-orange-500 "
              } transition-all duration-300 delay-100 ease-in-out`}
            >
              <span> {`<`} </span>
              <div className="Agustina capitalize">nischal karki chhetri</div>
              <span>{`/>`}</span>
            </div>
          </Link>
        </div>

        <div
          className={`hidden lg:flex gap-4 px-5  capitalize text-xl  w-full items-center justify-end`}
        >
          {NavData.map((val, i) => {
            return (
              <Link
                href={val.path}
                className="flex gap-2  items-center"
                key={i}
              >
                <div
                  className={`hover:scale-105 Raleway 
                    cursor-pointer px-4 py-2 ${
                      DarkTheme
                        ? "hover:bg-orange-500 hover:text-white  "
                        : "hover:bg-[#e0e0e0]"
                    } `}
                >
                  <ScrollTo selector={`${val.id}`}>{val.title}</ScrollTo>
                </div>
              </Link>
            );
          })}
          <div
            className={` ${
              DarkTheme ? "bg-orange-500" : "bg-[#e0e0e0]"
            } w-20 px-2 py-1 rounded-3xl`}
            onClick={() => Theme()}
          >
            <div
              className={` flex  ${
                DarkTheme ? "justify-end " : "justify-start "
              } cursor-pointer`}
            >
              {DarkTheme ? (
                <FaCircle className="text-white " />
              ) : (
                <FaCircle className="text-black  " />
              )}
            </div>
          </div>
        </div>
        {/* mobile device */}
        {/* <div className="flex flex-1 h-full items-center absolute right-6 lg:hidden text-black   justify-end">
        <button onClick={() => setShowSidebar(true)}>
          <MdDehaze className="text-mainColor text-4xl " />
        </button>
        <div
          className={`${
            showSidebar
              ? "bg-black fixed z-30 top-0 right-0 bottom-0 left-0"
              : ""
          } bg-opacity-80 `}
        >
          <div
            className={` grid grid-cols-12 fixed  z-10 top-0 bottom-0  left-0 right-0  ${
              showSidebar ? "translate-x-0" : "translate-x-full"
            } transition-all ease-in-out duration-700 delay-300`}
          >
            <div
              className={`   bg-[#ffffff]  col-span-9 fixed right-0 z-50 top-0 bottom-0 h-screen w-80`}
            >
              <div className="text-black md:hidden   flex-1  items-center h-44 w-full ">
                <Image
                  alt={"Loading ..."}
                  src={LOGO}
                  height={100}
                  width={500}
                  className="h-56 w-full "
                  priority
                />
              </div>
              <div
                className={`lg:hidden block gap-4 mt-12  capitalize text-lg font-medium  items-center justify-center`}
              >
                {NavData.map((val, i) => {
                  if (val.subNav) {
                    return (
                      <div
                        className="flex flex-col gap-2   items-start overflow-hidden  "
                        key={i}
                        onClick={() => {
                          showSubNav(!subNav);
                          setID(i);
                        }}
                      >
                        <div
                          className={`hover:scale-105 flex  relative overflow-hidden items-center gap-1
                     duration-700  delay-200 cursor-pointer px-6 my-2 ${
                       val.path === router.pathname
                         ? "bg-mainColor w-full text-white py-3"
                         : " text-mainColor "
                     }`}
                        >
                          <div> {val.title}</div>
                          {subNav && ID === i ? (
                            <div className="text-2xl ">
                              <MdKeyboardArrowDown />
                            </div>
                          ) : (
                            <div className="text-2xl">
                              <MdKeyboardArrowUp />
                            </div>
                          )}
                        </div>
                        <Collapse
                          isOpen={subNav && ID === i}
                          className={
                            "app__collapse app__collapse--gradient " +
                            (subNav && ID === i
                              ? "app__collapse--active absolte w-full  z-[400] UserProfile "
                              : "UserProfile  w-full ")
                          }
                          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                          aria-hidden={subNav && ID === i ? "false" : "true"}
                          elementType="article"
                          render={() => (
                            <React.Fragment>
                              <div
                                className={`  transition-all ease-in-out   duration-300 delay-100 
                    bg-[#f3f1f1]    py-4`}
                              >
                                {val?.subNav.map((items, i) => {
                                  return (
                                    <div key={i}>
                                      <Link href={items.path} passHref>
                                        <div
                                          className={`   cursor-pointer  
                                           tracking-wide 
                                          text-[16.5px] font-sans font-[400] py-4 ${
                                            items.path === router.pathname
                                              ? " text-white bg-mainColor "
                                              : "  text-mainColor   "
                                          } px-2 `}
                                        >
                                          <div className="px-2">
                                            {" "}
                                            {items.titles}
                                          </div>
                                          <div className="border-b border-gray-400 h-1 "></div>
                                        </div>
                                      </Link>
                                    </div>
                                  );
                                })}
                              </div>
                            </React.Fragment>
                          )}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div key={i}>
                        <Link
                          href={val?.path}
                          className="flex gap-2  items-center"
                        >
                          <div
                            className={`hover:scale-105  my-2 px-6 duration-700 delay-200 cursor-pointer py-1 ${
                              val.path === router.pathname
                                ? "bg-mainColor w-full text-white py-3"
                                : " text-mainColor "
                            } `}
                          >
                            {val.title}
                          </div>
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div
            className={`${
              showSidebar
                ? "flex absolute col-span-3 top-3 w-full z-50 left-3"
                : "hidden"
            } ''`}
          >
            <button onClick={() => setShowSidebar(false)}>
              <MdClose className="text-black  text-[50px] p-1 bg-white rounded-full" />
            </button>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}

export default TopBar;
