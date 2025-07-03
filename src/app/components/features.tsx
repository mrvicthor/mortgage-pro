import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Features = () => {
  return (
    <section className="py-20 px-4 bg-[#F1FFFF]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2">
          <h3 className="text-[#006466] font-bold text-5xl uppercase">
            comprehensive mortgage solutions tailored for you
          </h3>
          <p className="text-[1rem] text-[#414141] font-normal py-8">
            We are committed to helping individuals and families achieve their
            home ownership goals. With years of experience in the mortgage
            industry, our team provides personalized advice and support to
            ensure you find the right mortgage solution.
          </p>
        </div>
        <div className="mt-[7.5rem] grid grid-cols-4 gap-8">
          <div className="p-3 bg-[#006466] rounded-3xl space-y-9 pb-9">
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
          </div>
          <div className="p-3 bg-[#006466] rounded-3xl space-y-9 pb-9">
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
          </div>
          <div className="p-3 bg-[#006466] rounded-3xl space-y-9 pb-9">
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
          </div>
          <div className="p-3 bg-[#006466] rounded-3xl space-y-9 pb-9">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
