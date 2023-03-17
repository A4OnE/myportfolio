import React, { useState, useEffect } from "react";
import Layout from "../Navigation/Layout/Layout";
import Image from "next/image";
import img from "../../UI/Resources/Image/hiccup.gif";
import hi from "../../UI/Resources/Image/hi.gif";
import SocialMedia from "../../PageComponent/Home/SocialMedia/SocialMedia";
import Experience from "../experience";
import WhatIDo from "../whatIDo";
import { Fade } from "react-reveal";
import TopBar from "../Navigation/TopBar/TopBar";
import Contact from "../contact";
import Project from "../project";
import Footer from "../../HOC/Footer/Footer";
import ScrollIntoView from "react-scroll-into-view";
// import { useRouter } from "next/router";
function Home() {
  const [ID, setID] = useState("");
  const myIntroduction = [
    {
      title: "Hello, I'm Nischal Karki",
      description:
        "A passionate Front-End Software Developer  having an experience of building cool Web Sites and Web applications with (React)/(Next) and some other awesome libraries and frameworks.",
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
      <div className="px-4 pt-5 pb-5 md:px-14  overflow-hidden   md:pt-14 md:pb-8  h-full">
        <div className=" py-10 md:h-[600px]">
          <div className="md:mt-8">
            {myIntroduction.map((val, i) => {
              return (
                <div key={i} className="md:grid grid-cols-12 ">
                  <div className="  md:mt-14 col-span-8">
                    <Fade bottom>
                      <div className=" flex gap-2 items-center">
                        <div className="text-[28px] md:text-6xl font-bold">
                          {" "}
                          {val.title}
                        </div>
                        <div className=" h-12 md:h-66px">
                          <Image
                            src={hi}
                            // placeholder="blur"
                            //   srcSet={`${val.image} 2x, ${val.image} 600vw`}
                            //   blurDataURL={val.image}
                            // priority
                            alt={"loading ..."}
                            height={"100%"}
                            width={"100%"}
                            className="w-full h-12  md:h-[66px]    object-contain "
                          />
                        </div>
                      </div>
                      <div className="mt-8 md:text-[32px]   font-medium  md:w-10/12">
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
                        className="md:h-[350px] w-full"
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
                <ScrollIntoView selector="#contactMe">
                  <button
                    className="bg-gray-700 px-6 py-3 capitalize
               text-lg font-semibold hover:bg-opacity-80 rounded-[4px]
                transition-all ease-in-out duration-300 delay-100 "
                  >
                    contact me
                  </button>
                </ScrollIntoView>
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

      <div className="">
        <Footer />
      </div>
    </Layout>
  );
}

export default Home;
