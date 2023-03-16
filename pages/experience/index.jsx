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
      <div className="text-2xl md:text-4xl font-bold">
        Education & work Experience Career
      </div>
      <div className="md:grid  grid-cols-12  place-items-center gap-10 pt-7 pb-14">
        <div className="col-span-6">
          <Fade bottom>
            <div className="border-2 my-10 mb-16 text-2xl px-8 py-2 w-fit md:mx-auto border-orange-500">
              Education
            </div>
          </Fade>
          <Fade left>
            <div className="my-6">
              {education.map((val, i) => {
                return (
                  <div key={i} className="md:grid  grid-cols-12 my-7">
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
                      <div className="md:text-lg mt-5 font-bold uppercase ">
                        {val.degree}
                      </div>
                      <div className="text-xs mt-1 capitalize font-black border-b w-[97%] pb-2 ">
                        {val.college_name}
                      </div>
                      <div className="uppercase mt-2  text-sm font-extrabold">
                        {val.university_name}
                      </div>
                    </div>
                    <div className="col-span-7  md:flex gap-5 ">
                      <div className="h-full w-[1px] bg-gray-400 "></div>
                      <div className="">
                        <div className="w-full h-[1px] md:hidden bg-gray-200 my-5"></div>

                        <div className="font-bold text-lg">Information: </div>
                        <div>{val.description}</div>
                        <div className="w-full h-[1px] md:hidden bg-gray-200 my-5"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
        <Fade right>
          <div className="col-span-6  h-fit   md:w-[700px]">
            <Image
              src={image}
              height={100}
              width={600}
              className="h-[400px] md:h-[500px] w-full object-cover object-center"
            />
          </div>
        </Fade>
      </div>

      <div className="  md:grid  grid-cols-12 place-items-center  gap-20  ">
        <Fade left>
          <div className="col-span-6  h-fit md:block  hidden   w-[700px]">
            <Image
              src={image}
              height={100}
              width={600}
              className="h-[500px] w-full"
            />
          </div>
        </Fade>
        <div className="col-span-6">
          <Fade top>
            <div className="border-2 text-2xl px-8 py-2 w-fit my-10 mb-16  md:mx-auto border-orange-500">
              Experience
            </div>
          </Fade>
          <Fade right>
            <div className="my-6">
              {education.map((val, i) => {
                return (
                  <div key={i} className="md:grid  grid-cols-12 my-7">
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
                      <div className="md:text-lg mt-5 font-bold uppercase ">
                        {val.degree}
                      </div>
                      <div className="text-xs mt-1 capitalize font-black border-b w-[97%] pb-2 ">
                        {val.college_name}
                      </div>
                      <div className="uppercase mt-2  text-sm font-extrabold">
                        {val.university_name}
                      </div>
                    </div>
                    <div className="col-span-7  md:flex gap-5 ">
                      <div className="h-full w-[1px] bg-gray-400 "></div>
                      <div className="">
                        <div className="w-full h-[1px] md:hidden bg-gray-200 my-5"></div>

                        <div className="font-bold text-lg">Information: </div>
                        <div>{val.description}</div>
                        <div className="w-full h-[1px] md:hidden bg-gray-200 my-5"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
        <Fade left>
          <div className="col-span-6  h-fit md:hidden block   md:w-[700px]">
            <Image
              src={image}
              height={100}
              width={600}
              className="h-[400px] md:h-[500px] w-full object-cover object-center"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Experience;
