import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";
import image1 from "../../UI/Resources/Image/star.gif";
import image from "../../UI/Resources/Image/designs.png";

function Experience({ DarkTheme, id, interClassName }) {
  const education = [
    {
      from: "2060 B.S",
      to: "2070 B.S",
      university_name: "high school",
      college_name: "apex school",
      degree: "higher education",
      description: `Apex School, located at Tilottama -5, Rupandehi, is a co-educational English medium school established in 2060 BS, (registered with different name in 2045 BS) with a motto of “Learning for Life”. Since its establishment, it has adopted modern and universal techniques to maintain, develop and consolidate holistic development of its students. It has been successful to provide opportunity to its students with essential
life skill opportunities. Besides teaching and learning, Apex School emphasizes on extra curricular activities, learning of moral values and love to humanity for students be able to earn respect and faith in society.`,
    },
    {
      from: "2014 A.D",
      to: "2016 A.D",
      university_name: "Pokhara university",
      college_name: "Tilottama College",
      degree: "science & technology",
      description: `Tilottama Campus was established in  1996 as the first private college in Rupandehi by a team of dedicated, experienced and enterprising academicians to cater for the growing demands of parents and students in the higher education by providing quality education and guaranteeing top class graduates.Similarly, it is also running Bachelor in Business Administration (BBA) programme in affiliation with Pokhara University.`,
    },
    {
      from: "2016 A.D",
      to: "2021 A.D",
      university_name: "Pokhara university",
      college_name: "Nepal college of information technology",
      degree: "software engineering",
      description: `Nepal College of Information  Technology – NCIT, established in 2001, runs Pokhara University-affiliated Bachelor’s and Master’s programs – BE, BBA, BCA, ME, MSc & MCIS. Our  Engineering Degrees are approved by  the Nepal Engineering Council. It has  produced over a thousand engineers  since its establishment.
NCIT, a pioneer private institution  providing engineering education in  Nepal, is renowned for  excellence in  teaching & research, while maintaining  close and mutually beneficial links  with various sectors. The College  provides excellent higher education  opportunities and nurtures individual  talent using an applicable knowledge  base that fully supports ongoing social  changes and economic advances.`,
    },
  ];
  const experience = [
    {
      from: "2021 A.D",
      to: "upto 6-8 Months",
      university_name: "internship",
      college_name: "Internship",
      degree: "laliguras technology",
      description: `Laliguras Technology is a software company that focused on providing quality products and Help you to turn your idea into a business. And More than that, they will give us wings to fly by building an amazing product and customer support.`,
    },
    {
      from: "2021 A.D",
      to: "2022 A.D",
      university_name: "kalikanagar, butwal",
      college_name: "junior front-end developer",
      degree: "Sikka-I",
      description: `The word SIKKA-I is derived from two Nepali words Sikka and sikaai. Here Sikka means money and sikaai means learning. They always wanted to serve people in learning and also with a great earning opportunity. To meet both learning and earning opportunities we came up with this unique and first time in Nepal project i.e. SIKKA-I.
This project is focused on special skill-based non-academic education for free learners. As this project is an online learning and earning platform it will be launched all over Nepal. It will be a great platform for people who seek wonderful opportunities to learn and earn freely and pursue a safe career inside the country. This will generate huge learning and career development opportunities for youths.`,
    },
    {
      from: "2022 A.D",
      to: "present",
      university_name: "milanchowk, butwal",
      college_name: "part-time web developer",
      degree: "hub-it institute",
      description: `HUB IT is recognized as one of Nepal’s best global skill development and IT training centers. The journey of HUB IT started in 2017 with a big dream to bring applied education to the mass population at an affordable cost. The main purpose of HUB IT is to facilitate, with the best IT-related skills.`,
    },
    {
      from: "2022 A.D",
      to: "present",
      university_name: "yogikuti, butwal",
      college_name: "front-end developer",
      degree: "aribt",
      description: `Abhyam Robotics Institution of Business and Technology , ARIBT. An Edu-tech company looking to bring change through Technology. Also they provide best tech support and services to the clients if they need any services. Which is why they provide their students with the opportunity to work on real-world projects and case studies that gives us an edge in market and personal growth.`,
    },
  ];
  return (
    <div className=" pt-24 interClassName" id="work">
      <div className="text-2xl md:text-4xl font-medium">
        Education & Work Experience Career
      </div>
      <div className="md:grid  grid-cols-12  place-items-center gap-10 pt-7 pb-14">
        <div className="col-span-6">
          <Slide direction="bottom" triggerOnce cascade damping={1e-1}>
            <div className="border-2 my-10 mb-16 text-2xl px-8 py-2 w-fit md:mx-auto border-orange-500">
              Education
            </div>
          </Slide>
          <Slide direction="left" triggerOnce cascade damping={1e-1}>
            <div className="my-6">
              {education.map((val, i) => {
                return (
                  <div key={i} className="md:grid  grid-cols-12 my-7">
                    <div className=" col-span-5">
                      <div className="flex gap-3 items-end border-b w-[97%] pb-2">
                        <div className="capitalize text-lg ">
                          from <div className="text-sm ">{val.from}</div>
                        </div>
                        -
                        <div className="capitalize ">
                          to <div className=" text-sm ">{val.to}</div>
                        </div>
                      </div>
                      <div className="md:text-lg mt-5 font-medium uppercase ">
                        {val.degree}
                      </div>
                      <div className="text-xs mt-1 capitalize font-medium border-b w-[97%] pb-2 ">
                        {val.college_name}
                      </div>
                      <div className="uppercase mt-2  text-sm font-semibold ">
                        {val.university_name}
                      </div>
                    </div>
                    <div className="col-span-7  md:flex gap-5 ">
                      <div className="h-full w-[1px] bg-gray-400 "></div>
                      <div className="">
                        <div className="w-full h-[1px] md:hidden bg-gray-200 my-5"></div>

                        <div className=" text-lg">Information: </div>
                        <div className="h-48 scroll overflow-scroll">
                          {val.description}
                        </div>
                        <div className="w-full h-[1px] md:hidden bg-gray-200 my-5"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Slide>
        </div>
        <div className="col-span-6  h-fit   md:w-[700px]">
          <Slide direction="right" triggerOnce cascade damping={1e-1}>
            <Image
              src={image}
              height={100}
              alt={""}
              width={600}
              className="h-[400px] md:h-[500px] w-full object-cover object-center"
            />
          </Slide>
        </div>
      </div>

      <div className="  md:grid  grid-cols-12 place-items-center  gap-20  ">
        <div className="col-span-6  h-fit md:block  hidden   w-[700px]">
          <Slide direction="left" triggerOnce cascade damping={1e-1}>
            <Image
              src={image}
              height={100}
              width={600}
              alt={"loading ..."}
              className="h-[500px] w-full"
            />
          </Slide>
        </div>
        <div className="col-span-6">
          <Slide direction="top" triggerOnce cascade damping={1e-1}>
            <div className="border-2 text-2xl px-8 py-2 w-fit my-10 mb-16  md:mx-auto border-orange-500">
              Experience
            </div>
          </Slide>
          <Slide direction="right" triggerOnce cascade damping={1e-1}>
            <div className="my-6">
              {experience.map((val, i) => {
                return (
                  <div key={i} className="md:grid  grid-cols-12 my-7">
                    <div className=" col-span-5">
                      <div className="flex gap-3 items-end border-b w-[97%] pb-2">
                        <div className="capitalize text-lg ">
                          from <div className="text-sm ">{val.from}</div>
                        </div>
                        -
                        <div className="capitalize ">
                          to <div className=" text-sm ">{val.to}</div>
                        </div>
                      </div>
                      <div className="md:text-lg mt-5 font-medium uppercase ">
                        {val.degree}
                      </div>
                      <div className="text-xs mt-1 capitalize font-medium border-b w-[97%] pb-2 ">
                        {val.college_name}
                      </div>
                      <div className="uppercase mt-2  text-sm font-semibold ">
                        {val.university_name}
                      </div>
                    </div>
                    <div className="col-span-7  md:flex gap-5 ">
                      <div className="h-full w-[1px] bg-gray-400 "></div>
                      <div className="">
                        <div className="w-full h-[1px] md:hidden bg-gray-200 my-5"></div>

                        <div className=" text-lg">Information: </div>
                        <div className="h-48 scroll overflow-scroll">
                          {val.description}
                        </div>
                        <div className="w-full h-[1px] md:hidden bg-gray-200 my-5"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Slide>
        </div>
        <Slide direction="left" triggerOnce cascade damping={1e-1}>
          <div className="col-span-6  h-fit md:hidden block   md:w-[700px]">
            <Image
              src={image}
              height={100}
              width={600}
              alt={"loading ..."}
              className="h-[400px] md:h-[500px] w-full object-cover object-center"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Experience;
