import Image from "next/image";
import logo from "@/assets/images/logo.jpg";
import { Logo, Social } from ".";
import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";
import { email, mobile, phone } from "@/assets/icons";

export default function Footer() {
  return (
    <div className="w-full min-h-[300px] flex-center bg-midnight">
      <div className="container flex  text-white">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="logo" width={80} height={80} />
            <span className="text-3xl font-bold">WSVTA</span>
          </div>
          <p>
            <strong>Adrees:</strong> <br /> 264 george street, <br />
            Sydney, NSW 2000
          </p>
          <span>
            <div className="flex items-center gap-2 text-white">
              <Image src={phone} alt="menuBar" width={30} height={30} />
              <Link href="tel"> (02) 547621</Link>
            </div>
            <br />
            <div className="flex items-center gap-2 text-white">
              <Image src={mobile} alt="menuBar" width={30} height={30} />
              <Link href="tel">+614598347</Link>
            </div>
          </span>
        </div>
        <div className="flex-1 ">
          <h3 className="font-bold text-xl mb-10 border-b-[1px]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            <Link href="">Home</Link>
            <Link href="">About Us</Link>
            <Link href="">Upcoming Courses</Link>
            <Link href="">Blogs</Link>
            <Link href="">Contact us</Link>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-10 border-b-[1px] ">Courses</h3>
          <ul className="flex flex-col gap-2">
            <Link href="">Security training course</Link>
            <Link href="">First Aid course</Link>
            <Link href="">CPR course</Link>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-10 border-b-[1px]">
            Information
          </h3>
          <p className="mb-4">
            Email us: <br />
            <span className="flex items-center gap-2 text-white mt-4">
              <Image src={email} alt="menuBar" width={30} height={30} />
              <Link href="email"> example@gmail.com</Link>
            </span>
          </p>
          <p className="mb-4">
            Follow Us: <br />
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
}
