import { logo2 } from "@/assets/images";
import Image from "next/image";
import React from "react";

export default function Promt() {
  return (
    <div className="w-full min-h-[250px] mb-20 bg-midnight flex items-center justify-center">
      <div className="w-[95%] max-w-[1420px] flex flex-wrap items-center justify-center lg:gap-28 gap-2">
        <div className="flex items-center gap-4 relative">
          <Image src={logo2} alt="logo" width={150} height={150} />
          <span className="shadow-2xl absolute left-[-18px] text-5xl font-extrabold text-midnight text-stroke ">
            WSVTA
          </span>
        </div>

        <h1 className="text-xl lg:text-5xl font-bold drop-shadow-2xl text-midnight text-stroke">
          skills for success , knowledge for life.
        </h1>
      </div>
    </div>
  );
}
