import { IoIosArrowRoundForward } from "react-icons/io";
const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-bold text-3xl lg:text-5xl text-[#006466] uppercase">
            use our loan calculator to estimate your monthly payments and plan
            your budget effectively
          </h2>
          <p className="font-normal text-[1rem] text-[#414141]">
            We are committed to helping individuals and families achieve their
            home ownership goals. With years of experience in the mortgage
            industry, our team provides personalized advice and support to
            ensure you find the right mortgage solution.
          </p>
          <button
            aria-label="get started"
            className=" group bg-[#006466] h-[2.4375rem] mt-[4.3125rem] w-[8.5rem] flex items-center gap-1 justify-center text-white capitalize rounded-4xl cursor-pointer"
          >
            get started{" "}
            <IoIosArrowRoundForward
              className="group-hover:animate-pulse"
              size={24}
            />
          </button>
        </div>
        <div>
          <p className="text-[1rem] font-normal text-[#B35F00] text-right">
            About company
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
