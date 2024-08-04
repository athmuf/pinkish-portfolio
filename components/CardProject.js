import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { IoOpenOutline } from "react-icons/io5";

export default function CardProject({ img, title, desc }) {
  return (
    <div className="h-[380px] border sm:w-1/2 w-full rounded-xl shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 bg-white">
      <div className="h-2/3 relative">
        <Image
          src={img}
          alt="Project"
          fill
          objectFit="cover"
          className="rounded-2xl pt-8 px-8 pb-4"
        ></Image>
      </div>
      <div className="py-4 h-1/3 pt-4 px-8 pb-8">
        <div className="relative h-full content-between">
          <div>
            <h3 className="font-bold text-2xl text-gray-900 pb-2">{title}</h3>
            <p className="md:text-base text-sm text-gray-500">{desc}</p>
          </div>
          <div className="absolute bottom-0 right-0">
            <Link href="" className="flex items-center hover:underline text-green-600 md:text-lg text-base">
              Learn more the project{" "}
              <span className="pl-3">
                <IoOpenOutline />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
