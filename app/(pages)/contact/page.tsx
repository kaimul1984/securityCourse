import { email, mobile, phone } from "@/assets/icons";
import { contact } from "@/assets/images";
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
      <Banner title="contact us" image={contact} />
      {/* container */}
      <div className="container min-h-[600px] flex flex-col items-center mb-[100px] p-8">
        <h1 className="w-full text-3xl lg:text-4xl border-b-2 pb-4 ">
          Get The Best{" "}
          <span className="font-bold text-warning">
            Security training Course{" "}
          </span>
          and <span className="font-bold text-success">first aid course</span>{" "}
          at western sydney vocational tranning academy across sydney.
        </h1>
        <p className="pt-4 pb-12">
          Why? Because we are at the forefront among education service providers
          and put our clients and students first. We enjoy seeing outcomes and
          making positive change in peoples lives. We also welcome the challenge
          in providing a workforce training solution for industry and business
          secta. Study with us to open doors to employment and create a pathway
          to further education. Interested in studying at western sydney
          vocational tranning academy? Check out the courses area to find out
          what we can offer.
        </p>
        {/* wrapper */}
        <div className=" w-full flex flex-wrap items-center justify-between gap-8">
          {/* left div */}
          <div className="flex-1 flex  flex-col gap-12 ml-8">
            <div className="w-[90%] min-h-[100px] bg-midnight rounded-tr-full">
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
            <div className="w-[90%] min-h-[100px] bg-midnight rounded-tr-full">
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
                  <Link href="email" className="w-max lowercase">
                    info@wsvta.com
                  </Link>
                </div>
                <br />
                <div className="flex items-center gap-2 text-white">
                  <Image src={email} alt="menuBar" width={30} height={30} />
                  <Link href="email" className="w-max lowercase">
                    example@wsvta.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[90%] min-h-[100px] bg-midnight rounded-tr-full">
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
                  Bourke st, Richmond, NSW 2753
                </p>
              </div>
            </div>
          </div>
          {/* left div end */}
          {/* right div */}
          <ContactForm />
          {/* right div end */}
        </div>
        {/* wrapper end */}
        {/* map start */}
        <div className="w-full min-h-[300px] mt-20">
          <h2 className="text-3xl font-bold mb-4 ">our location in map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425300.3265963445!2d150.1733087734375!3d-33.61415629999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d7d585b232f53%3A0x3724f52c08d16cf7!2sWestern%20Sydney%20University%2C%20Hawkesbury%20Campus!5e0!3m2!1sen!2sau!4v1702735052015!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full min-h-[400px] rounded-lg"
          ></iframe>
        </div>
        {/* map end */}
      </div>
      {/* container end */}
      <CallToAction />
    </div>
  );
}
