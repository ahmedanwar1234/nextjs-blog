//components
import Circles from '/components/Circles'

//icons
import {BsArrowRight}from 'react-icons/bs'

//framer
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { IoMdMailUnread } from "react-icons/io";import Link from 'next/link';
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {









  return <div className=' h-full bg-primary/30 '>
    <div className=' container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      {/*text &form  */}
      <div className=' flex flex-col w-full max-w-[700px]'>
        {/* text */}
        <motion.h2 variants={fadeIn('up',0.2)} initial='hidden' animate='show' exit='hidden' className=' h2 text-center mb-12'> <span className=' text-accentfont-bold'>Contact.</span></motion.h2>
        {/* form */}
        <div className='md:grid md:grid-cols-[repeat(3,1fr)] gap-[32px]  md:gap-10 w-full'>
  <Link className='flex flex-col gap-5 items-center justify-center text-center  hover:bg-blue-300 transition-all  p-4 rounded-md' href="mailto:ahmedanswar123@gmail.com">
    <IoMdMailUnread className='text-4xl mb-2' />
    <h1 className='text-lg font-bold'>Email</h1>
    <h1 className='text-sm'>ahmedanswar123@gmail.com</h1>
  </Link>
  <hr className="md:hidden w-1/2 m-auto opacity-50"/>
  <Link className='flex flex-col gap-5 items-center justify-center text-center  hover:bg-blue-300 transition-all  p-4 rounded-md' href="https://t.me/Ahmed_a129">
    <FaTelegramPlane className='text-4xl mb-2' />
    <h1 className='text-lg font-bold'>Telegram</h1>
    <h1 className='text-sm'>Ahmed_a129</h1>
  </Link>
  <hr className="md:hidden w-1/2 m-auto opacity-50"/>
  <Link className='flex flex-col gap-5 items-center justify-center text-center  hover:bg-blue-300 transition-all  p-4 rounded-md' href="tel:+2001018568892">
    <FaPhoneAlt className='text-4xl mb-2' />
    <h1 className='text-lg font-bold'>Phone</h1>
    <h1 className='text-sm'>+2001018568892</h1>
  </Link>
</div>




        <motion.form variants={fadeIn('up',0.4)} initial='hidden' animate='show' exit='hidden' className=' flex-1 flex flex-col gap-6 w-full mx-auto'>
          {/* group
{/* <div className=' flex gap-x-6 w-full'>
  <input type='text' placeholder='name ' className='input'/>
  <input type='text' placeholder='email ' className=' bg-transparent border border-white/20 px-3 text-white/50 '/>
</div> 
  <input type='text' placeholder='email ' className='input'/>
  <textarea placeholder='message' className='textarea '></textarea>
  <button className=' md:mx-0 mx-auto btn rounded-full border borderwhite/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
    <span className='  group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let-s talk</span>
    <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text[22px]'/>
  </button> */}
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;
