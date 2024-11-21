/* eslint-disable */
//@ts-nocheck
'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ForwardIcon from "../Components/Icons/ForwardIcon";
import Logo from "../Components/Icons/Logo";
import TIcon from "../Components/Icons/TIcon";
import Method from "@/Components/Method";
import Imagine from "@/Components/Imagine";
import Services from "@/Components/Services";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let scrollTimer = 0;

    function updateScrollbar() {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const scrollbarHeight = (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight;
      const scrollTop = scrollPercentage * (window.innerHeight - scrollbarHeight);

      document.body.style.setProperty('--scroll-top', `${scrollTop}px`);
      document.body.style.setProperty('--scrollbar-height', `${scrollbarHeight}px`);

      document.body.classList.add('is-scrolling');

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 1000);
    }

    window.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);

    updateScrollbar();

    return () => {
      window.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      filter: "brightness(1.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="w-screen flex flex-col bg-[#F8F8F8] items-center relative justify-center">
      <img
        src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732180613/Group_12_m6sgsl.webp'
        alt="Mobile Hero Images"
        className="absolute top-0 w-screen md:hidden"
      />
      <motion.div
        className="w-[1440px] h-[889px] absolute max-md:hidden top-0"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.div
          className="w-full z-20 h-full relative"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732174014/confident-smiling-male-doctor-medical-office_kl5xxj.webp'
              alt="Hero Image 1"
              width={194}
              height={183}
              className="rounded-[19.52px] h-[183px] w-[194px] absolute top-[248px] left-[109px]"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732174014/portrait-happy-senior-african-american-man-smiling_cd98um.webp'
              alt="Hero Image 2"
              width={226}
              height={150}
              className="rounded-[19.52px] h-[150px] w-[226px] absolute top-[639px] left-[174px]"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732174014/image_fx__19_1_ewquxp.webp'
              alt="Hero Image 3"
              width={174}
              height={174}
              className="rounded-[16px] h-[174px] w-[174px] absolute top-[552px] left-[499px]"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732174014/front-view-woman-celebrating-birthday-together_kf19mw.webp'
              alt="Hero Image 4"
              width={151}
              height={175}
              className="rounded-[16px] h-[175px] w-[151px] absolute top-[714px] left-[794px]"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732174014/medium-shot-smiley-man-posing-outdoors_r9tp0q.webp'
              alt="Hero Image 5"
              width={150}
              height={226}
              className="rounded-[16px] h-[226px] w-[150px] absolute top-[525px] left-[1002px]"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732174015/portrait-woman-smiling_u2dedn.webp'
              alt="Hero Image 6"
              width={151}
              height={182}
              className="rounded-[16px] h-[182px] w-[151px] absolute top-[271px] left-[1169px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="h-[717px] heroBG max-md:pt-[20rem] w-screen flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.div className="flex z-50 flex-row items-center py-10 space-x-2" variants={fadeInUp}>
          <Logo />
          <p className="font-plus-jakarta text-gray font-bold text-[22.2px]">Akeso<span className="font-normal">Health</span></p>
        </motion.div>
        <motion.div className="flex flex-col z-50 items-center md:h-[290px] md:justify-between max-md:space-y-5" variants={staggerChildren}>
          <motion.p
            className="font-plus-jakarta max-md:tracking-tighter max-md:leading-[2.5rem] font-medium w-[672px] text-center leading-[4rem] tracking-tight text-[70px] max-md:text-[40px] max-md:w-[346px] text-gray2"
            variants={fadeInUp}
          >
            Smarter Healthcare, <br /><span className="text-light-blue">Better</span> Lives.
          </motion.p>
          <motion.p
            className="w-[320px] text-gray3 text-base text-center md:hidden"
            variants={fadeInUp}
          >
            At Akeso Health, we're transforming healthcare for patients and providers alike.<br /> By making technology work for everyone, we're creating a future where your health comes first.
          </motion.p>
          <motion.p
            className="w-[481px] text-gray3 text-base text-center max-md:hidden"
            variants={fadeInUp}
          >
            At Akeso Health, we're transforming healthcare for patients and providers alike. By making technology work for everyone, we're creating a future where your health comes first.
          </motion.p>

          <motion.div
            className="flex flex-row max-md:hidden focus-within:border-blue border-[1px] border-transparent transition ease-in-out items-center w-[440px] h-[60px] space-x-2 rounded-2xl bg-white p-2"
            variants={fadeInUp}
          >
            <input
              type="email"
              placeholder="Enter e-mail address"
              className="flex-1 flex outline-none bg-transparent active:outline-none focus:outline-none text-gray placeholder:text-gray3 text-base"
            />
            <div className="bg-blue rounded-[10px] w-[139px] h-[44px] flex flex-row space-x-1 items-center justify-center cursor-pointer">
              <p className="text-white font-medium text-base">Join Waitlist</p>
              <ForwardIcon />
            </div>
          </motion.div>
          <div className="flex flex-col w-full items-center justify-center space-y-2 md:hidden">

            <motion.div
              className="flex flex-row md:hidden focus-within:border-blue border-[1px] border-transparent transition ease-in-out items-center w-[346px] h-[57px] space-x-2 rounded-2xl bg-white p-2"
              variants={fadeInUp}
            >
              <input
                type="email"
                placeholder="Enter e-mail address"
                className="flex-1 flex outline-none bg-transparent active:outline-none focus:outline-none text-gray placeholder:text-gray3 text-base"
              />
            </motion.div>

            <div className="bg-blue rounded-[10px] w-[139px] h-[44px] flex flex-row space-x-1 items-center justify-center cursor-pointer">
              <p className="text-white font-medium text-base">Join Waitlist</p>
              <ForwardIcon />
            </div>

          </div>


        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center pt-[12rem] justify-center w-screen flex-col space-y-5"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
      >
        <motion.div variants={fadeInUp}>
          <TIcon />
        </motion.div>
        <motion.p
          className="text-gray2 text-center text-[22px] max-md:text-[18px] max-md:w-[313px] max-w-[587.13px]"
          variants={fadeInUp}
        >
          Healthcare shouldn't be complicated. Akeso Health uses smart technology to simplify your care—keeping your records up-to-date, helping your doctor make informed decisions, and ensuring you stay on track with personalized plans. We're here to make healthcare work better for you.
        </motion.p>
        <motion.div className="rotate-180" variants={fadeInUp}>
          <TIcon />
        </motion.div>
      </motion.div>
      <Method />
      <Imagine />
      <Services />
      <Footer />
    </div>
  );
}

