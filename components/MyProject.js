import CardProject from "./CardProject";
import Piringan from "@/public/piringan.webp";
import AnimeList from "@/public/anime-list.webp";

export default function MyProject() {
  return (
    <div name="Projects" className="h-screen flex flex-col justify-center py-10 sm:pt-0 pt-96">
      <h2 className="sm:text-4xl text-3xl font-bold sm:py-20 py-10 text-center text-gray-900">
        A small section of <span className="text-coral">my project</span>
      </h2>
      <div className="h flex sm:flex-row flex-col sm:space-x-24 space-x-0 md:space-y-0 space-y-5">
        <CardProject
          img={Piringan}
          title="Discovery Culinary Delights"
          desc="Offers a diverse collection of detailed recipes, providing users with a quick and inspiring way to discover new culinary delights."
        />
        <CardProject
          img={AnimeList}
          title="Anime Collection"
          desc="Explore a wide range of anime, save your favorite series, and share your curated anime list with friends."
        />
      </div>
    </div>
  );
}
