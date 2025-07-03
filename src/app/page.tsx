import About from "./components/about";
import Banner from "./components/banner";
import Community from "./components/community";
import Features from "./components/features";
import Header from "./components/header";
import WhyChooseUs from "./components/why-choose-us";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Features />
      <WhyChooseUs />
      <Community />
    </>
  );
}
