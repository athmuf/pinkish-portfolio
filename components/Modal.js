"use client";
import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Modal({ children, showModal, setShowModal }) {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
  return (
    showModal && (
      <div className="fixed inset-0 bg-black h-max-screen w-max-screen bg-opacity-40 z-50 md:px-40 py-3 sm:py-20 sm:px-20 p-3 overflow-y-auto">
        <div className="relative bg-white rounded-3xl p-3 md:p-10">
          <div className="absolute right-3 md:right-10">
            <IoCloseOutline
              onClick={setShowModal}
              className="md:text-3xl text-xl cursor-pointer hover:scale-105"
            />
          </div>
          <div className="py-8">{children}</div>
        </div>
      </div>
    )
  );
}
