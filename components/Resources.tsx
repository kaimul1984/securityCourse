import React from "react";
import { book, brochure, faq } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export default function Resources() {
  return (
    <div className="lg:flex-[.30] w-full max-h-[400px] bg-white shadow-2xl">
      <h1 className="bg-midnight text-3xl font-bold text-white text-center py-2">
        Our Resources
      </h1>
      <ul className="flex flex-col gap-4 mt-8 ml-4 ">
        <li className="flex items-center gap-4 ">
          <span>
            <Image src={book} alt="" width={50} height={50} />
          </span>
          <Link
            href="/"
            className="text-xl font-bold hover:text-warning hover:underline transition-all duration-75"
          >
            student handbook
          </Link>
        </li>
        <li className="flex items-center gap-4 ">
          <span>
            <Image src={brochure} alt="" width={50} height={50} />
          </span>
          <Link
            href="/"
            className="text-xl font-bold hover:text-warning hover:underline transition-all duration-75"
          >
            course information brochure
          </Link>
        </li>
        <li className="flex items-center gap-4">
          <span>
            <Image src={faq} alt="" width={50} height={50} />
          </span>
          <Link
            href="/"
            className="text-xl font-bold  hover:text-warning hover:underline transition-all duration-75"
          >
            frequently asked questions
          </Link>
        </li>
      </ul>
    </div>
  );
}
