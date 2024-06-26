import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

//framer
import {motion}from 'framer-motion'

//variants
import {fadeIn}from '../variants.js'
const Home = () => {
  return <div className=" bg-primary/60 h-full">
    {/* {text} */}

    <div className=" max-md:mt-20 w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 "><div className="  text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
      
      <motion.h1  initial='hidden' animate='show' exit='hidden' variants={fadeIn('down',0.4)} className="h1">Full Stack Developer  <br/>  <span className=" text-accent">Mern Stack</span></motion.h1>
      <motion.p  initial='hidden' animate='show' exit='hidden' variants={fadeIn('down',0.4)} className=" max-w-sm  xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
      I am a full-stack developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I have a strong passion for building dynamic and user-friendly web applications. With expertise in front-end and back-end technologies From designing responsive interfaces to optimizing database performance Lets work together to create impactful web experiences.
</motion.p>
      <div className=" relative flex justify-center xl:hidden ">
        <ProjectsBtn></ProjectsBtn>
      </div>
<motion.div initial='hidden' animate='show' exit='hidden' variants={fadeIn('down',0.4)} className=" hidden xl:flex" ><ProjectsBtn/></motion.div>
      </div>
    
      </div>

    {/* {image} */}
    <div className=" w-[1200px]  h-full absolute right-0 bottom-0">

<div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
<div>  <ParticlesContainer/></div>
<motion.div 
 initial='hidden' animate='show' exit='hidden' variants={fadeIn('up',0.5)} transition={{duration:1,ease:'easeInOut'}}
className=" w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"><Avatar/></motion.div>


    </div>
    </div>;
};

export default Home;
