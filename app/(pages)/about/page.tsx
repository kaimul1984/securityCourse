import { aboutus, contact, img5 } from "@/assets/images";
import { Banner } from "@/components";
import Teams from "@/components/Teams";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full flex flex-col items-center">
      <Banner title="about us" image={aboutus} />
      {/* container start */}
      <div className="container min-h-[500px] my-[100px] ">
        {/* about us div */}
        <div className="w-full min-h-[300px] flex flex-wrap gap-8 items-center">
          {/* left div */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-20 h-[1px] bg-midnight" />
              <h3 className="text-lg font-bold text-success">who we are</h3>
            </div>
            <h1 className="text-3xl mb-4 text-tahiti font-bold">
              we are Sydney’s security training specialists
            </h1>
            <p>
              western sydney Vocational training Academy (RTO Code: 91349) is a
              Registered Training Organisation (RTO) through the Australian
              Skills Quality Authority (ASQA), conducting fully-accredited,
              nationally-recognised training courses. We have also been approved
              by the Security Licensing Enforcement Directorate (SLED) (M/L
              000101318) to conduct Security Training in NSW. Star Training
              Academy built itself around the provision of security training and
              associated services for the security industry secta and has been
              proudly doing that since 2007. Since then we are providing an
              expanded scope of programs across many potential job roles and
              industries. We continue to listen to and work with industry
              stakeholders and clients to shape our training models and improve
              our delivery. We have built strategic partnerships with other
              service providers in the industry as well as working closely with
              regulators to ensure that our clients are getting the quality
              education they expect and is required. Our team of highly skilled
              trainers and assessors all have extensive experience in Vocational
              Education, as well as specialised qualifications across a vast
              cross section of industry. They have excellent interpersonal
              communication skills and can engage with clients from a wide
              demographic.
            </p>
          </div>
          {/* right div */}
          <div className="flex-1 ">
            <Image src={img5} alt="classRoom" className="min-w-[350px]" />
          </div>
        </div>
        {/* about us div */}
      </div>
      <Teams />
      {/* container end */}
    </section>
  );
}
