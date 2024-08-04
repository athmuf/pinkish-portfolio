import WorkCard from "./WorkCard";
import Lead from "@/public/lead.webp";
import Learn from "@/public/learn.webp";
import Mentor from "@/public/mentor.webp";
import Intern from "@/public/intern.webp";

export default function WorkExperience() {
  return (
    <div>
      <div className="h-20 bg-gradient-to-t from-cream sm:pt-0 pt-96" />
      <div name="Works" className="h-screen flex flex-col justify-center py-10 sm:pt-0 pt-96 bg-cream md:px-24 px-3">
        <h2 className="sm:text-4xl text-3xl font-bold sm:py-20 py-10 text-center text-gray-900">
          My <span className="text-coral">Work Experience</span>
        </h2>
        <div className="sm:space-y-12 space-y-3">
          <div className="flex sm:flex-row flex-col sm:space-x-12 space-x-0 md:space-y-0 space-y-3">
            <WorkCard
              img={Intern}
              title="Fronted Developer SERA Astra Intern"
              desc="Assisted in the development pf a web-base platform useing React.js, enhancing interctivity."
            />
            <WorkCard
              img={Lead}
              title="CTO & Frontend Developer Taptoons"
              desc="Led the IT departemen and responsible for frontend development efforts, utilizing Next.js and React.js."
            />
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-12 space-x-0 md:space-y-0 space-y-3">
            <WorkCard
              img={Mentor}
              title="Mentor Coding Workshop"
              desc="Conducted workshops for over 50 junior hight school
students, introducing them to coding through hands-on teaching methods."
            />
            <WorkCard
              img={Learn}
              title="Cloud Computing Bangkit Academy"
              desc="Mastered cloud computing and excelled in utilizing Google Cloud Platform through immersive training in the renowned Bangkit Academy program."
            />
          </div>
        </div>
      </div>
      <div className="h-20 bg-gradient-to-b from-cream sm:pt-0 pt-96" />
    </div>
  );
}
