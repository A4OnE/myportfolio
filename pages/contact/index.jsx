import React, { useEffect, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb";
import { FaSass, FaReact, FaNpm } from "react-icons/fa";
import img from "../../UI/Resources/Image/kitty.gif";
import Image from "next/image";
import image from "../../UI/Resources/Image/BgRemovedContact.gif";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import { useRouter } from "next/router";
function Contact() {
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
      description:
        "I am now available on almost every social media. You can message me, I will reply within a day. I can help you with React, Next and Opensource Development.",

      points: [
        {
          point:
            " Develop highly interactive Front end / User Interfaces for your web applications & web developments",
        },
        {
          point: "Web Application & Web Design Tools knowledge",
        },
      ],
    },
  ];
  const progress = [
    { name: "html", data: "90 %" },
    { name: "css", data: "70 %" },
    { name: "javascript", data: "60 %" },
    { name: "react js", data: "70 %" },
    { name: "next js", data: "80 %" },
    { name: "tailwind", data: "100 %" },
  ];
  return (
    <div id="contactMe">
      <div className="text-4xl  w-[63%] flex justify-end pt-32 font-bold uppercase">
        contact me
      </div>
      <div className="grid  grid-cols-12 gap-20 pt-7 ">
        <div
          className="col-span-6  h-96 overflow-hidden w-full "
          // data-aos="fade-up-right"
        >
          <Fade left>
            <Image
              src={image}
              height={100}
              width={600}
              quality={100}
              className="h-[fit] -mt-[4.5rem]  w-full"
            />
          </Fade>
        </div>
        <Fade right>
          <div className="col-span-6 flex justify-end ">
            {whatIDo.map((val, i) => {
              return (
                <div key={i}>
                  <div className="my-5  uppercase text-[18.5px] w-11/12">
                    {val.description}
                  </div>

                  <div className="flex flex-col my-8 gap-5">
                    {val.points.map((value, i) => {
                      return (
                        <div key={i} className="">
                          <div
                            className={`text-[17px] 
                           `}
                          >
                            {/* text-[#7e7e7e] */}⚡{value.point}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>{" "}
      <Fade zoom>
        <div className="grid  grid-cols-12 gap-20 pb-14 ">
          <div className="col-span-6  flex flex-col justify-center">
            <div className=" my-5 text-center ">
              <div className="text-3xl  font-bold font-serif  uppercase ">
                address
              </div>
              <div className="text-lg capitalize font- my-2">
                tilottama-2, yogikuti, butwal, nepal
              </div>
            </div>
            <div className="text-center ">
              <div className=" text-3xl font-serif font-bold uppercase">
                phone
              </div>
              <div className="text-lg capitalize font- my-2">
                {" "}
                +977-9817554983, 9803759335
              </div>
            </div>
          </div>
          <div className="col-span-6  h-96 overflow-hidden w-full ">
            <Fade left>
              <Image
                src={image}
                height={100}
                width={600}
                quality={100}
                className="h-[fit] -mt-[30rem]  w-full"
              />
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Contact;
