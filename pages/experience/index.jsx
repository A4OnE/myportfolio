import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";
import image1 from "../../UI/Resources/Image/star.gif";
import image from "../../UI/Resources/Image/designs.png";

function Experience({ DarkTheme, id }) {
  const education = [
    {
      from: "2060 B.S",
      to: "2070 B.S",
      university_name: "high school",
      college_name: "apex school",
      degree: "higher education",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, impedit labore nesciunt rerum voluptates doloremque exercitationem architecto odit eos ea, distinctio commodi minima recusandae veniam magnam aperiam iusto cum.`,
    },
    {
      from: "2014 A.D",
      to: "2016 A.D",
      university_name: "Pokhara university",
      college_name: "Tilottama College",
      degree: "science & technology",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, impedit labore nesciunt rerum voluptates doloremque exercitationem architecto odit eos ea, distinctio commodi minima recusandae veniam magnam aperiam iusto cum.`,
    },
    {
      from: "2016 A.D",
      to: "2021 A.D",
      university_name: "Pokhara university",
      college_name: "Nepal college of information technology",
      degree: "software engineering",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, impedit labore nesciunt rerum voluptates doloremque exercitationem architecto odit eos ea, distinctio commodi minima recusandae veniam magnam aperiam iusto cum.`,
    },
  ];
  const experience = [
    {
      from: "2060 B.S",
      to: "2070 B.S",
      university_name: "high school",
      college_name: "apex school",
      degree: "higher education",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, impedit labore nesciunt rerum voluptates doloremque exercitationem architecto odit eos ea, distinctio commodi minima recusandae veniam magnam aperiam iusto cum.`,
    },
    {
      from: "2014 A.D",
      to: "2016 A.D",
      university_name: "Pokhara university",
      college_name: "Tilottama College",
      degree: "science & technology",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, impedit labore nesciunt rerum voluptates doloremque exercitationem architecto odit eos ea, distinctio commodi minima recusandae veniam magnam aperiam iusto cum.`,
    },
    {
      from: "2016 A.D",
      to: "2021 A.D",
      university_name: "Pokhara university",
      college_name: "Nepal college of information technology",
      degree: "software engineering",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum, impedit labore nesciunt rerum voluptates doloremque exercitationem architecto odit eos ea, distinctio commodi minima recusandae veniam magnam aperiam iusto cum.`,
    },
  ];
  return (
    <div className=" pt-24   " id="work">
      <div className="text-4xl font-bold">
        Education & work Experience Career
      </div>
      <div className="grid  grid-cols-12 gap-20 pt-7 pb-14">
        <div className="col-span-6">
          <Fade bottom>
            <div className="border-2 my-10 mb-16 text-2xl px-8 py-2 w-fit mx-auto border-green-500">
              Education
            </div>
          </Fade>
          <Fade left>
            <div className="my-6">
              {education.map((val, i) => {
                return (
                  <div key={i} className="grid grid-cols-12 my-7">
                    <div className=" col-span-5">
                      <div className="flex gap-3 items-end border-b w-[97%] pb-2">
                        <div className="capitalize text-lg font-bold">
                          from <div className="text-base ">{val.from}</div>
                        </div>
                        -
                        <div className="capitalize font-bold">
                          to <div className="text-base ">{val.to}</div>
                        </div>
                      </div>
                      <div className="text-lg mt-5 font-bold uppercase ">
                        {val.degree}
                      </div>
                      <div className="text-xs mt-1 capitalize font-black border-b w-[97%] pb-2 ">
                        {val.college_name}
                      </div>
                      <div className="uppercase mt-2  text-sm font-extrabold">
                        {val.university_name}
                      </div>
                    </div>
                    <div className="col-span-7  flex gap-5 ">
                      <div className="h-full w-[1px] bg-gray-400 "></div>
                      <div className="">{val.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
        <Fade right>
          <div className="col-span-6  h-fit    w-[700px]">
            <Image
              src={image}
              height={100}
              width={600}
              className="h-[500px] w-full"
            />
          </div>
        </Fade>
      </div>

      <div className="grid  grid-cols-12 gap-20 pt-14">
        <Fade left>
          <div className="col-span-6  h-fit    w-[700px]">
            {DarkTheme ? (
              <Image
                src={image1}
                height={100}
                width={600}
                className="h-[500px] w-full"
              />
            ) : (
              <Image
                src={image}
                height={100}
                width={600}
                className="h-[500px] w-full"
              />
            )}
          </div>
        </Fade>
        <div className="col-span-6">
          <Fade top>
            <div className="border-2 text-2xl px-8 py-2 w-fit my-10 mb-16  mx-auto border-green-500">
              Experience
            </div>
          </Fade>
          <Fade right>
            <div className="my-6">
              {education.map((val, i) => {
                return (
                  <div key={i} className="grid grid-cols-12 my-7">
                    <div className="col-span-7  flex gap-5 ">
                      <div className="">{val.description}</div>
                      <div className="h-full w-[1px] bg-gray-400  mr-4"></div>
                    </div>
                    <div className=" col-span-5">
                      <div className="flex gap-3 items-end border-b w-[97%] pb-2">
                        <div className="capitalize text-lg font-bold">
                          from <div className="text-base ">{val.from}</div>
                        </div>
                        -
                        <div className="capitalize font-bold">
                          to <div className="text-base ">{val.to}</div>
                        </div>
                      </div>
                      <div className="text-lg mt-5 font-bold uppercase ">
                        {val.degree}
                      </div>
                      <div className="text-xs mt-1 capitalize font-black border-b w-[97%] pb-2 ">
                        {val.college_name}
                      </div>
                      <div className="uppercase mt-2  text-sm font-extrabold">
                        {val.university_name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Experience;
