import React, { useState, useEffect } from "react";
import Layout from "../Navigation/Layout/Layout";
import Image from "next/image";
import img from "../../UI/Resources/Image/hiccup.gif";
import SocialMedia from "../../PageComponent/Home/SocialMedia/SocialMedia";
import Experience from "../experience";
import WhatIDo from "../whatIDo";
import { Fade } from "react-reveal";
import TopBar from "../Navigation/TopBar/TopBar";
import Contact from "../contact";
import Project from "../project";
// import { useRouter } from "next/router";
function Home() {
  const [ID, setID] = useState("");
  const myIntroduction = [
    {
      title: "Hello, I'm Nischal Karki",
      description:
        "A passionate Front-End Software Developer  having an experience of building Web and Mobile applications with (React)/(Next) and some other cool libraries and frameworks.",
      image: img,
    },
  ];
  //   const router = useRouter();
  //   useEffect(() => {
  //     if (router.isReady) {
  //       const { DarkTheme } = router.query;
  //       setID(DarkTheme);
  //     }
  //   }, [router.isReady, router.query]);

  return (
    <Layout>
      <div
      //   className={`${ID ? "text-white bg-black" : "text-black bg-white"}`}
      >
        <div className="p-14 ">
          <div className=" py-10 h-[600px]">
            <div>
              {myIntroduction.map((val, i) => {
                return (
                  <div key={i} className="grid grid-cols-12 ">
                    <div className="  mt-14 col-span-8">
                      <Fade bottom>
                        <div className="text-6xl font-bold">{val.title}</div>
                        <div className="mt-8 text-[32px]   font-medium  w-10/12">
                          {val.description}
                        </div>
                      </Fade>
                    </div>
                    <Fade left>
                      <div className="col-span-4  h-full">
                        <Image
                          src={val.image}
                          height={100}
                          width={600}
                          className="h-[350px] w-full"
                        />
                      </div>
                    </Fade>
                  </div>
                );
              })}
            </div>

            <Fade left>
              <div className="mt-5">
                <SocialMedia />
              </div>
            </Fade>
            <Fade duration={2000} left>
              <div className="flex gap-8 mt-8 text-white   ">
                <div>
                  {" "}
                  <button
                    className="bg-gray-700 px-6 py-3 capitalize
               text-lg font-semibold hover:bg-opacity-80 rounded-[4px]
                transition-all ease-in-out duration-300 delay-100 "
                  >
                    contact me
                  </button>
                </div>
                <div>
                  {" "}
                  <button
                    className="bg-gray-700 px-6 py-3 capitalize 
              text-lg font-semibold hover:bg-opacity-80 rounded-[4px]
              transition-all ease-in-out duration-300 delay-100"
                  >
                    visit my profile
                  </button>
                </div>
              </div>
            </Fade>
          </div>
          <div>
            <WhatIDo />
            <Experience />
            <Project />
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
