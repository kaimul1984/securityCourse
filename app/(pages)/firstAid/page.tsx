import {
  book,
  brochure,
  faq,
  step2,
  step5,
  step6,
  step7,
} from "@/assets/icons";
import { firstAid4, firstaid } from "@/assets/images";
import {
  Banner,
  CourseHeader,
  CourseTab,
  CourseTemplate,
  Resources,
  Steps,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const steps = [
  {
    title: "01",
    icon: step2,
    info: "Enrol Online",
    bgColor: "bg-primary",
  },

  {
    title: "02",
    icon: step5,
    info: "Complete 2-5 hours of online self-study",
    bgColor: "bg-success",
  },
  {
    title: "03",
    icon: step6,
    info: "Attend 4 hours of in-class Training",
    bgColor: "bg-ring",
  },
  {
    title: "04",
    icon: step7,
    info: "Receive your Certificate(same day)",
    bgColor: "bg-purple",
  },
];

const tabsInfo = [
  {
    heading: "course overview",
    tag: "open",
    details1:
      "This first aid course will provide you with the knowledge and skills to manage emergency first aid situations, including treating an unconscious casualty, performing CPR and controlling bleeding. HLTAID011 Provide First Aid is the standard course required for employment in many industries and job roles.",
    details2:
      "This course is mandatory for those working in security, childcare and education, aged care and disability and for roles including Workplace First Aiders and for Continuing Professional Development for Nursing.",
  },
  {
    heading: "course overview",
    details1:
      "This first aid course will provide you with the knowledge and skills to manage emergency first aid situations, including treating an unconscious casualty, performing CPR and controlling bleeding. HLTAID011 Provide First Aid is the standard course required for employment in many industries and job roles.",
    details2:
      "This course is mandatory for those working in security, childcare and education, aged care and disability and for roles including Workplace First Aiders and for Continuing Professional Development for Nursing.",
  },
  {
    heading: "course overview",
    details1:
      "This first aid course will provide you with the knowledge and skills to manage emergency first aid situations, including treating an unconscious casualty, performing CPR and controlling bleeding. HLTAID011 Provide First Aid is the standard course required for employment in many industries and job roles.",
    details2:
      "This course is mandatory for those working in security, childcare and education, aged care and disability and for roles including Workplace First Aiders and for Continuing Professional Development for Nursing.",
  },
  {
    heading: "course overview",
    details1:
      "This first aid course will provide you with the knowledge and skills to manage emergency first aid situations, including treating an unconscious casualty, performing CPR and controlling bleeding. HLTAID011 Provide First Aid is the standard course required for employment in many industries and job roles.",
    details2:
      "This course is mandatory for those working in security, childcare and education, aged care and disability and for roles including Workplace First Aiders and for Continuing Professional Development for Nursing.",
  },
];

export default function FirstAid() {
  return (
    <section className="w-full min-h-[600px]">
      <Banner title="First Aid Training Course Sydney" image={firstaid} />
      {/* container */}
      <div className="container mx-auto min-h-[600px] flex flex-wrap gap-6 my-[100px]">
        {/* left div */}
        <div className="lg:flex-[.70] w-full flex items-center flex-col justify-center">
          <CourseHeader
            heading="HLTAID011 PROVIDE"
            span="FIRST AID"
            image={firstAid4}
          />
          {/* steps */}
          <div className="w-full min-h-[300px]  mt-16 bg-white shadow-2xl">
            <h1 className="bg-midnight text-2xl text-white font-bold text-center py-2">
              Following steps need to follow to achieve security licence
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
              {steps.map((step) => (
                <>
                  <Steps
                    title={step.title}
                    icon={step.icon}
                    info={step.info}
                    bgColor={step.bgColor}
                  />
                </>
              ))}
            </div>
          </div>

          {/* steps end */}
          <div className="w-full my-[100px] bg-silver p-2">
            {tabsInfo.map((info) => (
              <div className="mb-4" key={info.heading}>
                <CourseTab
                  heading={info.heading}
                  details1={info.details1}
                  details2={info.details2}
                  tag={info.tag}
                />
              </div>
            ))}
          </div>
        </div>
        {/* left div  end*/}
        {/* right div */}
        <Resources />
      </div>
      {/* container end */}
    </section>
  );
}
