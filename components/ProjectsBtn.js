import Image from "next/image";
import Link from "next/link";
import {HiArrowRight}from 'react-icons/hi2'
const ProjectsBtn = () => {

  return <div className=" mx-auto xl:mx-0 group">
<Link href={'/work'} className="relative  flex w-[185px] h-[185px] justify-center items-center bg-center bg-circleStar bg-cover overflow-hidden  bg-no-repeat group" >
<Image src={'/rounded-text.png'} width={141} height={148} className=" animate-spin-slow  max-w-[141px] max-h-[148]  " alt="image fuck"/>
<HiArrowRight className=" absolute text-4xl group-hover:translate-x-2 transition-all anim duration-300"/>

</Link>

  </div>;
};

export default ProjectsBtn;
