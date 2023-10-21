import Image from "next/image";
import logo from "../assets/images/logo.jpg";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={logo}
        alt="logo"
        width={80}
        height={80}
        className="w-[3rem] lg:w-16  "
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-black text-[.7rem] xl:text-xl lg:text-[.8em] border-b-2 tracking-[.3em] italic">
          WESTERN SYDNEY
        </h1>
        <p className=" text-[.56rem] xl:text-base lg:text-[.6rem] font-bold italic">
          VOCATIONAL TRAINING ACADEMY
        </p>
      </div>
    </div>
  );
}
