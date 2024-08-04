import Link from "next/link";
import Image from "next/image";
import Picture from "@/public/new-picture.webp";

import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";
import { VscMention } from "react-icons/vsc";

export default function Contact() {
  return (
    <div name="Contact" className="flex flex-col justify-center py-10 md:px-24 px-3 pb-32">
      <h2 className="sm:text-4xl text-3xl font-bold sm:py-20 py-10 text-center text-gray-900">
        <span className="text-coral">Contact</span> Me
      </h2>
      <div className="flex sm:space-x-10 space-x-3 items-center justify-center space-y-0">
        <div className="relative">
          <div className="relative sm:h-[250px] sm:w-[200px] h-[150px] w-[100px] z-10">
            <Image
              src={Picture}
              alt="Athifah Muflihah"
              fill
              objectFit="cover"
              className="border rounded-2xl border-t-4 border-t-rose-quartz shadow-md bg-white"
            />
          </div>
          <div className="absolute top-0 h-24 w-24 border-2 rounded-full -translate-x-10 -translate-y-10" />
          <div className="absolute bottom-0 right-0 h-12 w-12 border-2 rounded-full translate-x-5 translate-y-5" />
        </div>
        <div className="text-gray-900 z-20">
          <p className="font-bold text-2xl tracking-wide">Athifah Muflihah</p>
          <div className="flex pb-5 pt-2">
            <p className="pr-2">Available for work </p>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-dusty-rose opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-coral"></span>
            </span>
          </div>

          <div className="">
            <ul className="flex sm:space-x-5 space-x-0 sm:flex-row flex-col space-y-1 sm:space-y-0">
              <li className="border rounded-full shadow-sm hover:shadow-md">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/athifamuf/"
                  rel="noopener noreferrer"
                >
                  <div className="flex md:text-base text-sm items-center">
                    <CiInstagram className="text-4xl p-1 bg-dusty-rose text-white rounded-full" />
                    <div className="mx-4">athifamuf</div>
                  </div>
                </Link>
              </li>
              <li className="border rounded-full shadow-sm hover:shadow-md">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/athifamuf/"
                  rel="noopener noreferrer"
                >
                  <div className="flex md:text-base text-sm items-center">
                    <CiLinkedin className="text-4xl p-1 bg-dusty-rose text-white rounded-full" />
                    <div className="mx-4">Athifah Muflihah</div>
                  </div>
                </Link>
              </li>
              <li className="border rounded-full shadow-sm hover:shadow-md">
                <Link
                  target="_blank"
                  href="https://github.com/athmuf"
                  rel="noopener noreferrer"
                >
                  <div className="flex md:text-base text-sm items-center">
                    <PiGithubLogoLight className="text-4xl p-1 bg-dusty-rose text-white rounded-full" />
                    <div className="mx-4">athmuf</div>
                  </div>
                </Link>
              </li>
              <li className="border rounded-full shadow-sm hover:shadow-md">
                <Link
                  target="_blank"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxjbZlbsxCpltxHJnHHLmPstDvfWJVQMBJWBdwFVWCRFmZmmNsnwZWctsqzqzLRwvkMnNv"
                  rel="noopener noreferrer"
                >
                  <div className="flex md:text-base text-sm items-center">
                    <VscMention className="text-4xl p-1 bg-dusty-rose text-white rounded-full" />
                    <div className="mx-4">muflihah.athifah@gmail.com</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
