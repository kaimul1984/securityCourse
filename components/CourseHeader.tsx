import { img6 } from "@/assets/images";
import Image from "next/image";
import React from "react";

type HeaderProps = {
  heading: string;
  span: string;
  image: any;
};

export default function CourseHeader({ heading, span, image }: HeaderProps) {
  return (
    <>
      <h1 className="text-5xl font-black text-center mb-6 text-midnight">
        {heading} <span className="text-warning">{span}</span>
      </h1>
      <h2 className="text-xl font-bold text-center">
        Get Quality Education with a hands-on learning experience to help you
        succeed.
      </h2>
      <div className="w-full h-1 bg-midnight mt-4" />

      <div className="w-full max-h-[350px] mt-8">
        <Image src={image} alt="securitycourse" className="w-full h-full " />
      </div>
      <div className="w-full h-1 bg-midnight mt-8" />
    </>
  );
}
