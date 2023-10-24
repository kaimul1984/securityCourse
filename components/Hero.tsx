"use client";
import React, { useEffect, useState } from "react";
import security from "@/assets/images/security.jpeg";
import aid from "@/assets/images/firstaid.jpeg";
import logo from "@/assets/images/LogoDesktop.jpg";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";

const items = [
  {
    titles: ["CPP20218 CERTIFICATE II", "IN SECURITY OPERATIONS"],
    img: security,
  },
  {
    titles: ["FIRST AID COURSE", "HLTAID011 PROVIDE FIRST AID"],
    img: aid,
  },
  {
    titles: [
      "CPR COURSE",
      "HLTAID009 PROVIDE",
      "Cardiopulmonary Resuscitation",
    ],
    img: logo,
  },
];

export default function Hero() {
  const [people, setPeople] = useState(items);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    console.log(people);
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="w-full max-w-[1920px] h-[400px] lg:h-[550px] flex-center mb-20">
      <div className="w-full h-full flex overflow-hidden relative">
        {people.map((item, personIndex) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div
              key={index}
              className={`${position} w-screen h-full flex-center bg-tahiti absolute top-0  left-0 translate-x-0 opacity-100 transition-transform duration-300`}
            >
              <Image
                src={item.img}
                alt="slideImg"
                className="absolute w-full h-full "
              />
              <span className="before:absolute before:w-full before:h-full before:left-0 before:top-0  before:bg-dark before:opacity-50"></span>
              <div className="z-50  flex-center flex-col ">
                {item.titles.map((title) => (
                  <h1
                    key={title}
                    className=" uppercase z-50 text-center text-white text-2xl lg:text-5xl font-extrabold mb-5 "
                  >
                    {title}
                  </h1>
                ))}
                <Link
                  href="#"
                  className=" bg-white py-4 px-6 z-50 text-blac text-2xl rounded-lg mt-6 "
                >
                  Enrol Now
                </Link>
              </div>
            </div>
          );
        })}

        <div className="absolute z-50 top-1/2 translate-y-[-50%] flex w-full ">
          <button
            className="w-10 h-10 lg:w-14 lg:h-14 rounded-lg ml-2  lg:ml-5 flex-center z-10 bg-dark opacity-70 cursor-pointer "
            onClick={() => setIndex(index - 1)}
          >
            <BsChevronLeft className="text-4xl text-white" />
          </button>
          <button
            className=" absolute right-0 w-10 h-10 lg:w-14 lg:h-14 rounded-lg mr-2 lg:mr-5 flex-center z-10 bg-dark opacity-70 cursor-pointer"
            onClick={() => setIndex(index + 1)}
          >
            <BsChevronRight className="text-4xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
