import { SlHome } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { SlPhone } from "react-icons/sl";
import { SlLayers } from "react-icons/sl";
import { SlBriefcase } from "react-icons/sl";

import Lead from "@/public/lead.webp";
import Coach from "@/public/mentor.webp";
import Intern from "@/public/intern.webp";

import KMS from "@/public/projects/kms.webp";
import KMS1 from "@/public/projects/kms-1.webp";
import KMS2 from "@/public/projects/kms-2.webp";
import KMS3 from "@/public/projects/kms-3.webp";
import KAI from "@/public/projects/kai.webp";
import Cat from "@/public/projects/cat.webp";
import Cat1 from "@/public/projects/cat-1.webp";
import Cat2 from "@/public/projects/cat-2.webp";
import Anime from "@/public/projects/anime-list.webp";
import Anime1 from "@/public/projects/anime-list-1.webp";
import Anime2 from "@/public/projects/anime-list-2.webp";
import Beefy from "@/public/projects/beefy.webp";
import Mentor from "@/public/projects/mentor.webp";
import Mentor1 from "@/public/projects/mentor-1.webp";
import Mentor2 from "@/public/projects/mentor-2.webp";
import Piringan from "@/public/projects/piringan.webp";
import Piringan1 from "@/public/projects/piringan-1.webp";
import Piringan2 from "@/public/projects/piringan-2.webp";
import Piringan3 from "@/public/projects/piringan-3.webp";
import CATchstar from "@/public/projects/catchstar.webp";
import CATchstar1 from "@/public/projects/catchstar-1.webp";
import CATchstar2 from "@/public/projects/catchstar-2.webp";
import DigiClass from "@/public/projects/digital-class.webp";
import DigiClass1 from "@/public/projects/digital-class-1.webp";
import DigiClass2 from "@/public/projects/digital-class-2.webp";
import PortfolioV1 from "@/public/projects/portfolio-v1.webp";
import PortfolioV11 from "@/public/projects/portfolio-v1-1.webp";
import PortfolioV12 from "@/public/projects/portfolio-v1-2.webp";

const nav = [
  { label: "Home", url: "#Home", Icons: SlHome },
  { label: "Services", url: "#Services", Icons: SlLike },
  { label: "Projects", url: "#Projects", Icons: SlLayers },
  { label: "Works", url: "#Works", Icons: SlBriefcase },
  { label: "Contact", url: "#Contact", Icons: SlPhone },
];

