import React, { useState, useEffect } from "react";
import { NavData } from "../../../HOC/AdditionalInformation/Navdata";
import { useRouter } from "next/router";
// import LOGO from "../../../UI/Resources/Image/slider.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  MdClose,
  MdDehaze,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { GiStripedSun } from "react-icons/gi";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
// import Collapse from "@kunukn/react-collapse";import React, { useState, useEffect } from "react";
// import Layout from "../Navigation/Layout/Layout";
// import Image from "next/image";
import img from "../../../UI/Resources/Image/hiccup.gif";
import SocialMedia from "../../../PageComponent/Home/SocialMedia/SocialMedia";
import Experience from "../../experience";
import WhatIDo from "../../whatIDo";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
// import TopBar from "../Navigation/TopBar/TopBar";
import ScrollTo from "react-scroll-into-view";
import { Inter, Raleway, Fasthand } from "next/font/google";
import { Agustina } from "next/font/google";
const inter = Fasthand({ subsets: ["latin"], weight: ["400"], preload: true });
const inters = Raleway({ subsets: ["latin"], weight: ["400"], preload: true });

import Head from "next/head";
function TopBar({ DarkTheme, Theme, Reloads, setShow, show }) {
  const [imageHeight, setImageHeight] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(false);
  const [shows, setShows] = useState("");
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setImageHeight(true);
        // setShows(true);
      } else {
        setImageHeight(false);
        //   setShows(false);
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
  // const myIntroduction = [
  //   {
  //     title: "Hello, I'm Nischal Karki",
  //     description:
  //       "A passionate Front-End Software Developer  having an experience of building Web and Mobile applications with (React)/(Next) and some other cool libraries and frameworks.",
  //     image: img,
  //   },
  // ];
  useEffect(() => {
    if (showSidebar === true) {
      let interval = setTimeout(() => {
        setShowCancelButton(true);
      }, 1000);
      return () => {
        clearTimeout(interval);
      };
    }
  }, [showSidebar]);
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);
    return scrollDirection;
  }
  const scrollDirection = useScrollDirection();

  // useEffect(() => {
  //   if (showSidebar === true) {
  //     let cancelSlowlyAppear = setTimeout(() => {
  //       setShowCancelButton(true);
  //     }, 6000);
  //     return () => clearTimeout(cancelSlowlyAppear);
  //   }
  // }, [showSidebar]);

  return (
    <>
      <div
        className={`sticky ${
          scrollDirection === "down" ? "-top-24 " : "top-0 "
        }  transition-all duration-500 z-[1500] `}
      >
        {/* <div
          className={`${
            imageHeight ? "flex items-center justify-center" : " hidden "
          } fixed top-0  w-full  transition-all duration-300 delay-100 ease-in-out
            shadow-md cursor-pointer  z-[1200]  py-3 
            ${
              DarkTheme ? "text-white bg-[#171C28]" : "text-black bg-[#ECF9FF] "
            }
            `}
        > */}
        <div
          className={`${
            DarkTheme ? "text-white bg-[#171C28]" : "text-black bg-[#ECF9FF]"
          } font-Raleway  h-20 flex justify-center items-center px-4 transition-all duration-300 delay-100 ease-in-out `}
        >
          <div
            onClick={() => scrollToTop()}
            className={`${
              imageHeight ? "block" : " hidden "
            } fixed bottom-20 right-5
             bg-[#464546] shadow-md cursor-pointer shadow-[#8f8f8f] z-[1200] rounded-full text-white`}
          >
            <MdKeyboardArrowUp className="h-11 w-11 p-1" />
          </div>
          <Zoom triggerOnce duration={1000}>
            <div className="w-full" onClick={() => Reloads()}>
              <Link href={"/"} passHref>
                <div
                  className={`flex md:gap-5 text-lg md:text-2xl   justify-start md:mx-36 mt-5 ${
                    DarkTheme ? "text-white" : "text-[hsl(313,61%,55%)] "
                  } transition-all duration-300 delay-100 ease-in-out`}
                >
                  <span> {`<`} </span>
                  <div
                    className={`
                ${inter.className} 
               
                capitalize`}
                  >
                    {`nischal karki chhetri`}{" "}
                  </div>
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
                    <ScrollTo selector={`${val.id}`}>
                      {" "}
                      <div
                        className={`hover:scale-105 ${inter.className} ${
                          val.path === router.asPath ||
                          val.path === router.query
                            ? "bg-[gray] bg-opacity-40 text-white  "
                            : ""
                        }
                    cursor-pointer  px-4 py-2 text-2xl ${
                      DarkTheme
                        ? "hover:bg-[white]  hover:text-[#171C28] hover:bg-opacity-40 "
                        : "hover:bg-[gray] hover:text-white hover:bg-opacity-40"
                    } `}
                      >
                        {val.title}
                      </div>
                    </ScrollTo>
                  </Link>
                );
              })}
              <div
                // className={` ${
                //   DarkTheme ? "bg-text-[hsl(313,61%,55%)] " : "bg-[#e0e0e0]"
                // } w-20 px-2 py-1 rounded-3xl`}
                onClick={() => Theme()}
              >
                <div
                  className={` flex  ${
                    DarkTheme ? "justify-end " : "justify-start "
                  } cursor-pointer `}
                >
                  {DarkTheme ? (
                    <BsFillMoonStarsFill className="text-white  text-5xl " />
                  ) : (
                    <GiStripedSun className=" text-[hsl(313,61%,55%)]  text-5xl " />
                  )}
                </div>
              </div>
            </div>
          </Zoom>
          {/* mobile device */}
          <div className="flex flex-1 h-full items-center absolute right-6 lg:hidden text-[#111827]   justify-end">
            <button onClick={() => setShowSidebar(true)}>
              <MdDehaze
                className={` ${
                  DarkTheme ? "text-white" : "text-black"
                }  text-4xl `}
              />
            </button>
            <div
              className={`${
                showSidebar
                  ? "bg-black fixed z-30 top-0 right-0 bottom-0 left-0"
                  : ""
              }    bg-opacity-80 `}
            >
              <div
                className={` grid grid-cols-12 fixed  z-10 top-0 bottom-0  left-0 right-0  ${
                  showSidebar
                    ? "translate-x-0 transition-all ease-in-out duration-700 delay-300"
                    : "translate-x-full transition-all ease-in-out duration-200 delay-100"
                } `}
              >
                <div
                  className={`    ${
                    DarkTheme
                      ? "bg-[#111827] text-white"
                      : "bg-white text-black"
                  } w-80 col-span-9 fixed right-0 z-50 top-0 bottom-0 h-screen `}
                >
                  <div className="w-full ">
                    <div
                      className={`flex  gap-1 text-lg md:text-2xl justify-start mx-6  md:justify-start  mt-5 
                    ${DarkTheme ? "text-white" : "text-[hsl(313,61%,55%)] "}
                     transition-all duration-300 delay-100 ease-in-out`}
                    >
                      <span> {`<`} </span>
                      <div className={` ${inter.className} capitalize`}>
                        nischal karki chhetri
                      </div>
                      <span>{`/>`}</span>
                    </div>
                  </div>
                  <div
                    className={`lg:hidden block gap-4 ${inter.className} mt-5 w-full  capitalize text-lg font-medium  items-center justify-center`}
                  >
                    {NavData.map((val, i) => {
                      return (
                        <div key={i} className="w-full  ">
                          <Link href={val?.path}>
                            <ScrollTo selector={`${val.id}`}>
                              {" "}
                              <div
                                className={` 
                              ${
                                val.path === router.asPath
                                  ? "bg-[gray] bg-opacity-40 text-white "
                                  : ""
                              }
                              my-2 px-6 mx-auto  duration-300 delay-100 cursor-pointer py-4 text-2xl  border-b hover:text-white hover:bg-[#d6d6d6] w-[98%] `}
                                onClick={() => setShowSidebar(false)}
                              >
                                {val.title}
                              </div>
                            </ScrollTo>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className={` ${
                      !DarkTheme ? "mx-5" : ""
                    }  px-6 mx-auto duration-300 delay-100  cursor-pointer py-4 text-2xl   hover:text-white hover:bg-[#d6d6d6] w-[98%]  `}
                    onClick={() => {
                      Theme(), setShowSidebar(false);
                    }}
                  >
                    <div
                      className={` flex  ${
                        DarkTheme ? "justify-start " : "justify-start "
                      } cursor-pointer  `}
                    >
                      {DarkTheme ? (
                        <BsFillMoonStarsFill className="text-  text-5xl " />
                      ) : (
                        <GiStripedSun className="text-[hsl(313,61%,55%)] text-5xl  " />
                      )}
                    </div>
                  </div>
                  <div className="border-b"></div>
                </div>
              </div>
              {showCancelButton && (
                <div
                  className={`${
                    showSidebar
                      ? "flex absolute col-span-3 top-3 w-full z-50 left-2"
                      : "hidden"
                  } ''`}
                >
                  <button
                    onClick={() => {
                      setShowSidebar(false), setShowCancelButton(false);
                    }}
                  >
                    <MdClose className="text-black  text-[35px] p-1 bg-white rounded-full" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
