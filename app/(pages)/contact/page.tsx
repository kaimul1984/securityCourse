import { email, mobile, phone } from "@/assets/icons";
import { Banner, CallToAction } from "@/components";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Banner title="contact us" />
      <div className="container min-h-[600px] flex flex-col items-center mb-[100px] p-8">
        <h1 className="w-full text-5xl border-b-4">get in touch</h1>
        <p className="pt-4 pb-8">
          Why? Because we are at the forefront among education service providers
          and put our clients and students first. We enjoy seeing outcomes and
          making positive change in peoples lives. We also welcome the challenge
          in providing a workforce training solution for industry and business
          secta. Study with us to open doors to employment and create a pathway
          to further education. Interested in studying at Star Training? Check
          out the courses area to find out what we can offer.
        </p>
        <div className=" w-full flex flex-wrap items-center justify-between">
          <div className="flex-1 flex  flex-col gap-12 ml-8">
            <div className="w-[80%] min-h-[100px] bg-midnight rounded-tr-full">
              <div className="relative bg-bermuda rounded-tr-full">
                <div className="w-[70px] h-[70px] flex-center bg-bermuda rounded-full absolute left-[-25px] bottom-0">
                  <FaPhoneAlt className="fill-black font-bold text-2xl" />
                </div>
                <h3 className=" text-black text-2xl font-bold p-2 ml-[50px]">
                  call us
                </h3>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-white">
                  <Image src={phone} alt="menuBar" width={30} height={30} />
                  <Link href="tel" className="hover:underline text-xl">
                    {" "}
                    (02) 547621
                  </Link>
                </div>
                <br />
                <div className="flex items-center gap-2 text-white">
                  <Image src={mobile} alt="menuBar" width={30} height={30} />
                  <Link href="tel" className="hover:underline text-xl">
                    +614598347
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[80%] min-h-[100px] bg-midnight rounded-tr-full">
              <div className="relative bg-bermuda rounded-tr-full">
                <div className="w-[70px] h-[70px] flex-center bg-bermuda rounded-full absolute left-[-25px] bottom-0">
                  <FaEnvelope className="fill-black font-bold text-2xl" />
                </div>
                <h3 className=" text-black text-2xl font-bold p-2 ml-[50px]">
                  Email us
                </h3>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-white">
                  <Image src={email} alt="menuBar" width={30} height={30} />
                  <Link href="email" className="w-max">
                    info@wsvta.com
                  </Link>
                </div>
                <br />
                <div className="flex items-center gap-2 text-white">
                  <Image src={email} alt="menuBar" width={30} height={30} />
                  <Link href="email" className="w-max">
                    example@wsvta.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[80%] min-h-[100px] bg-midnight rounded-tr-full">
              <div className="relative bg-bermuda rounded-tr-full">
                <div className="w-[70px] h-[70px] flex-center bg-bermuda rounded-full absolute left-[-25px] bottom-0">
                  <FaLocationDot className="fill-black font-bold text-2xl" />
                </div>
                <h3 className=" text-black text-2xl font-bold p-2 ml-[50px]">
                  our location
                </h3>
              </div>
              <div className="p-4">
                <p className="text-white">
                  <strong>Addrees: western sydney location</strong> <br />{" "}
                  building P23, Western sydney university <br />
                  Bouke st, Richmond, NSW 2753
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <CallToAction />
    </div>
  );
}
