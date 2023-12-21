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
import React from "react";
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
                <div className="w-[200px] min-h-[200px] bg-silver flex flex-col items-center justify-center rounded-lg shadow-xl relative">
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
          <div className="w-full my-[100px] bg-silver">
            <div>
              <div className="bg-midnight flex items-center justify-between p-2">
                <h1 className="text-white font-bold text-2xl">
                  course overview
                </h1>
                <span>
                  <FaChevronDown className="fill-white font-bold text-2xl" />
                </span>
              </div>
              <div className="h-max">
                <p className="leading-7 p-4 text-[1.2rem]">
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
              </div>
            </div>
            <div>
              <div className="bg-midnight flex items-center justify-between p-2">
                <h1 className="text-white font-bold text-2xl">
                  Course Duration and Delivery Method
                </h1>
                <span>
                  <FaChevronDown className="fill-white font-bold text-2xl" />
                </span>
              </div>
              <div className="h-max">
                <p className="leading-7 p-4 text-[1.2rem]">
                  This course is delivered as a blended program, which requires
                  10 days of classroom-based study and online self-study
                  (completed prior to classroom based study). Classroom Based
                  Study You have the option to complete Classroom Based Study
                  either on the: Weekdays: Monday to Friday 8am to 5pm for 2
                  weeks (including 1-hour break daily) OR Weekends: Saturday &
                  Sunday 8am to 5pm for 5 weeks (including 1-hour break daily)
                  OR Evenings: Monday to Friday (5:30pm to 9:30pm) + Sunday (8am
                  to 5pm) for 3 weeks (1-hour break daily) Classroom study
                  consists of 80.0 hours and is conducted in a supervised, face
                  to face environment over ten (10) days. See "Course Batches"
                  table below for upcoming course dates.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-midnight flex items-center justify-between p-2">
                <h1 className="text-white font-bold text-2xl">
                  NSW Security Course Pre-Requisites
                </h1>
                <span>
                  <FaChevronDown className="fill-white font-bold text-2xl" />
                </span>
              </div>
              <div className="h-max">
                <p className="leading-7 p-4 text-[1.2rem]">
                  There are no formal pre-requisites for Certificate II in
                  Security Operations. However, students enrolling in this
                  course must meet the following requirements: Over 18 years of
                  age; and Complete the SLED Mandated LLN Assessment (See
                  below); and Have a current First Aid Certificate (see below);
                  and Have the resources required in the below list and
                  understood the "Schedule of Fees". SLED Mandated Language,
                  Literacy and Numeracy (LLN) Assessment You are required to
                  undertake the SLED Mandated Pre-enrolment Assessment/Language,
                  Literacy and Numeracy (LLN) test before enrolment in the
                  course. The Pre-enrolment Assessment/LLN test is conducted in
                  a classroom daily at our Head Office at 10 am, Monday –
                  Friday. There is no need to make an appointment, simply attend
                  the test that starts at 10 am and bring your 100 Points of ID.
                  The duration of the test is 90 minutes. There is no cost for
                  undertaking this assessment If you fail to meet the minimum
                  LLN skills required to undertake this course, you will be
                  referred to an external provider to help with your LLN skills.
                  Current First Aid Requirement You must have a current First
                  Aid Certificate before the commencement of your Security
                  Course. The First Aid Course (HLTAID011 Provide First Aid) is
                  offered by Vigil Training College and students can enrol into
                  this course for a fee. The unit of competency HLTAID011
                  Provides First Aid (First Aid) is a core unit of the
                  qualification in CPP20218 Certificate II in Security
                  Operations. Resources Required by Students Students enrolling
                  in this course must have the following required resources (to
                  complete their self-studies): Computer/Laptop (ensure that you
                  have sufficient computer literacy) Reliable internet
                  connection Acrobat Reader (or similar software) If you do not
                  have the above-required resources, call our friendly Student
                  Support Team before enrolling in this course.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-midnight flex items-center justify-between p-2">
                <h1 className="text-white font-bold text-2xl">
                  Course Requirements
                </h1>
                <span>
                  <FaChevronDown className="fill-white font-bold text-2xl" />
                </span>
              </div>
              <div className="h-max">
                <p className="leading-7 p-4 text-[1.2rem]">
                  The student must complete the learning and assessment hours
                  for each cluster to attain that cluster's competency. Students
                  must achieve competency in all four clusters. Attendance
                  requirements 100% attendance is required. Any students absent
                  from the course will require missing time to be made up at a
                  future course, thereby delaying the issuance of qualification
                  or statement of attainment and procurement of a security
                  licence course. Dress code Requirements You must dress in
                  smart casual attire and maintain good personal hygiene
                  throughout the course. The course assesses your overall dress
                  and presentation while performing role-plays as per the
                  security industry's standards.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-midnight flex items-center justify-between p-2">
                <h1 className="text-white font-bold text-2xl">
                  Who Should Enrol for this Course?
                </h1>
                <span>
                  <FaChevronDown className="fill-white font-bold text-2xl" />
                </span>
              </div>
              <div className="h-max">
                <p className="leading-7 p-4 text-[1.2rem]">
                  This course is for individuals who want to obtain an NSW
                  Security License. After the completion of this course, you may
                  be eligible* to apply for the NSW Security License Class 1A
                  Unarmed Guards and Crowd Controller. From 1st of June 2023,
                  NSW Security Licence classes have changed. Refer to the SLED
                  Facebook Page for further details. *Eligibility for the NSW
                  Security License: be 18 years of age or over; be a fit and
                  proper person to hold the class of licence sought; have the
                  relevant competencies and required experience; have
                  successfully completed the required training (including
                  assessment); be competent to carry on the security activity to
                  which the proposed licence relates; be an Australian/New
                  Zealand citizen or permanent Australian resident or holds: a
                  visa sponsored by a Master security licence holder, or a visa
                  for a skilled occupation that corresponds to the activities
                  authorised by the proposed licence.; and obtain either an NSW
                  Driver's Licence or Photo Card or Customer Number from Roads &
                  Maritime Services (RMS) NOTE: Effective the 1st of June, the
                  NSW Security Licence Eligibility Requirements are changing.
                  The complete eligibility criteria for the NSW Security License
                  can be found on the NSW Police Website here. Once you receive
                  your Security License, you can obtain employment as a Security
                  Officer in the following roles: Static Guard Patrolling Crowd
                  Control Watch and Protect Property Loss Prevention Further
                  Qualification & Employment Pathways: This course also offers a
                  Qualification Pathway into the following courses: CPP31418
                  Certificate III in Close Protection Operations CPP31318
                  Certificate III in Security Operations The Certificate III
                  qualifications will allow you to obtain employment in the
                  following roles: Close Protection Operative Armed Guard
                  Bodyguard Cash in Transit (Unarmed)
                </p>
              </div>
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
