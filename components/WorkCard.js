import Image from "next/image";

export default function WorkCard({ img, title, desc }) {
  return (
    <div className="w-full h-full border rounded-2xl flex items-center sm:space-x-8 space-x-3 py-8 sm:px-8 px-3 sm:justify-center justify-between shadow-md bg-white">
      <div className="relative sm:h-24 sm:w-24 w-12 h-12">
        <Image src={img} alt={title} fill objectFit="cover" />
      </div>
      <div className="w-5/6">
        <h3 className="font-bold sm:text-2xl text-lg text-gray-900 pb-2">{title}</h3>
        <p className="md:text-base text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
