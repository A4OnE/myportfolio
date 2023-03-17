import React, { useEffect, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb";
import { FaSass, FaReact, FaNpm } from "react-icons/fa";
import img from "../../UI/Resources/Image/kitty.gif";
import Image from "next/image";
import image from "../../UI/Resources/Image/left.png";
import { Slide, Zoom } from "react-awesome-reveal";
import { useRouter } from "next/router";

function WhatIDo() {
  // useEffect(() => {
  //   Aos.init({ once: true, duration: 1200, offset: 120 });
  // }, []);
  const [ID, setID] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { DarkTheme } = router.query;
      setID(DarkTheme);
    }
  }, [router.isReady, router.query]);
  const whatIDo = [
    {
      title: "what I Do",
      description:
        "SOME FRONT-END DESIGNER & DEVELOPER WHO WANTS TO EXPLORE EVERY TECHNICAL THINGS",
      icons: [
        { icon: <AiFillHtml5 />, name: "html5" },
        { icon: <IoLogoCss3 />, name: "css" },
        { icon: <FaSass />, name: "sass" },
        { icon: <SiTailwindcss />, name: "tailwind" },
        { icon: <TbBrandJavascript />, name: "javaScript" },
        { icon: <TbBrandNextjs />, name: "next js" },
        { icon: <FaReact />, name: "react" },
        { icon: <FaNpm />, name: "npmPackage" },
      ],
      points: [
        {
          point:
            " Develop highly interactive Front end / User Interfaces for your web applications & web developments",
        },
        {
          point: "Responsive Web Design maintainence",
        },
        {
          point: "Web Application & Web Design Tools knowledge",
        },
      ],
    },
  ];
  const progress = [
    { name: "html", data: "90" },
    { name: "css", data: "90" },
    { name: "javascript", data: "90" },
    { name: "react js", data: "90" },
    { name: "next js", data: "90" },
    { name: "tailwind", data: "90" },
  ];
  return (
    <div id="skills">
      <div className="text-2xl md:text-4xl  md:w-[66%] flex md:justify-end pt-24 font-bold uppercase">
        what i do
      </div>

      <div className="md:grid  grid-cols-12 md:gap-20 pt-7 md:pb-14">
        <div className="col-span-6 h-fit w-full  md:-mt-16 md:my-0  ">
          <Slide direction="left" triggerOnce cascade damping={1e-1}>
            <Image
              src={image}
              height={100}
              alt={""}
              width={600}
              quality={100}
              className="  md:h-[620px] object-cover w-full "
            />
          </Slide>
        </div>
        <div className="col-span-6 md:flex justify-end ">
          <Slide direction="right" triggerOnce cascade damping={1e-1}>
            <div>
              {whatIDo.map((val, i) => {
                return (
                  <div key={i}>
                    <div className=" mb-6  md:my-6  text-base md:text-[18.5px] w-11/12">
                      {val.description}
                    </div>

                    <div className="flex flex-wrap gap-5">
                      {val.icons.map((vals, i) => {
                        return (
                          <div key={i} className="hover:text-[rgb(255,165,0)]">
                            <div className=" text-4xl md:text-6xl ">
                              {vals.icon}
                            </div>
                            <div className=" text-[11px] md:text-[16px]">
                              {vals.name}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col my-8 gap-5">
                      {val.points.map((value, i) => {
                        return (
                          <div key={i} className="">
                            <div className={` text-[13px] md:text-[17px]  `}>
                              ⚡{value.point}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Slide>
        </div>
      </div>
      <div className="w-[90%] md:w-[95%]  ">
        <div className="text-2xl md:text-4xl font-bold mt-14 md:mt-0  md:mb-5 uppercase">
          my skills
        </div>
        <Zoom direction="top">
          <div className="flex flex-col relative uppercase  gap-3">
            <div className="mt-6  text-lg font-medium">html</div>
            <div className="w-full">
              <div className={`bg-[#bfbfbf] rounded-xl w-[100%] h-[10px]`}>
                <div
                  className={`bg-orange-500 rounded-xl w-[90%] h-[10px] transition-all ease-in-out delay-500 duration-1000`}
                >
                  {" "}
                  <div className="absolute top-14 text-orange-500   -right-10">
                    {" "}
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative uppercase  gap-3">
            <div className="mt-6  text-lg font-medium">css</div>
            <div className="w-full">
              <div className={`bg-[#bfbfbf] rounded-xl w-[100%] h-[10px]`}>
                <div
                  className={`bg-orange-500 rounded-xl w-[80%] h-[10px] transition-all ease-in-out delay-500 duration-1000`}
                >
                  <div className="absolute top-14  text-orange-500  -right-10">
                    {" "}
                    80%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative uppercase  gap-3">
            <div className="mt-6  text-lg font-medium">javascript</div>
            <div className="w-full">
              <div className={`bg-[#bfbfbf] rounded-xl w-[100%] h-[10px]`}>
                <div
                  className={`bg-orange-500 rounded-xl w-[62%] h-[10px] transition-all ease-in-out delay-500 duration-1000`}
                >
                  <div className="absolute top-14  text-orange-500  -right-10">
                    {" "}
                    62%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative uppercase  gap-3">
            <div className="mt-6  text-lg font-medium">react js</div>
            <div className="w-full">
              <div className={`bg-[#bfbfbf] rounded-xl w-[100%] h-[10px]`}>
                <div
                  className={`bg-orange-500 rounded-xl w-[60%] h-[10px] transition-all ease-in-out delay-500 duration-1000`}
                >
                  <div className="absolute top-14  text-orange-500  -right-10">
                    {" "}
                    60%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative uppercase  gap-3">
            <div className="mt-6  text-lg font-medium">next js</div>
            <div className="w-full">
              <div className={`bg-[#bfbfbf] rounded-xl w-[100%] h-[10px]`}>
                <div className={`bg-orange-500 rounded-xl w-[70%] h-[10px]`}>
                  <div className="absolute top-14 text-orange-500   -right-10">
                    {" "}
                    70%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative uppercase  gap-3">
            <div className="mt-6  text-lg font-medium">tailwind css</div>
            <div className="w-full">
              <div className={`bg-[#bfbfbf] rounded-xl w-[100%] h-[10px]`}>
                <div
                  className={`bg-orange-500 rounded-xl w-[100%] h-[10px] transition-all ease-in-out delay-500 duration-1000`}
                >
                  <div className="absolute top-14 text-orange-500   -right-10">
                    {" "}
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default WhatIDo;
