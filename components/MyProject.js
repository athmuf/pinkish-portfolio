import Link from "next/link";
import CardProject from "./CardProject";
import CustomButton from "./CustomButton";
import { FaPaperPlane } from "react-icons/fa";
import { projects } from "@/constant";

export default function MyProject() {
  return (
    <div
      className="h-screen flex flex-col justify-center py-10 sm:pt-16 mt-32"
    >
      <h2 name="Projects" className="sm:text-4xl text-3xl font-bold sm:py-20 py-10 text-center text-gray-900">
        A small section of <span className="text-coral">my project</span>
      </h2>
      <div className="flex sm:flex-row flex-col">
        {projects.slice(0, 2).map((project) => (
          <div className="sm:w-1/2 w-full sm:px-10 py-2 sm:py-0">
            <CardProject
              key={project?.label}
              title={project?.label}
              img={project?.img}
              desc={project?.desc}
              gallery={project?.gallery}
              caption={project?.caption}
              features={project?.features}
              deployment={project?.deployment}
              github={project?.github}
            ></CardProject>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center sm:pt-20 pt-10">
        <Link href="/project">
          <CustomButton text="View more my project" icons={<FaPaperPlane />} />
        </Link>
      </div>
    </div>
  );
}
