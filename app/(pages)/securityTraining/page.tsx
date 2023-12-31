"use client";
import {
  book,
  brochure,
  faq,
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
  step7,
  step8,
} from "@/assets/icons";
import { img6, security2, securityCourse } from "@/assets/images";
import { Banner } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const steps = [
  {
    title: "01",
    icon: step1,
    info: "Check your Eligibility",
    bgColor: "bg-warning",
  },
  {
    title: "02",
    icon: step2,
    info: "Enrol Online",
    bgColor: "bg-primary",
  },
  {
    title: "03",
    icon: step3,
    info: "Visit us for a Pre-Enrolment Test (90 minutes)",
    bgColor: "bg-tahiti",
  },
  {
    title: "04",
    icon: step4,
    info: "Complete First Aid Course",
    bgColor: "bg-danger",
  },
  {
    title: "05",
    icon: step5,
    info: "Complete Online Self-Studies",
    bgColor: "bg-success",
  },
  {
    title: "06",
    icon: step6,
    info: "Attend 10 days of in-class Training",
    bgColor: "bg-ring",
  },
  {
    title: "07",
    icon: step7,
    info: "Receive your Certificate",
    bgColor: "bg-purple",
  },
  {
    title: "08",
    icon: step8,
    info: "Apply for your Security Licence",
    bgColor: "bg-metal",
  },
];

