import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

export default function BackToHome() {
  return (
    <Link href="/" className="text-gray-900 w-fit flex items-center md:space-x-3 space-x-2 hover:text-coral transition-all duration-300 hover:-translate-x-2">
      <IoArrowBackOutline className="md:text-4xl text-2xl" />
      <div className="md:text-xl text-base">Back</div>
    </Link>
  );
}
