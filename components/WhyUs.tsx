import React from "react";
import { Button, Container, ParentDiv } from ".";
import Image from "next/image";
import { img1, img4, img5 } from "@/assets/images";
import { tick } from "@/assets/icons";

export default function WhyUs() {
  return (
    <ParentDiv style="min-h-[300px] mb-20">
      <Container style="py-8 flex-between flex-wrap gap-8 lg:gap-2">
        <div className="flex-1 flex-center relative ">
          <div className="w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-full bg-white p-4 absolute top-[-50px] left-0 lg:top-5 lg:left-5">
            <Image
              src={img1}
              alt="security"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-[350px] h-[350px] lg:w-[550px] lg:h-[550px] rounded-full ">
            <Image
              src={img5}
              alt="security"
              className="rounded-full w-full h-full"
            />
          </div>
          <div className="w-36 h-36 lg:w-40 lg:h-40 rounded-full absolute bottom-[-50px] right-0 lg:bottom-0 lg:right-10 bg-white p-4 ">
            <Image
              src={img4}
              alt="security"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="flex-1 p-8 ">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-20 h-[1px] bg-midnight" />
            <h3 className="text-lg font-bold text-warning">why we are</h3>
          </div>
          <h1 className="mb-8 text-3xl font-extrabold">
            our <span className="text-success">professionalism</span> makes us
            stand out in the industry.
          </h1>
          <p className="mb-8">
            we will changes this paragraph later.Since then we have evolved into
            a multi campus educational institution, providing an expanded scope
            of programs across many potential job roles and industries. We
            continue to listen to and work with industry stakeholders and
            clients to shape our training models and improve our delivery. We
            have built strategic partnerships with other service providers in
            the industry as well as working closely with regulators to ensure
            that our clients are getting .
          </p>
          <div className=" flex flex-wrap lg:gap-4 mb-8">
            <div className="w-[160px] lg:w-[300px] flex items-center  gap-2 lg:gap-4">
              <Image
                src={tick}
                alt="tick"
                className="w-10 h-10 lg:w-16 lg:h-16"
              />
              <h2 className=" text-md lg:text-xl font-bold">we deliver</h2>
            </div>
            <div className="w-[160px] lg:w-[300px] flex items-center  gap-2 lg:gap-4">
              <Image
                src={tick}
                alt="tick"
                className="w-10 h-10 lg:w-16 lg:h-16"
              />
              <h2 className="text-md lg:text-xl font-bold">we care</h2>
            </div>
            <div className="w-[160px] lg:w-[300px] flex items-center gap-2 lg:gap-4">
              <Image
                src={tick}
                alt="tick"
                className="w-10 h-10 lg:w-16 lg:h-16"
              />
              <h2 className="text-md lg:text-xl font-bold">our experience</h2>
            </div>
            <div className="w-[160px] lg:w-[300px] flex items-center  gap-2 lg:gap-4">
              <Image
                src={tick}
                alt="tick"
                className="w-10 h-10 lg:w-16 lg:h-16"
              />
              <h2 className="text-md lg:text-xl font-bold">our commitment</h2>
            </div>
          </div>
          <Button title="learn more" path="about" />
        </div>
      </Container>
    </ParentDiv>
  );
}
