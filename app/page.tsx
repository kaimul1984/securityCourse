import { Attributes, CallToAction, ContactUs, Hero, WhyUs } from "@/components";
import OurCourses from "@/components/OurCourses";
import TailwindIndicator from "@/components/Tailwind-indicator";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Attributes />
      <OurCourses />
      <WhyUs />
      <CallToAction />
      <ContactUs />
    </>
  );
}
