import Image from "next/image";
import React from "react";
import StaticImageData from "next/image";
import { Button } from ".";

type BlogsProp = {
  title: string;
  image: any;
  tag: string;
  date: string;
};

export default function Blog({ image, title, tag, date }: BlogsProp) {
  return (
    <div className="w-full max-w-[400px] min-h-[600px] bg-bermuda rounded-lg p-2 shadow-2xl">
      <div className="relative">
        <Image
          src={image}
          alt="blogimage"
          className="w-full h-full rounded-lg"
        />
        <span className=" flex items-center justify-center text-center font-bold w-16 h-16 rounded-lg bg-warning p-4 absolute left-5 bottom-[-25px]">
          {date}
        </span>
      </div>
      <div className="px-2 py-6">
        <div className=" flex items-center justify-between mt-4">
          <span className="bg-tahiti p-1 rounded-md text-white">by admin</span>
          <span className="bg-tahiti p-1 rounded-md text-white">{tag}</span>
        </div>
        <h1 className="my-4 text-2xl font-bold ">{title}</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius, vel
          autem molestiae itaque dolorum maxime consectetur optio quasi
          tenetur...
        </p>
        <Button title="continue Reading" path="/" />
      </div>
    </div>
  );
  text - white;
}
