import Image from "next/image";
import Picture from "@/public/picture.webp";
export default function Profile() {
  return (
    <div className="pt-10 pb-20">
      <div className="h-48 bg-gradient-to-t from-rose-quartz" />
      <div className="bg-rose-quartz py-10 flex flex-row">
        <div className="w-1/3 flex items-center">
          <div className="">
            <p className="text-4xl font-bold text-gray-900">title</p>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-64 h-72 relative">
            <Image
              src={Picture}
              alt="Athifah Muflihah"
              layout="fill"
              objectFit="cover"
              className="rounded-xl border-2 border-white"
            />
          </div>
          
        </div>
        <div className="w-1/3">test</div>
      </div>
      <div className="h-48 bg-gradient-to-b from-rose-quartz" />
    </div>
  );
}
