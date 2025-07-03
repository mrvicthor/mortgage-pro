"use client";
import { container, item } from "@/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Community = () => {
  return (
    <section>
      <div className="bg-[url('/save-more.png')] h-[24.375rem] md:h-[48.9375rem] w-full bg-no-repeat bg-cover bg-center flex justify-center items-center">
        <motion.div
          variants={container}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="font-black text-4xl md:text-7xl lg:text-9xl text-[#e67a00] uppercase"
          >
            start low
          </motion.p>
          <motion.p
            variants={item}
            className="font-black text-4xl md:text-7xl lg:text-9xl text-[#e67a00] uppercase"
          >
            save more
          </motion.p>
          <motion.div
            variants={item}
            className="flex items-center justify-center mt-8"
          >
            <Link
              href="#"
              className="group flex items-center capitalize bg-white px-4 py-2 rounded-3xl text-[#e67a00]"
            >
              learn more{" "}
              <IoIosArrowRoundForward
                className="group-hover:animate-pulse"
                size={24}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
