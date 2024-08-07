import WorkCard from "./WorkCard";
import { works } from "@/constant";

export default function WorkExperience() {
  return (
    <div>
      <div className="h-20 bg-gradient-to-t from-cream sm:pt-0 pt-24" />
      <div className="h-screen flex flex-col justify-center py-10 sm:pt-0 pt-96 bg-cream md:px-24 px-3">
        <h2
          name="Works"
          className="sm:text-4xl text-3xl font-bold sm:py-20 py-10 text-center text-gray-900"
        >
          My <span className="text-coral">Work Experience</span>
        </h2>
        <div className="sm:space-y-12 space-y-3">
          <div className="flex justify-center items-center flex-col md:space-y-8 space-y-3">
            {works.map((work) => (
              <div key={work.label} className="md:w-1/2 w-full">
                <WorkCard
                  key={work.label}
                  img={work.img}
                  title={work.label}
                  desc={work.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-20 bg-gradient-to-b from-cream sm:pt-0 pt-96" />
    </div>
  );
}
