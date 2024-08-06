import Image from "next/image";
import Laptop from "@/public/laptop.webp";
import World from "@/public/world.webp";
export default function Service() {
  return (
    <div name="Services" className="py-10">
      <div className="sm:grid sm:grid-cols-2 sm:gap-10">
        <div className="shadow-md sm:h-[350px] h-[300px] rounded-3xl border">
          <div className="h-full relative">
            <Image
              src={Laptop}
              alt="priority"
              fill
              objectFit="cover"
              className="rounded-3xl"
            ></Image>
            <div className="absolute h-full w-full flex items-end overflow-hidden">
              <div className="h-1/2 w-full rounded-3xl bg-gradient-to-t from-white transition-all duration-300"></div>
              <div className="absolute h-full w-full flex items-end sm:py-8 sm:px-8 py-4 px-4 font-bold sm:text-2xl text-xl text-gray-900 hover:bg-white hover:bg-opacity-50 rounded-b-3xl transition-all duration-300">
                <p className="hover:translate-x-3 duration-300 transition-all">
                  I prioritize client <br />
                  collaboration fostering <br />
                  open communication
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:h-full h-[300px] sm:grid sm:grid-cols-1 sm:gap-10 sm:space-y-0 space-y-5 sm:pt-0 pt-5">
          <div className="sm:h-full h-1/2 border rounded-3xl shadow-md">
            <div className="h-full relative">
              <Image
                src={World}
                alt="priority"
                fill
                objectFit="cover"
                className="rounded-3xl"
              ></Image>
              <div className="absolute h-full w-full flex items-end">
                <div className="h-1/2 w-full rounded-3xl bg-gradient-to-t transition-all duration-300"></div>
                <div className="absolute h-full w-full flex items-end sm:py-8 sm:px-8 py-4 px-4 font-bold sm:text-2xl text-xl text-gray-900 hover:bg-white hover:bg-opacity-50 rounded-b-3xl transition-all duration-300">
                  <p className="hover:translate-x-3 duration-300 transition-all">
                    I'm very flexible with time <br />
                    zone communication
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-full h-1/2 bg-gray-100 border rounded-3xl shadow-md">
          <div className="flex h-full hover:translate-x-3 duration-300 transition-all">
            <div className="relative w-1/2">
              <div className="flex flex-col h-full justify-center sm:p-8 p-4">
                <p className="md:text-base text-sm">
                  I constantly try to improve
                </p>
                <h2 className="md:text-2xl text-xl font-bold">My tech stack</h2>
              </div>
            </div>
            <div className="relative w-1/2">
              <div className="absolute sm:p-8 p-4">
                <div className="sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 space-y-1 sm:text-base text-sm">
                  <div className="bg-rose-quartz border px-5 sm:py-2 py-1 rounded-lg">
                    React.js
                  </div>
                  <div className="bg-rose-quartz border px-5 sm:py-2 py-1 rounded-lg">
                    Next.js
                  </div>
                  <div className="bg-rose-quartz border px-5 sm:py-2 py-1 rounded-lg">
                    TailwindCSS
                  </div>
                  <div className="bg-rose-quartz border px-5 sm:py-2 py-1 rounded-lg">
                    Bootstrap
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
