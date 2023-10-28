import React from "react";
import { Button, ParentDiv } from ".";

export default function CallToAction() {
  return (
    <ParentDiv style="bg-success min-h-[200px] py-8 mb-20">
      <h1 className="text-2xl font-extrabold lg:text-5xl lg:font-bold text-center mb-5">
        Ready to start your courses?{" "}
      </h1>
      <p className="text-md lg:text-xl font-bold text-white mb-5">
        check out our comprehensive courses.
      </p>
      <Button title="enroll now" path="/" />
    </ParentDiv>
  );
}
