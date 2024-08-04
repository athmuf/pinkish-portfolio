"use client";
import { nav } from "@/constant";
import { Link as LinkScroll } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="sticky md:top-10 top-3 flex justify-center z-30">
      <ul className="flex border bg-white border-coral rounded-full w-fit p-2 space-x-3 shadow-md">
        {nav.map((navItem) => (
          <li key={navItem.label}>
            <LinkScroll
              activeClass="active"
              to={navItem.label}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button className="flex h-10 w-10 hover:w-fit hover:px-5 transition-all duration-300 items-center justify-start hover:space-x-2 space-x-4 pl-3 rounded-full bg-white text-coral border-gray-700 overflow-hidden cursor-pointer hover:bg-gray-100 focus:bg-cream">
                <div>
                  <navItem.Icons className="font-bold text-xl" />
                </div>
                <div>{navItem.label}</div>
              </button>
            </LinkScroll>
          </li>
        ))}
      </ul>
    </nav>
  );
}
