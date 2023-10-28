import React from "react";
import Blog from "./Blog";
import { security, firstaid, security2 } from "@/assets/images";
import { Heading } from ".";

export default function Blogs() {
  return (
    <div className="w-full min-h-[300px] flex flex-col items-center justify-center mb-20">
      <Heading title="our blogs" />
      <div className="w-[95%] max-w-[1420px] flex flex-wrap items-center justify-center gap-10 py-8 ">
        <Blog
          image={firstaid}
          title="5 Essential First Aid Skills Taught in First Aid Courses"
          tag="first aid"
          date="25 oct"
        />
        <Blog
          image={security}
          title="6 Key Character Traits for Effective Security Guard"
          tag="security"
          date="12 nov"
        />
        <Blog
          image={security2}
          title="10 Career Pathways in the NSW Security Industry"
          tag="security"
          date="7 dec"
        />
      </div>
    </div>
  );
}
