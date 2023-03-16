import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from "../../UI/Resources/Image/spinskull-unscreen.gif";
import img1 from "../../UI/Resources/Image/star.gif";
import img2 from "../../UI/Resources/Image/football-unscreen.gif";
import img3 from "../../UI/Resources/Image/skulls-unscreen.gif";
import img4 from "../../UI/Resources/Image/kitty.gif";
import img5 from "../../UI/Resources/Image/darkbulb.gif";
import img6 from "../../UI/Resources/Image/collision.gif";
import Link from "next/link";
import { useRouter } from "next/router";
function Project({ value }) {
  const router = useRouter();

  const [ShowImage, setShowImage] = useState(false);
  const [show, setShow] = useState("");

  //   const redirectViewPortfolio = (val) => {
  //     router.push({
  //       pathname: `/viewGallery/${val}`,
  //     });
  //   };
  const Data = [
    {
      image: img,
      category: "web App",
      name: "Sikkai: E-learning platform",
    },

    {
      image: img1,
      category: "websites",
      name: "vip group nepal",
    },
    {
      image: img2,
      category: "website",
      name: "abhiyam robotics and instiute of IT",
    },

    {
      image: img3,
      category: "web app",
      name: "school management system",
    },
    {
      image: img4,
      category: "website",
      name: "E-aribt Blog portal",
    },

    {
      image: img5,
      category: "website",
      name: "Insta k trade",
    },
    {
      image: img6,
      category: "website",
      name: "Hub-it institute",
    },
  ];

  return (
    <div id="projects">
      <div className="text-2xl md:text-4xl  uppercase pt-16 md:pt-24 font-bold">
        my projects
      </div>
      <div className=" px-2  relative z-20 ">
        <div
          className={`
              flex  mx-auto  py-6 pb-10 
            flex-col md:grid md:grid-cols-2   gap-4 lg:grid lg:grid-cols-12 lg:gap-8  m-5`}
        >
          {Data.map((val, ind) => {
            let value = 7;
            // console.log(ind <= 5 ? value * ind : "gif");
            return Data.map((val, i) => {
              // let dats = value * ind + i;
              // console.log(
              //   (i === 7 * ind + 5 && i <= dats) ||
              //     (i === 7 * ind + 6 && i <= dats),
              //   i,
              //   ind,
              //   dats
              // );
              return (
                <div
                  key={i}
                  className={` ${
                    i === value * ind || i === value * ind + 1
                      ? `lg:col-span-6 ${"item" + i}`
                      : i >= value * ind + 2 && i <= value * ind + 4
                      ? `lg:col-span-4 ${"item" + i} `
                      : i === value * ind + 5
                      ? `lg:col-span-8 ${"item" + i} `
                      : i === value * ind + 6
                      ? `lg:col-span-4 ${"item" + i} `
                      : "hidden"
                  }   relative z-50 cursor-pointer  `}
                  //   onClick={() => redirectViewPortfolio(i)}
                >
                  {/* <Link href={{router.push()}}> */}
                  <div className=" relative border-t bg-black shadow-md shadow-[#9d9898] ">
                    <div className=" h-[200px]    hover-4">
                      <Image
                        src={val.image}
                        // placeholder="blur"
                        //   srcSet={`${val.image} 2x, ${val.image} 600vw`}
                        //   blurDataURL={val.image}
                        // priority
                        alt={"loading ..."}
                        height={"100%"}
                        width={"100%"}
                        className="w-full h-[200px]    object-cover object-center "
                      />
                      <div
                        className="
                      //  hover:bg-gradient-to-b picsDelay w-full h-[200px] hover:from-[#69a1ab]
                      //    bg-gradient-to-t from-[#152a2e]
                      //   hover:opacity-70  absolute top-0 flex   justify-ceter items-center z-50 "
                      >
                        <div className="flex  relative  w-11/12 mx-auto     flex-col justify-between items-center">
                          <div
                            className=" text-white  text-center  text-lg sm:text-xl md:text-2xl lg:text-3xl Poppins font-medium capitalize
                         w-full h-[100px]  "
                          >
                            {val.name}
                          </div>
                          <div
                            className=" absolute  top-[80px] text-[white] border border-[#3d3d3d] 
                            text-sm border-opacity-100 w-fit bg-[black] bg-opacity-60 rounded-[2px]
                             px-4 py-2 font-light capitalize
                           "
                          >
                            {val.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              );
            });
          })}
        </div>
        <div className="text-center">
          <button
            className="bg-gray-600 px-6 py-3 capitalize  text-white
              text-lg font-semibold hover:bg-opacity-80 rounded-[4px]
              transition-all ease-in-out duration-300 delay-100"
          >
            view more
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Project;
