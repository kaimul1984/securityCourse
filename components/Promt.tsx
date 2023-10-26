import { logo2 } from "@/assets/images";
import Image from "next/image";
import React from "react";

export default function Promt() {
  return (
    <div className="w-full min-h-[250px] mb-20 bg-midnight flex items-center justify-center">
      <div className="w-[95%] max-w-[1420px] flex items-center justify-center gap-28">
        <div className="flex items-center gap-4 relative">
          <Image src={logo2} alt="logo" width={150} height={150} />
          <span className="shadow-2xl absolute left-[-18px] text-5xl font-extrabold text-white leading-10">
            WSVTA
          </span>
        </div>

        <h1 className="text-5xl font-bold drop-shadow-2xl text-white">
          skills for success , knowledge for life.
        </h1>
      </div>
    </div>
  );
}
