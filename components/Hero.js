"use client"
import CustomButton from "./CustomButton";
import { FaPaperPlane } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export default function Hero() {
  return (
    <div
      name="Home"
      className="h-screen flex flex-col items-center justify-center text-gray-900"
    >
      <div className="flex flex-col items-center">
        <p className="md:text-lg text-base font-semibold text-center">
          Transforming Ideas into Captivating Digital Interfaces
        </p>
        <h1 className="sm:text-5xl text-4xl font-extrabold md:py-9 py-4 text-center">
          Leveraging Modern Technology to Create <br />
          <span className="text-coral">Elegant</span> and{" "}
          <span className="text-coral">Responsive</span> Web Experiences
        </h1>
        <p className="md:text-xl text-lg font-bold">
          Hi, I'm Athifah, Frontend Developer.
        </p>
      </div>
      <div className="pt-16">
        <LinkScroll
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <CustomButton text="Show my work" icons={<FaPaperPlane />} />
        </LinkScroll>
      </div>
      <div className="clip-gradient"></div>
    </div>
  );
}
