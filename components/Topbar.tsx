import Image from "next/image";
import Link from "next/link";
import { email, mobile, phone } from "@/assets/icons";
import Social from "./Social";

export default function Topbar() {
  return (
    <div className="w-full h-14 bg-dark flex-center">
      <div className="container flex-between">
        <div className="flex-center gap-12">
          <div className="flex items-center gap-2 text-white">
            <Image src={phone} alt="menuBar" width={30} height={30} />
            <Link href="tel"> (02) 547621</Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Image src={mobile} alt="menuBar" width={30} height={30} />
            <Link href="tel">+614598347</Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Image src={email} alt="menuBar" width={30} height={30} />
            <Link href="email"> example@gmail.com</Link>
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
}
