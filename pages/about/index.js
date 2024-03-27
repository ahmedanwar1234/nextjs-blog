import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
//  data


const aboutData = [

{
    title: "skills",
    info: [
      {
        title: "Frontend Developer ",
        
        icons:[

        ],
      },
      {
        title: "Backend Developer",
        
      },
      {
        title: "full Stack Develpoer",
        
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Frontend Develper - React with tawilwind css and Next ",
        stage: "some features like twilio and firebase and nextAuth and clerk and hygraph ....  ",
      },
      {
        title: "backend Developer - expressjs and knowlege nestjs",
        stage: "",
      },
      {
        title: "Full Stack Developer - MERN Stack",
        stage: "",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - self learning",
      
      },
      {
        title: "Computer Science Diploma - benha university",
        stage: "2025",
      },

    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { useState } from "react";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//couters

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className=" h-full  py-32 text-center xl:text-left ">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="  hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="  container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/*  TEXT */}
        <div className=" ml-10 flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 z-50"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="z-50 max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
           r 10 years ago, I began freelancing as a developer. Since then, I have
            done remte work for agencies, counsulted for startups, and
            collaboreted on digital products for business and consumer use
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className=" flex flex-1 xl:gap-6">
              {/* experience */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={10} />
                </div>
                <div className=" text-[1rem] font-semibold uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                {/* projects */}
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={10} />
                </div>
                <div className=" text-[1rem] font-semibold uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finsished project
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* info */}
        {/* this div contain the div skills   and the div details the skills*/}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* tha data skills awards experience credintals */}
          <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index == itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          {/* details data dtails skills and awards ..  */}
          <div className="  py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  className=" flex-1 flex flex-col xl:items-start items-center  max-w-max gap-y-2  text-white/60"
                  key={itemIndex}
                >
                  {/* title */}
                  <div className="flex gap-2 font-light mb-2 md:mb-0">
                    <div className="hidden md:flex ">{"=>"}</div>
                    {item.title}
                  </div>

                  <div className=" ">{item.stage}</div>
                  <div className=" flex gap-4">
                    {/* icos */}
                  
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
