import React from "react";
import { Button, Container, ParentDiv } from ".";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <ParentDiv style="min-h-[300px] mb-20">
      <Container style="py-8 flex flex-wrap gap-8 lg:gap-2">
        <div className="flex-1 flex flex-col justify-center gap-2 px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-20 h-[1px] bg-midnight" />
            <h3 className="text-lg font-bold text-warning">Get started</h3>
          </div>
          <h1 className="text-3xl font-extrabold mb-4">
            If you're considering starting a career in <br /> the{" "}
            <span className="text-warning">security industry</span>
          </h1>
          <h1 className="text-3xl font-extrabold mb-4">
            or are interested in obtaining essential <br />
            <span className="text-success ">First Aid training</span>
          </h1>
          <p>
            you've landed in the perfect spot. Western Sydney Vocational
            Training Academy is well-regarded for its commitment to fulfilling
            your educational needs and career aspirations.
          </p>
          <p className="mb-4 leading-6">
            Our comprehensive programs and experienced instructors ensure that
            you receive top-notch training that prepares you for success in the
            security sector. Moreover, our First Aid courses are designed to
            equip you with life-saving skills and knowledge, enabling you to
            provide immediate assistance during emergencies.
          </p>
          <p className="mb-6 leading-6">
            Don't miss out on the opportunity to enrich your skills and
            knowledge. Enroll with us now and take that crucial first step
            towards a promising future in your chosen field.
          </p>
          <Button title="enroll now" path="/" />
        </div>
        <ContactForm />
      </Container>
    </ParentDiv>
  );
}
