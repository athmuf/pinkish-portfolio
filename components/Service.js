import Image from "next/image";
import Laptop from "@/public/laptop.webp";
import World from "@/public/world.webp";
export default function Service() {
  return (
    <div name="Services" className="py-10 sm:py-20">
      <div className="flex flex-col sm:flex-row sm:space-x-5 space-x-0 space-y-3 sm:space-y-0">
        <div className="sm:w-1/2 w-full">
          <div className="relative h-96 w-full rounded-2xl">
            <Image
              src={Laptop}
              alt="service"
              className="rounded-2xl shadow-md"
              objectFit="cover"
              fill
            ></Image>
            <div className="absolute bg-white h-full w-full bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 rounded-b-2xl">
              <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-white rounded-b-2xl"></div>
              <div className="absolute bottom-0 w-full sm:p-8 p-3 font-bold sm:text-2xl text-lg text-gray-900 hover:translate-x-4 transition-all duration-300">
                I prioritize client <br />
                collaboration fostering <br />
                open communication
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full space-y-5 sm:space-y-3">
          <div className="h-1/2">
            <div className="relative sm:h-full h-48 w-full rounded-2xl">
              <Image
                src={World}
                alt="service"
                className="rounded-2xl shadow-md"
                objectFit="cover"
                fill
              ></Image>
              <div className="absolute bg-white h-full w-full bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 rounded-b-2xl">
                <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-white rounded-b-2xl"></div>
                <div className="absolute bottom-0 w-full sm:p-8 p-3 font-bold sm:text-2xl text-lg text-gray-900 hover:translate-x-4 transition-all duration-300">
                  I'm very flexible with <br />
                  time zone communication
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/2">
            <div className="flex flex-row sm:h-full h-48 w-full rounded-2xl bg-gray-100 shadow-md p-3">
              <div className="w-1/3 flex justify-center items-center text-left">
                <div className="sm:text-base text-sm">
                  I constantly try to improve <br />
                  <span className="font-bold sm:text-2xl text-lg text-gray-900">
                    My Tech Stack
                  </span>
                </div>
              </div>
              <div className="w-2/3">
                <div className="grid grid-cols-2 gap-3 sm:gap-5 p-3 sm:p-5 hover:translate-x-4 transition-all duration-300">
                  <div className="bg-rose-quartz py-1 sm:py-2 px-2 sm:px-3 rounded-2xl">React.js</div>
                  <div className="bg-rose-quartz py-1 sm:py-2 px-2 sm:px-3 rounded-2xl">Next.js</div>
                  <div className="bg-rose-quartz py-1 sm:py-2 px-2 sm:px-3 rounded-2xl">TailwindCSS</div>
                  <div className="bg-rose-quartz py-1 sm:py-2 px-2 sm:px-3 rounded-2xl">Bootstrap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
