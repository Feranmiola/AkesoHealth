/* eslint-disable */
// @ts-nocheck
'use client'
import { useEffect } from "react";
import ForwardIcon from "../Components/Icons/ForwardIcon";
import Logo from "../Components/Icons/Logo";
import TIcon from "../Components/Icons/TIcon";
import Method from "@/Components/Method";


export default function Home() {

  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window === "undefined") return;

    let scrollTimer = 0;

    // Function to update scrollbar properties
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

    // Add event listeners for scroll and resize
    window.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);

    // Initial call to set the correct scrollbar size
    updateScrollbar();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, []); // Empty dependency array to run only once on mount


  return (
    <div className="w-screen flex flex-col bg-[#F8F8F8] items-center justify-center">
      <div className="h-[717px] flex flex-col items-center  ">
        <div className="flex flex-row items-center py-10 space-x-2">
          <Logo />
          <p className="font-plus-jakarta text-gray font-bold text-[22.2px]">Akeso<span className="font-normal">Health</span></p>
        </div>
        <div className="flex flex-col items-center h-[290px] justify-between">
          <p className="font-plus-jakarta font-medium w-[672px] text-center leading-[4rem] tracking-tight text-[70px] text-gray2">Smarter Healthcare, <span className="text-light-blue">Better</span> Lives.</p>
          <p className="w-[481px] text-gray3 text-base text-center">At Akeso Health, we’re transforming healthcare for patients and providers alike. By making technology work for everyone, we’re creating a future where your health comes first.</p>

          <div className="flex flex-row focus-within:border-blue border-[1px] border-transparent transition ease-in-out items-center w-[440px] h-[60px] space-x-2  rounded-2xl bg-white p-2">
            <input
              type="email"
              placeholder="Enter e-mail address"
              className=" flex-1 flex outline-none bg-transparent active:outline-none focus:outline-none text-gray placeholder:text-gray3 text-base"
            />
            <div className="bg-blue rounded-[10px] w-[139px] h-[44px] flex flex-row space-x-1 items-center justify-center cursor-pointer">
              <p className="text-white font-medium text-base">Join Waitlist</p>
              <ForwardIcon />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center w-screen flex-col space-y-5">
        <TIcon />
        <p className="text-gray2 text-center text-[22px] max-w-[587.13px]">Healthcare shouldn’t be complicated. Akeso Health uses smart technology to simplify your care—keeping your records up-to-date, helping your doctor make informed decisions, and ensuring you stay on track with personalized plans. We’re here to make healthcare work better for you.</p>
        <div className="rotate-180">
          <TIcon />
        </div>
      </div>
      <Method />
    </div>
  );
}
