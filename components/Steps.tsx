import React from "react";

import Image from "next/image";

type StepsProps = {
  title: string;
  icon: any;
  info: string;
  bgColor: string;
};
export default function Steps({ title, info, bgColor, icon }: StepsProps) {
  return (
    <div
      key={title}
      className="w-[200px] min-h-[200px] bg-silver flex flex-col items-center justify-center rounded-lg shadow-xl relative"
    >
      <div
        className={`w-14 h-14 ${bgColor} absolute right-[-10px] top-[-10px] rounded-bl-full`}
      >
        <span className="absolute right-2 top-2 font-extrabold text-white text-xl">
          {title}
        </span>
      </div>
      <div className="w-20 h-20 bg-white rounded-full flex-center p-2">
        <Image src={icon} alt={info} width={50} height={50} />
      </div>
      <p className="text-xl text-black font-bold mt-4 w-[90%] text-center">
        {info}
      </p>
    </div>
  );
}
