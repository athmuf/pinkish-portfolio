import CustomButton from "./CustomButton";
import { FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <div name="Home" className="h-screen flex flex-col items-center justify-center text-gray-900">
      <div className="flex flex-col items-center">
        <p className="md:text-lg text-base font-semibold">
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
        <CustomButton text="Show my work" icons={<FaPaperPlane />}/>
      </div>
      <div className="clip-gradient"></div>
    </div>
  );
}
