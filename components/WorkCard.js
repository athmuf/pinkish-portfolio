import Image from "next/image";

export default function WorkCard({ img, title, desc }) {
  return (
    <div className="w-full h-full border rounded-2xl flex items-center space-x-8 py-8 justify-center shadow-md bg-white">
      <div className="relative h-24 w-24">
        <Image src={img} alt={title} fill objectFit="cover" />
      </div>
      <div className="w-2/3">
        <h3 className="font-bold text-2xl text-gray-900 pb-2">{title}</h3>
        <p className="md:text-base text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
