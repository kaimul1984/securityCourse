import { Attributes, Hero } from "@/components";
import OurCourses from "@/components/OurCourses";
import TailwindIndicator from "@/components/Tailwind-indicator";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Attributes />
      <OurCourses />
    </>
  );
}
