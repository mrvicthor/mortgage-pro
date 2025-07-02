"use client";
import { container, item } from "@/utils";
import { motion } from "motion/react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Banner = () => {
  return (
    <section className="bg-[url(/mortgage-pro-banner.jpg)] min-h-dvh w-full bg-cover bg-center bg-no-repeat relative -mt-18 flex items-center overflow-hidden">
      <motion.div
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        variants={container}
        className="container mx-auto max-w-7xl px-4"
      >
        <motion.div
          variants={item}
          className="flex md:hidden justify-end absolute top-24 right-4"
        >
          <button
            aria-label="get started"
            className=" group bg-[#006466] h-[2.4375rem] w-[8.5rem] flex items-center gap-1 justify-center text-white capitalize rounded-4xl cursor-pointer"
          >
            get started{" "}
            <IoIosArrowRoundForward
              className="group-hover:animate-pulse"
              size={24}
            />
          </button>
        </motion.div>
        <h1 className="flex flex-col text-5xl md:text-8xl uppercase ruslan-font">
          <motion.span variants={item} className="font-normal  text-white">
            own
          </motion.span>
          <motion.span variants={item} className="font-normal text-white">
            your
          </motion.span>
          <motion.span variants={item} className="font-normal text-[#FFEFDE]">
            dream
          </motion.span>
        </h1>
        <motion.p
          variants={item}
          className="text-2xl md:text-4xl text-white uppercase font-medium"
        >
          simplify your journey
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Banner;
