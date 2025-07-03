"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react";
import { container, item } from "@/utils";

const Features = () => {
  return (
    <section className="py-20 px-4 bg-[#F1FFFF]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <motion.h3
            whileInView={{
              x: [-50, 0],
              opacity: [0, 1],
            }}
            viewport={{ once: true }}
            className="text-[#006466] font-bold text-4xl lg:text-5xl uppercase"
          >
            comprehensive mortgage solutions tailored for you
          </motion.h3>
          <motion.p
            whileInView={{
              x: [50, 0],
              opacity: [0, 1],
            }}
            className="text-[1rem] text-[#414141] font-normal py-8"
          >
            We are committed to helping individuals and families achieve their
            home ownership goals. With years of experience in the mortgage
            industry, our team provides personalized advice and support to
            ensure you find the right mortgage solution.
          </motion.p>
        </div>
        <motion.div
          variants={container}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="mt-[7.5rem] grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            variants={item}
            className="p-3 bg-[#006466] rounded-3xl space-y-9 pb-9"
          >
            <div className="h-16 w-16 rounded-full bg-white" />
            <h4 className="font-bold text-lg text-white uppercase">
              home purchase <br /> loans
            </h4>
            <p className="text-sm text-white">
              Achieving homeownership is a significant milestone, and our home
              purchase loans are designed to make this process smooth and
              affordable for you.
            </p>
            <Link
              href="#"
              className="group flex items-center capitalize text-white"
            >
              learn more{" "}
              <IoIosArrowRoundForward
                className="group-hover:animate-pulse"
                size={24}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={item}
            className="p-3 bg-[#006466] rounded-3xl space-y-9 pb-9"
          >
            <div className="h-16 w-16 rounded-full bg-white" />
            <h4 className="font-bold text-lg text-white uppercase">
              mortgage <br /> refinancing
            </h4>
            <p className="text-sm text-white">
              Refinancing your mortgage can be a strategic financial move to
              lower your monthly payments, reduce your interest rate, or tap
              into your home’s equity.
            </p>
            <Link
              href="#"
              className="group flex items-center capitalize text-white"
            >
              learn more{" "}
              <IoIosArrowRoundForward
                className="group-hover:animate-pulse"
                size={24}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={item}
            className="p-3 bg-[#006466] rounded-3xl space-y-9 pb-9"
          >
            <div className="h-16 w-16 rounded-full bg-white" />
            <h4 className="font-bold text-lg text-white uppercase">
              fixed-rate <br />
              mortgages
            </h4>
            <p className="text-sm text-white">
              A fixed-rate mortgage offers stability and predictability, with a
              consistent interest rate throughout the loan term.
            </p>
            <Link
              href="#"
              className="group flex items-center capitalize text-white"
            >
              learn more{" "}
              <IoIosArrowRoundForward
                className="group-hover:animate-pulse"
                size={24}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={item}
            className="p-3 bg-[#006466] rounded-3xl space-y-9 pb-9"
          >
            <div className="h-16 w-16 rounded-full bg-white" />
            <h4 className="font-bold text-lg text-white uppercase">
              adjustable-rate mortgages
            </h4>
            <p className="text-sm text-white">
              An adjustable-rate mortgage (ARM) starts with a lower initial
              interest rate, making it an attractive option to those planning to
              sell or refinance within a few years.
            </p>
            <Link
              href="#"
              className="group flex items-center capitalize text-white"
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

export default Features;
