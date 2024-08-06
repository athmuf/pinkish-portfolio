import { CardProject } from "@/components";
import { projects } from "@/constant";

export default function project() {
  return (
    <div>
      <h1 className="sm:text-4xl text-3xl font-bold text-left text-gray-900">
        Collection of <span className="text-coral">My Projects</span>
      </h1>
      <div className="py-10">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-10">
          {projects.map((project) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
