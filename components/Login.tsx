import Link from "next/link";
import React from "react";
import { PiStudent } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";

export default function Login() {
  return (
    <button className="relative group py-8">
      <span className="bg-midnight py-2 px-4 text-lg font-bold text-white rounded-md">
        Login
      </span>

      <ul className="flex flex-col bg-silver absolute right-0 top-[6rem]  z-50 scale-0 group-hover:scale-100 transition-all duration-300">
        <li className="w-max border-b-[.1px] py-4 px-2 flex items-center gap-4">
          <div className="w-[50px] h-[50px] bg-midnight flex items-center justify-center rounded-full">
            <PiStudent className="text-xl font-bold fill-white" />
          </div>
          <Link
            href=""
            className="w-full font-bold hover:text-warning hover:scale-110 hover:underline transition-all duration-300"
          >
            Student Portal login
          </Link>
        </li>
        <div className="w-max border-b-[.1px] py-4 px-2 text-center flex items-center gap-4">
          <div className="w-[50px] h-[50px] bg-midnight flex items-center justify-center rounded-full">
            <RiAdminLine className="text-xl font-bold fill-white" />
          </div>
          <Link
            href=""
            className="w-full font-bold hover:text-warning hover:scale-110 hover:underline transition-all duration-300"
          >
            Admin login
          </Link>
        </div>
      </ul>
    </button>
  );
}
