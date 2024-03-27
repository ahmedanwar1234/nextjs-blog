import Link from "next/link";

import {RiGithubFill,RiYoutubeLine,RiInstagramLine,RiFacebookLine,RiDribbbleLine,RiBehanceLine,RiPinterestLine, RiGoogleFill, RiLinkedinFill} from 'react-icons/ri'
const Socials = () => {
  return <div className=" flex  items-center gap-x-5 text-lg">
<Link href={'https://linkedin.com/in/ahmed-anwar-04173725b'}  className=" hover:text-accent transition-all duration-300"><RiLinkedinFill size={25}/> </Link>
<Link href={'https://www.instagram.com/ahmed_anwer_a/'} className=" hover:text-accent transition-all duration-300"><RiInstagramLine size={25}/></Link>
<Link href={'https://github.com/ahmedanwar1234'} className=" hover:text-accent transition-all duration-300"><RiGithubFill size={25}/></Link>

  </div>;
};

export default Socials;
