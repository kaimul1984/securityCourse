"use client";
import { book, brochure, faq } from "@/assets/icons";
import { img6, security2, securityCourse } from "@/assets/images";
import { Banner, CourseHeader, CourseTab, Steps } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CourseTemplate() {
  return (
    <section className="w-full min-h-[600px]">
      <Banner title="Security Training" image={img6} />
      <div className="container mx-auto min-h-[600px] flex flex-wrap gap-6 my-[100px]">
        {/* left div */}
        <div className="lg:flex-[.70] w-full flex items-center flex-col justify-center">
          <CourseHeader />
          <Steps />

          {/* tab start */}
          <div className="w-full my-[100px] bg-silver p-2">
            <div className="mb-4">
              {/* course overview */}
              <CourseTab />
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
