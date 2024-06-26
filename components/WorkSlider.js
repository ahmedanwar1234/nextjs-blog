// data
import Link from 'next/link'
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/organic.png',
          href:"https://organic2-eight.vercel.app/"
        },
        {
          title: 'title',
          path: '/travel.png',
          href:"https://travel-sage-seven.vercel.app/"
        },
        {
          title: 'title',
          path: '/airbnb.png',
          href:"https://github.com/ahmedanwar1234/arbinb"
        },
        {
          title: 'title',
          path: '/ecommerce.png',
          href:"https://ecommerce-shop-starter-seven.vercel.app/"
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/blog.png',
          href:"https://github.com/ahmedanwar1234/front-end-blog-app"
        },
      
      ],
    },
  ],
};

// icons
import {BsArrowRight }from 'react-icons/bs'

/// import swiper react components
import { Swiper, SwiperSlide, swiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

/// import requird modules
import {  Pagination } from "swiper";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
//next image
import Image from 'next/image';
const WorkSlider = () => {
  return (
    <Swiper
  
spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[ Pagination]}
      className=" h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="">
         <div className=' grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          {slide.images.map((image,index)=>{
            return <Link href={`${image.href}`} className=' relative rounded-lg overflow-hidden flex items-center justify-center group ' key={index}>
              <div className=' flex items-center justify-center relative overflow-hidden group'>
       {/* image */}
<Image src={image.path} width={500} height={300} alt=''/>              

{/* overlay gradent */}
<div className=' absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 '></div>

{/* title */}
<div className=' absolute bottom-0 translate-y-full  group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration300'>
  <div className=' flex items-center gap-x-2  text-[13px] tracking-[0.2em]'>
    {/* title part 1 */}
    <div className=' delay-100'>LIV</div>
    {/* title part 2 */}
    <div className=' translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 '>PROJECT</div>
    {/*icon*/}
    <div className=' text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'><BsArrowRight/></div>
  </div>
</div>
            </div>
            </Link>
          })}
         </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
