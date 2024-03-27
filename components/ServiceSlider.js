// icons
import {
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxCrop,
  RxArrowTopRight,
} from "react-icons/rx";

/// import swiper react components
import { Swiper, SwiperSlide, swiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data

const serviceData  = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "As a seasoned full-stack developer with expertise in the MERN stack, I bring a wealth of experience and passion for crafting exceptional web applications. With expertise spanning both front-end and back-end development, I offer comprehensive services to transform your ideas into robust, scalable, and user-friendly solutions."
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Leveraging my proficiency in React.js, I design and develop captivating user interfaces that deliver seamless user experiences across devices."
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "My proficiency in Node.js and Express.js enables me to architect and implement efficient, secure, and scalable server-side solutions, while my expertise in MongoDB ensures optimal data management and performance."
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Whether you require the development of a new web application, the enhancement of an existing system, or assistance with technical challenges, I am committed to delivering results that exceed your expectations."
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "With a focus on clean code, best practices, and continuous improvement, I am well-equipped to tackle complex challenges and adapt to evolving technologies. Partner with me to elevate your web development projects to new heights and achieve your business objectives with confidence."
  },
];

/// import requird modules
import { FreeMode, Pagination } from "swiper";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      // freeMode
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className=" h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} className="">
            <div className="  bg-[rgba(65,47,123,0.12)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all  duration-300">
              {/* icon */}
              <div className=" text-4xl text-accent mb-4 ">
                {item.icon}
              </div>
              {/* title & desc */}
              <div className=" mb-8">
                <div className=" mb-2 text-lg">{item.title}</div>
                <p className=" max-w-[350px]  leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="   text-3xl md:mt-7  ">
                <RxArrowTopRight className=" xl:mx-auot   my-auto w-full group-hover:rotate-45  group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
