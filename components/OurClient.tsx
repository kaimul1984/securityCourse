import { client1, client2, client3, client4 } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { Heading } from ".";

export default function OurClient() {
  return (
    <div className="w-full min-h-[200px] flex flex-col items-center justify-center mb-20">
      <Heading title="  The Client we work with" />
      <div className="w-[95%] max-w-[1420px] flex flex-wrap items-center justify-center gap-10">
        <div className="w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] bg-silver p-1  relative">
          <Image src={client1} alt="client1" className="w-full h-full " />
        </div>
        <div className="w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] bg-silver p-1 relative">
          <Image src={client2} alt="client1" className="w-full h-full " />
        </div>
        <div className="w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] bg-silver p-1 relative">
          <Image src={client3} alt="client1" className="w-full h-full " />
        </div>
        <div className="w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] bg-silver p-1 relative">
          <Image src={client4} alt="client1" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
}
