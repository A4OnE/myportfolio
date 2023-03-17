import React, { useState, useEffect } from "react";
import Layout from "../Navigation/Layout/Layout";
import Image from "next/image";
import img from "../../UI/Resources/Image/hiccup.gif";
import hi from "../../UI/Resources/Image/hi.gif";
import SocialMedia from "../../PageComponent/Home/SocialMedia/SocialMedia";
import Experience from "../experience";
import WhatIDo from "../whatIDo";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import TopBar from "../Navigation/TopBar/TopBar";
import Contact from "../contact";
import Project from "../project";
import Footer from "../../HOC/Footer/Footer";
import ScrollIntoView from "react-scroll-into-view";
// import { useRouter } from "next/router";
function Home() {
  // const [slide, setSlide] = useState(false);
  const myIntroduction = [
    {
      description:
        "A passionate Front-End Software Developer  having an experience of building cool Web Sites and Web applications with (React)/(Next) and some other awesome libraries and frameworks.",
      image: img,
    },
  ];
  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setSlide(!slide);
  //   }, 6000);
  //   return () => {
  //     clearTimeout(interval);
  //   };
  // }, []);

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
                    {/* <Slide delay={1e3} cascade damping={1e-1}> */}
                    <div className=" flex gap-2 items-center">
                      <div className="text-[28px] lg:text-5xl typeWriter  font-bold">
                        <Fade triggerOnce delay={1e3} cascade damping={0.1}>
                          {`  Hello,I'm Nischal Karki`}
                        </Fade>
                      </div>
                      <div className=" h-12 md:h-66px">
                        <Fade triggerOnce delay={3.3e3} cascade damping={1e-1}>
                          <div>
                            {" "}
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
                        </Fade>
                      </div>
                    </div>
                    {/* </Slide> */}
                    <Slide delay={3e3} triggerOnce cascade damping={1e-1}>
                      <div className="mt-8 md:text-[32px]   font-medium  md:w-10/12">
                        {val.description}
                      </div>
                    </Slide>
                  </div>
                  <Slide
                    direction="left"
                    triggerOnce
                    delay={3.5e3}
                    cascade
                    damping={1e-1}
                  >
                    <div className="col-span-4 w-[350px]  h-full">
                      <Zoom triggerOnce delay={3.5e3} cascade damping={1e-1}>
                        <Image
                          src={val.image}
                          alt={"loading ..."}
                          height={100}
                          width={600}
                          className="md:h-[350px] w-[full]"
                        />
                      </Zoom>
                    </div>
                  </Slide>
                </div>
              );
            })}
          </div>

          <Slide triggerOnce delay={3.5e3} cascade damping={1e-1}>
            <div className="mt-5">
              <SocialMedia />
            </div>
          </Slide>
          <Slide triggerOnce delay={4e3} cascade damping={1e-1}>
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
          </Slide>
        </div>
        <div>
          <WhatIDo />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>

      <div className="">
        {" "}
        <Footer />{" "}
      </div>
    </Layout>
  );
}

export default Home;
