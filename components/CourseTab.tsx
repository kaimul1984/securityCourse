import React from "react";
import { FaChevronDown } from "react-icons/fa6";

type TabProps = {
  heading: string;
  details1: string;
  details2: string;
  tag: string;
};

export default function CourseTab({
  heading,
  details1,
  details2,
  tag,
}: TabProps) {
  return (
    <>
      {tag ? (
        <details open className="mb-4">
          <summary className="group bg-midnight flex items-center justify-between p-2 cursor-pointer">
            <h1 className="text-white font-bold text-2xl">{heading}</h1>
            <span>
              <FaChevronDown className="fill-white font-bold text-2xl group-hover:rotate-180 group-hover:fill-danger transition-all duration-300" />
            </span>
          </summary>
          <div className="bg-light text-black">
            <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
              {details1}
            </p>
            <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
              {details2}
            </p>
          </div>
        </details>
      ) : (
        <details className="mb-4">
          <summary className="group bg-midnight flex items-center justify-between p-2 cursor-pointer">
            <h1 className="text-white font-bold text-2xl">{heading}</h1>
            <span>
              <FaChevronDown className="fill-white font-bold text-2xl group-hover:rotate-180 group-hover:fill-danger transition-all duration-300" />
            </span>
          </summary>
          <div className="bg-light text-black">
            <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
              {details1}
            </p>
            <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
              {details2}
            </p>
          </div>
        </details>
      )}
    </>
  );
}
