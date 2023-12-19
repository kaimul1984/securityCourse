import { img6 } from "@/assets/images";
import { Banner } from "@/components";
import React from "react";

export default function SecurityTraning() {
  return (
    <div>
      <Banner title="Security Training" image={img6} />
      <h1 className="text-5xl font-black text-wrap text-center my-12 text-midnight">
        CPP20218 CERTIFICATE II IN{" "}
        <span className="text-warning">SECURITY OPERATIONS</span>
      </h1>
      <div className="container mx-auto min-h-[600px]"></div>
    </div>
  );
}
