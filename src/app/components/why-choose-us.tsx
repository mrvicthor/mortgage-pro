import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-[#006466]">
      <div className="grid lg:grid-cols-2 max-w-7xl gap-12 mx-auto">
        <div className="space-y-[3.5rem]">
          <h4 className="text-white font-bold uppercase text-5xl">
            why <br /> choose us
          </h4>
          <div className="h-[20rem] max-w-[33.9375rem] overflow-hidden rounded-3xl mt-[1.625rem]">
            <Image
              src="/choose.jpg"
              alt="choose us image"
              width={542}
              height={200}
              className="relative -top-[14rem]"
            />
          </div>
        </div>
        <div className="space-y-[3.5rem]">
          <p className="text-white text-[1rem]">
            We are committed to helping individuals and families achieve their
            homeownership goals. With years of experience in the mortgage
            industry, our team provides personalized advice and support to
            ensure you find the right mortgage solution.
          </p>
          <div className="space-y-8">
            <div className="space-y-4">
              <h5 className="font-bold text-lg text-white uppercase">
                expert guidance
              </h5>
              <p className="text-sm text-white font-normal">
                Our team consists of experience mortgage <br /> professionals
                ready to assist you.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-lg text-white uppercase">
                customized solutions
              </h5>
              <p className="text-sm text-white font-normal">
                We personalize our services to match your <br /> unique needs.
              </p>
            </div>{" "}
            <div className="space-y-4">
              <h5 className="font-bold text-lg text-white uppercase">
                competitive rates
              </h5>
              <p className="text-sm text-white font-normal">
                Our team consists of experience mortgage <br /> professionals
                ready to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
