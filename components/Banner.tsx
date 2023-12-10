import React from "react";
import { firstaid } from "@/assets/images";
import Image from "next/image";

type BannerProps = {
  title: string;
};

export default function Banner({ title }: BannerProps) {
  return (
    <div className="w-full h-[250px] flex-center relative">
      <Image
        src={firstaid}
        alt="firstaid"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <h1
        className="text-center text-2xl font-bold z-50
      "
      >
        {title}
      </h1>
    </div>
  );
}