const projects = [
  {
    label: "Discover Culinary Delights",
    img: Piringan,
    desc: "Offers a diverse collection of detailed recipes, providing users with a quick and inspiring way to discover new culinary delights.",
    features: [
      { id: 1, details: "Culinary inspiration" },
      { id: 2, details: "Culinary ingredients and cooking instructions" },
      { id: 3, details: "Related recipes" },
    ],
    github: "https://github.com/athmuf/piringan",
    deployment: "https://piringan.vercel.app/",
    caption:
      "PIRINGAN offers a diverse collection of detailed recipes, providing users with a quick and inspiring way to discover new culinary delights. This project built with React.js and Tailwind CSS and use API from Rapid API food recipes.",
    gallery: [
      { id: 1, url: Piringan1 },
      { id: 2, url: Piringan2 },
      { id: 3, url: Piringan3 },
    ],
  },
  {
    label: "Anime Collection",
    img: Anime,
    desc: "Explore a wide range of anime, save your favorite series, and share your curated anime list with friends.",
    features: [
      { id: 1, details: "Find anime from unofficial database My Anime List" },
      { id: 2, details: "Creating a your personalized collection" },
      { id: 3, details: "Share your curated anime list with friends" },
      {
        id: 4,
        details:
          "Prefer a darker look? Switch to dark theme for a more comfortable viewing experience.",
      },
    ],
    github: "https://github.com/athmuf/anime-list",
    caption:
      "This platform provides an immersive experience for anime enthusiasts. Explore a wide range of anime, save your favorite series, and share your curated anime list with friends. The website built with React.js and Tailwind CSS and uses the API from JIKAN.",
    gallery: [
      { id: 1, url: Anime1 },
      { id: 2, url: Anime2 },
    ],
  },
  {
    label: "Herbal Insight",
    img: KMS,
    desc: "Improve and enhance the performance of the KMS medicinal plant website. Provides name, taxonomy, traditional use, and pharmacology of medicinal plants.",
    features: [
      { id: 1, details: "Enhanced web performance for a faster experience." },
      {
        id: 2,
        details:
          "Search for medicinal plants by name, taxonomy, traditional use, and pharmacology.",
      },
      {
        id: 3,
        details:
          "Share your knowledge about medicinal plants by contributing as a member of our community.",
      },
    ],
    github: "https://repository.ipb.ac.id/handle/123456789/155502",
    caption:
      "Enhancement from previous KMS Medicinal Plant Indonesia website. The redevelopment successfully implemented improvements based on the heuristic evaluation findings, resulting in a 46.03% performance increase for mobile devices and a 31.08% improvement for desktop devices. The project built with Next.js and TailwindCSS",
    gallery: [
      { id: 1, url: KMS1 },
      { id: 2, url: KMS2 },
      { id: 3, url: KMS3 },
    ],
  },

  {
    label: "Digital Class by TapToons",
    img: DigiClass,
    desc: "Elevate learning experience with engaging video courses.",
    features: [
      { id: 1, details: "Certified learning" },
      { id: 2, details: "Video-based materials" },
      { id: 3, details: "Learn from experts" },
    ],
    caption:
      "Learn the skills you desire anytime and anywhere with the TapToons website (formerly FM Mawaddah). The courses come with comprehensive video tutorials. This project was developed using Next.js and React.js.",
    gallery: [
      { id: 1, url: DigiClass1 },
      { id: 2, url: DigiClass2 },
    ],
  },
  {
    label: "Coding Coach Workshop",
    img: Mentor,
    desc: "Conducted workshops for junior high school students, introducing them to coding and web development.",
    features: [
      { id: 1, details: "Beginner friendly" },
      { id: 2, details: "Provide profile, skills, achievement, and contact" },
    ],
    github: "https://github.com/athmuf/workshop-coding-website",
    deployment: "https://alheportofolio.netlify.app/",
    caption:
      "Conducted workshops for over 50 junior high school students, introducing them to coding, web development, HTML, and CSS through hands-on teaching methods. In this workshop, I taught the students how to build a simple web profile using basic HTML and CSS. View workshop source code below",
    gallery: [
      { id: 1, url: Mentor1 },
      { id: 2, url: Mentor2 },
    ],
  },
  {
    label: "Portfolio V1",
    img: PortfolioV1,
    desc: "My first website profile using React.js and CSS.",
    features: [
      { id: 1, details: "Simple and elegant look" },
      { id: 2, details: "Responsive design" },
    ],
    github: "https://github.com/athmuf/web-portofolio",
    deployment: "https://athifahmuflihah.netlify.app/",
    caption: "My first website profile using React.js and CSS.",
    gallery: [
      { id: 1, url: PortfolioV11 },
      { id: 2, url: PortfolioV12 },
    ],
  },
  {
    label: "Random Cat Generator",
    img: Cat,
    desc: "Generate cute cat image and share the cuteness with others.",
    features: [
      { id: 1, details: "Generate cat picture" },
      { id: 2, details: "Share your picture with your friends" },
    ],
    github: "https://github.com/athmuf/random-cat-generator",
    deployment: "https://kucing-generator.vercel.app/",
    caption:
      "Who doesn't love cat? Generate cute cat image and share the cuteness with others. Project built with React.js",
    gallery: [
      { id: 1, url: Cat1 },
      { id: 2, url: Cat2 },
    ],
  },
  {
    label: "CATchstar Games: Main Menu",
    img: CATchstar,
    desc: "Simple main menu game using Unity.",
    features: [
      { id: 1, details: "Main menu game design" },
      { id: 2, details: "Responsive screen" },
    ],
    github:
      "https://drive.google.com/file/d/1G_WQWujlDw9NhcuJlTJfnklKqSFOeeV8/view",
    deployment: "",
    caption:
      "Catchstar is a mini project PC game centered on designing the main menu. I developed all the game assets except for the sound and music. This project received the 'Best Main Menu' award at the game challenge selection recruitment of IPB GARY (Game Reality) Community Members. The game was built using Unity and C#. Try it by clicking the button below.",
    gallery: [
      { id: 1, url: CATchstar1 },
      { id: 2, url: CATchstar2 },
    ],
  },
];

const works = [
  {
    label: "Fronted Developer SERA Astra Intern",
    desc: "Assisted in the development pf a web-base platform using React.js, enhancing interctivity.",
    img: Intern,
  },
  {
    label: "CTO & Frontend Developer Taptoons",
    desc: "Led the IT departemen and responsible for frontend development efforts, utilizing Next.js and React.js.",
    img: Lead,
  },
  {
    label: "Mentor Coding Workshop",
    desc: "Conducted workshops for over 50 junior hight schoolstudents, introducing them to coding through hands-on teaching methods.",
    img: Coach,
  },
];

export { nav, works, projects };