export default function SecurityTraning() {
  // const [selected, setSelected] = useState(null);

  // const toggle = (index: any) => {
  //   if (selected === index) {
  //     return setSelected(null);
  //   }
  //   setSelected(index);
  // };

  return (
    <section className="w-full min-h-[600px]">
      <Banner title="Security Training" image={img6} />
      <div className="container mx-auto min-h-[600px] flex flex-wrap gap-6 my-[100px]">
        {/* left div */}
        <div className="lg:flex-[.70] w-full flex items-center flex-col justify-center">
          <h1 className="text-5xl font-black text-center mb-4 text-midnight">
            CPP20218 CERTIFICATE II IN{" "}
            <span className="text-warning">SECURITY OPERATIONS</span>
          </h1>
          <h2 className="text-2xl font-bold text-center">
            Get Quality Education with a hands-on learning experience to help
            you succeed.
          </h2>
          <div className="w-full h-1 bg-midnight mt-4" />

          <div className="w-full max-h-[350px] mt-8">
            <Image
              src={img6}
              alt="securitycourse"
              className="w-full max-h-[350px] object-cover"
            />
          </div>
          <div className="w-full h-1 bg-midnight mt-8" />
          {/* steps */}
          <div className="w-full min-h-[300px]  mt-16 bg-white shadow-2xl">
            <h1 className="bg-midnight text-2xl text-white font-bold text-center py-2">
              Following steps need to follow to achieve security licence
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="w-[200px] min-h-[200px] bg-silver flex flex-col items-center justify-center rounded-lg shadow-xl relative"
                >
                  <div
                    className={`w-14 h-14 ${step.bgColor} absolute right-[-10px] top-[-10px] rounded-bl-full`}
                  >
                    <span className="absolute right-2 top-2 font-extrabold text-white text-xl">
                      {step.title}
                    </span>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-full flex-center p-2">
                    <Image
                      src={step.icon}
                      alt={step.info}
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className="text-xl text-black font-bold mt-4 w-[90%] text-center">
                    {step.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* steps end */}
          {/* tab start */}
          <div className="w-full my-[100px] bg-silver p-2">
            <div className="mb-4">
              {/* <div
                onClick={() => toggle(index)}
                className="bg-midnight flex items-center justify-between p-2"
              >
                <h1 className="text-white font-bold text-2xl">
                  course overview
                </h1>
                <span>
                  <FaChevronDown className="fill-white font-bold text-2xl" />
                </span>
              </div>
              <div
                className={`${
                  open ? "h-max" : "h-0"
                } transition-[height] duration-300`}
              >
                <p
                  className={`${
                    open ? "opacity-100" : "opacity-0"
                  } leading-7 p-4 text-[1.2rem] transition-opacity duration-300`}
                >
                  Our NSW Security Licence Training Course covers the
                  requirements of Nationally recognised qualification CPP20218
                  Certificate II in security operations and the compulsory
                  requirement for obtaining an NSW Class 1A Security license
                  (previously for NSW Class 1A & 1C Security Licence)*. Choosing
                  the right training provider ensures that you learn the
                  necessary skills and knowledge to help you in your future
                  workplace. <br /> Vigil Training College has helped more than
                  10 thousand students achieve success. Choosing Vigil Training
                  College will empower you with the necessary knowledge and
                  skills to succeed in your career. We have more than seven
                  years of experience. Our staff are highly professional and
                  expert in the industry. We work with all our students and
                  provide the necessary resources and knowledge to apply for
                  their NSW security licence.
                </p>
              </div> */}
              {/* course overview */}
              <details open className="mb-4">
                <summary className="group bg-midnight flex items-center justify-between p-2 cursor-pointer">
                  <h1 className="text-white font-bold text-2xl">
                    course overview
                  </h1>
                  <span>
                    <FaChevronDown className="fill-white font-bold text-2xl group-hover:rotate-180 group-hover:fill-danger transition-all duration-300" />
                  </span>
                </summary>
                <div className="bg-light text-black">
                  <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
                    Our <strong>NSW Security Licence Training Course</strong>{" "}
                    covers the requirements of Nationally recognised
                    qualification{" "}
                    <strong>
                      CPP20218 Certificate II in security operations
                    </strong>{" "}
                    and the compulsory requirement for obtaining an{" "}
                    <strong>
                      NSW Class 1A Security license (previously for NSW Class 1A
                      & 1C Security Licence)*
                    </strong>
                    . Choosing the right training provider ensures that you
                    learn the necessary skills and knowledge to help you in your
                    future workplace.
                  </p>
                  <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
                    <strong>western sydney vocational training college</strong>{" "}
                    has helped more than 10 thousand students achieve success.
                    Choosing WSVTA will empower you with the necessary knowledge
                    and skills to succeed in your career. We have more than
                    seven years of experience. Our staff are highly professional
                    and expert in the industry. We work with all our students
                    and provide the necessary resources and knowledge to apply
                    for their NSW security licence.
                  </p>
                </div>
              </details>
              {/* end */}
              {/*  Course Duration and Delivery Method */}
              <details className="mb-4">
                <summary className="bg-midnight flex items-center justify-between p-2 cursor-pointer">
                  <h1 className="text-white font-bold text-2xl">
                    Course Duration and Delivery Method
                  </h1>
                  <span>
                    <FaChevronDown className="fill-white font-bold text-2xl" />
                  </span>
                </summary>
                <div className="bg-light text-black">
                  <p className="leading-7 p-4 text-[1.1rem]">
                    This course is delivered as a blended program, which
                    requires 10 days of classroom-based study and online
                    self-study (completed prior to classroom based study).
                  </p>
                  <h2 className="text-2xl font-bold mx-4 mb-2">
                    Classroom Based Study
                  </h2>
                  <p className="leading-7 mx-4 text-[1.1rem]">
                    You have the option to complete Classroom Based Study either
                    on the:
                  </p>
                  <ul className="ml-16 my-3 list-disc flex flex-col gap-2">
                    <li>
                      Weekdays: Monday to Friday 8am to 5pm for 2 weeks
                      (including 1-hour break daily)
                    </li>
                    <li>
                      Weekends: Saturday & Sunday 8am to 5pm for 5 weeks
                      (including 1-hour break daily)
                    </li>
                    <li>
                      Evenings: Monday to Friday (5:30pm to 9:30pm) + Sunday
                      (8am to 5pm) for 3 weeks (1-hour break daily)
                    </li>
                  </ul>
                  <p className="leading-7 mx-4 text-[1.1rem]">
                    Classroom study consists of 80.0 hours and is conducted in a
                    supervised, face to face environment over ten (10) days.
                  </p>
                  <h2 className="text-2xl font-bold mx-4 m-2">
                    Online Self-study
                  </h2>
                  <p className="leading-7 mx-4 text-[1.1rem]">
                    The self-study consists of 45.0 hours of learning, and it
                    aims to provide you with a better understanding of the
                    course. On completion of your enrolment, you will be
                    provided access to your self-study through our Online
                    Learning Management System.
                  </p>
                  <p className="leading-7 m-4 text-[1.1rem]">
                    <strong>N.B:</strong> You must complete your self-study
                    prior to commencement of the classroom-based sessions.
                  </p>
                </div>
              </details>
              {/* end */}
              {/* NSW Security Course Pre-Requisites */}
              <details className="mb-4">
                <summary className="bg-midnight flex items-center justify-between p-2 cursor-pointer">
                  <h1 className="text-white font-bold text-2xl">
                    NSW Security Course Pre-Requisites
                  </h1>
                  <span>
                    <FaChevronDown className="fill-white font-bold text-2xl" />
                  </span>
                </summary>
                <div className="bg-light text-black">
                  <p className="leading-7 p-4 text-[1.2rem] transition-opacity duration-300">
                    There are <strong>no formal pre-requisites</strong> for
                    Certificate II in Security Operations. However, students
                    enrolling in this course must meet the following
                    requirements:
                  </p>
                  <ol className="ml-16 my-2 list-disc flex flex-col gap-2">
                    <li>Over 18 years of age; and</li>
                    <li>
                      Complete the SLED Mandated LLN Assessment (See below); and
                    </li>
                    <li>
                      Have a current First Aid Certificate (see below); and
                    </li>
                    <li>
                      Have the resources required in the below list and
                      understood the "Schedule of Fees".
                    </li>
                  </ol>
                  <h2 className="text-2xl font-extrabold m-4">
                    SLED Mandated Language, Literacy and Numeracy (LLN)
                    Assessment
                  </h2>
                  <p className="leading-7 px-4 text-[1.2rem] transition-opacity duration-300">
                    You are required to undertake the SLED Mandated
                    Pre-enrolment Assessment/Language, Literacy and Numeracy
                    (LLN) test before enrolment in the course.
                  </p>
                  <p className="leading-7 px-4  my-4 text-[1.2rem] transition-opacity duration-300">
                    The Pre-enrolment Assessment/LLN test is conducted in a
                    classroom{" "}
                    <strong>
                      daily at our Head Office at 10 am, Monday – Friday
                    </strong>
                    . There is no need to make an appointment, simply attend the
                    test that starts at 10 am and bring your 100 Points of ID.
                    The duration of the test is 90 minutes.
                  </p>
                  <p className="leading-7 px-4 mb-4 text-[1.2rem] transition-opacity duration-300">
                    There is <strong>no cost</strong> for undertaking this
                    assessment
                  </p>
                  <p className="leading-7 px-4 text-[1.2rem] transition-opacity duration-300">
                    If you fail to meet the minimum LLN skills required to
                    undertake this course, you will be referred to an external
                    provider to help with your LLN skills.
                  </p>
                  <h2 className="text-2xl font-extrabold m-4">
                    Current First Aid Requirement
                  </h2>
                  <p className="leading-7 px-4 mb-4 text-[1.2rem] transition-opacity duration-300">
                    You must have a current First Aid Certificate before the
                    commencement of your Security Course.
                  </p>
                  <p className="leading-7 px-4 my-4 text-[1.2rem] transition-opacity duration-300">
                    The{" "}
                    <strong>
                      First Aid Course (HLTAID011 Provide First Aid)
                    </strong>{" "}
                    is offered by WSVTA and students can enrol into this course
                    for a fee. The unit of competency HLTAID011 Provides First
                    Aid (First Aid) is a core unit of the qualification in
                    CPP20218 Certificate II in Security Operations.
                  </p>
                  <h2 className="text-2xl font-extrabold m-4">
                    Resources Required by Students
                  </h2>
                  <p className="leading-7 px-4 mb-4 text-[1.2rem] transition-opacity duration-300">
                    Students enrolling in this course must have the following
                    required resources (to complete their self-studies):
                  </p>
                  <ul className="ml-16 my-3 list-disc flex flex-col gap-2">
                    <li>
                      Computer/Laptop (ensure that you have sufficient computer
                      literacy)
                    </li>
                    <li>Reliable internet connection</li>
                    <li>Acrobat Reader (or similar software)</li>
                  </ul>
                  <p className="leading-7 px-4 mb-4 text-[1.2rem] transition-opacity duration-300">
                    If you do not have the above-required resources, call our
                    friendly Student Support Team before enrolling in this
                    course.
                  </p>
                </div>
              </details>
              {/* END */}
              {/* Course Requirements */}
              <details className="mb-4">
                <summary className="group bg-midnight flex items-center justify-between p-2 cursor-pointer">
                  <h1 className="text-white font-bold text-2xl">
                    Course Requirements
                  </h1>
                  <span>
                    <FaChevronDown className="fill-white font-bold text-2xl group-hover:rotate-180 group-hover:fill-danger transition-all duration-300" />
                  </span>
                </summary>
                <div className="bg-light text-black">
                  <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
                    The student must complete the learning and assessment hours
                    for each cluster to attain that cluster's competency.
                    Students must achieve competency in all four clusters.
                  </p>
                  <h2 className="text-2xl font-extrabold ml-4">
                    Attendance requirements
                  </h2>
                  <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
                    100% attendance is required. Any students absent from the
                    course will require missing time to be made up at a future
                    course, thereby delaying the issuance of qualification or
                    statement of attainment and procurement of a security
                    licence course.
                  </p>
                  <h2 className="text-2xl font-extrabold ml-4">
                    Dress code Requirements
                  </h2>
                  <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
                    You must dress in smart casual attire and maintain good
                    personal hygiene throughout the course.
                  </p>
                  <p className="leading-7 px-4 text-[1.1rem] transition-all duration-300 text-justify">
                    The course assesses your overall dress and presentation
                    while performing role-plays as per the security industry's
                    standards.
                  </p>
                </div>
              </details>
              {/*end  */}
              {/* Who Should Enrol for this Course? */}
              <details className="mb-4">
                <summary className="group bg-midnight flex items-center justify-between p-2 cursor-pointer">
                  <h1 className="text-white font-bold text-2xl">
                    Who Should Enrol for this Course?
                  </h1>
                  <span>
                    <FaChevronDown className="fill-white font-bold text-2xl group-hover:rotate-180 group-hover:fill-danger transition-all duration-300" />
                  </span>
                </summary>
                <div className="bg-light text-black">
                  <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
                    This course is for individuals who want to obtain an NSW
                    Security License. After the completion of this course, you
                    may be eligible* to apply for the NSW Security License Class
                    1A Unarmed Guards and Crowd Controller. From 1st of June
                    2023, NSW Security Licence classes have changed. Refer to
                    the{" "}
                    <a
                      href="https://www.facebook.com/SLEDNSW"
                      target="_blank"
                      className="text-primary font-bold"
                    >
                      SLED Facebook Page
                    </a>{" "}
                    for further details.
                  </p>
                  <h2 className="text-2xl font-extrabold ml-4">
                  *Eligibility for the NSW Security License:
                  </h2>
                  <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
                    100% attendance is required. Any students absent from the
                    course will require missing time to be made up at a future
                    course, thereby delaying the issuance of qualification or
                    statement of attainment and procurement of a security
                    licence course.
                  </p>
                  <h2 className="text-2xl font-extrabold ml-4">
                    Dress code Requirements
                  </h2>
                  <p className="leading-7 p-4 text-[1.1rem] transition-all duration-300 text-justify">
                    You must dress in smart casual attire and maintain good
                    personal hygiene throughout the course.
                  </p>
                  <p className="leading-7 px-4 text-[1.1rem] transition-all duration-300 text-justify">
                    The course assesses your overall dress and presentation
                    while performing role-plays as per the security industry's
                    standards.
                  </p>
                </div>
              </details>
              {/* end */}
            </div>
          </div>

          {/* tab  end */}
        </div>
        {/* left div end*/}
        {/* right div */}
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
        {/* right div end */}
      </div>
    </section>
  );
}
