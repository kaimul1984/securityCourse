import { img1, img2, img3, img4 } from "@/assets/images";
import { Course, Heading, ParentDiv } from ".";

export default function OurCourses() {
  return (
    <ParentDiv>
      <Heading title="our courses" />
      <Course
        img1={img1}
        img2={img2}
        heading1=" CPP20218 Certificate II in"
        span="security operations"
        heading3="our security course"
        info="become a licensed security guard (unarmed) with the Certificate II
       in Security Operations (CPP20218). You will learn how to provide
       security services for a range of clients while protecting yourself,
       patrons, and the general public. The course covers: first aid, basic
       self defence, screening people and personal effects, conducting
       patrols, crowd control, managing intoxicated people, removing
       persons from premises."
        href="/securityTraining"
      />
      <Course
        img1={img3}
        img2={img4}
        heading1="HLTAID011 Provide "
        span="First Aid"
        heading3="our first aid course"
        info="A Provide First Aid course can give you the skills and knowledge to assist a casualty in an emergency situation. Whether this training is required as part of your job role or you just want to be more prepared to help in an emergency, this course will prepare you for a range of incidents and situations. This course includes the Provide Cardiopulmonary Resuscitation unit."
        href="/firstAid"
      />
    </ParentDiv>
  );
}
