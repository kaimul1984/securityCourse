import React from "react";
import { contact } from "@/assets/images";
import Image, { StaticImageData } from "next/image";

type BannerProps = {
  title: string;
  image?: string | StaticImageData;
};

export default function Banner({ title, image }: BannerProps) {
  return (
    <div className="w-full h-[300px] flex-center relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:opacity-50">
      <Image
        src={image}
        alt="firstaid"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <h1
        className="text-center text-white text-5xl font-bold z-50
      "
      >
        {title}
      </h1>
    </div>
  );
}
