"use client";
import Modal from "./Modal";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { IoOpenOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { useState } from "react";

export default function CardProject({
  img,
  desc,
  title,
  github,
  gallery,
  caption,
  features,
  deployment,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(!showModal)}
        className="border w-full rounded-xl shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 bg-white"
      >
        <div className="sm:h-[300px] h-[200px] relative">
          <Image
            src={img}
            alt="Project"
            fill
            objectFit="cover"
            className="rounded-2xl sm:pt-8 pt-3 sm:px-8 px-3 sm:pb-4 pb-3"
          ></Image>
        </div>
        <div className="py-4 sm:pt-4 pt-0 sm:px-8 px-3 sm:pb-8 pb-3">
          <div className="relative h-full content-between">
            <div>
              <h2 className="font-bold sm:text-2xl text-lg text-gray-900 pb-2">
                {title}
              </h2>
              <p className="md:text-base text-sm text-gray-500">{desc}</p>
            </div>
            <div className="right-0 pt-2 flex justify-end">
              <div className="flex items-center hover:underline text-green-600 md:text-lg text-base cursor-pointer">
                Learn more the project{" "}
                <span className="pl-3">
                  <IoOpenOutline />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={() => setShowModal(!showModal)}
      >
        <div className="space-y-4 text-gray-900">
          <h2 className="font-bold text-2xl">{title}</h2>
          <div className="flex md:flex-row flex-col space-x-0 md:space-x-10">
            <div className="w-full md:w-1/2">
              <div className="sm:h-[300px] h-[200px] relative">
                <Image
                  src={img}
                  alt={title}
                  fill
                  objectFit="cover"
                  className="rounded-xl shadow-sm"
                ></Image>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4 md:space-y-8">
              <div className="text-sm md:text-base pt-4 md:pt-0">{caption}</div>
              {(deployment || github) && (
                <div className="flex space-x-2">
                  {deployment && (
                    <Link
                      href={deployment}
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      <CustomButton
                        text="Live demo"
                        icons={<IoLogInOutline />}
                      />
                    </Link>
                  )}
                  {github && (
                    <Link
                      href={github}
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      <CustomButton
                        text="View code"
                        icons={<IoCodeSlashOutline />}
                      />
                    </Link>
                  )}
                </div>
              )}

              {features && (
                <div className="text-sm md:text-base">
                  <span className="font-semibold pb-1 md:pb-2 text-lg">
                    Features:
                  </span>
                  <ul className="space-y-1 md:space-y-2">
                    {features.map((feature) => (
                      <li key={feature.id} className="flex items-center">
                        <div className="flex items-center justify-center bg-rose-quartz w-5 h-5 md:w-8 md:h-8 rounded-full mr-2">
                          {feature.id}
                        </div>
                        <div className="w-5/6">{feature.details}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {gallery && (
                <div className="text-sm md:text-base">
                  <span className="font-semibold pb-1 md:pb-2 text-lg">
                    Gallery
                  </span>
                  <ul className="flex overflow-x-auto space-x-3">
                    {gallery.map((picture) => (
                      <li key={picture.id} className="">
                        <div className="relative h-96 w-96 md:my-2 my-1">
                          <Image
                            src={picture.url}
                            alt={picture.id}
                            fill
                            objectFit="cover"
                            className="rounded-xl shadow-sm"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
