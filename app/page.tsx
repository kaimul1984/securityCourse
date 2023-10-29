import {
  Attributes,
  CallToAction,
  ContactUs,
  Hero,
  OurClient,
  Promt,
  WhyUs,
} from "@/components";
import Blogs from "@/components/Blogs";
import OurCourses from "@/components/OurCourses";
import TailwindIndicator from "@/components/Tailwind-indicator";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Attributes />
      <OurCourses />
      <Promt />
      <WhyUs />
      <CallToAction />
      <ContactUs />
      <Blogs />
      <OurClient />
    </>
  );
}
