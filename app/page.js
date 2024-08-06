import {
  Hero,
  Footer,
  Navbar,
  Service,
  Contact,
  MyProject,
  WorkExperience,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="md:px-24 px-3">
        <Hero />
      </section>
      <section className="md:px-24 px-3">
        <Service />
      </section>
      <section className="md:px-24 px-3">
        <MyProject />
      </section>
      <WorkExperience />
      <section className="md:px-24 px-3">
        <Contact />
      </section>
    </main>
  );
}
