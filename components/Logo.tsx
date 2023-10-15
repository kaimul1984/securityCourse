import Image from "next/image";
import logo from "../assets/images/logo.jpg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={logo} alt="logo" width={80} height={80} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-black text-xl border-b-2 tracking-[.3em] italic">
          WESTERN SYDNEY
        </h1>
        <p className="text-base font-bold italic">
          VOCATIONAL TRAINING ACADEMY
        </p>
      </div>
    </div>
  );
}
