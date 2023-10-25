import Image from "next/image";
import Container from "./Container";

import Link from "next/link";
import { Button } from ".";

type ComponentProps = {
  img1: any;
  img2: any;
  heading1: string;
  heading3: string;
  span: string;
  info: string;
  href: string;
};

export default function Course({
  img1,
  img2,
  heading1,
  heading3,
  span,
  info,
  href,
}: ComponentProps) {
  return (
    <Container style=" group flex flex-col px-4 lg:flex-row justify-between mb-[100px] odd:lg:flex-row-reverse ">
      <div className="flex-1 flex items-center justify-center relative lg:rounded-tl-[50px]">
        <Image
          src={img1}
          alt="secuirty-1"
          className="w-full h-full bg-amber  pt-2 group-even:pl-2 group-even:rounded-tl-[50px] group-odd:pr-2  group-odd:rounded-tr-[50px] "
        />
        <Image
          src={img2}
          alt="secuirty-1"
          className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] aspect-square lg:aspect-auto absolute right-0 bottom-0 group-even:rounded-tl-[50px] group-odd:rounded-tr-[50px] group-even:bg-white group-odd:bg-amber group-even:pl-2 group-odd:pr-2 group-odd:left-0 group-odd:bottom-0"
        />
      </div>
      <div className="flex-1 p-8 bg-silver">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-20 h-[1px] bg-midnight" />
          <h3 className="text-lg font-bold text-success">{heading3}</h3>
        </div>
        <h1 className="mb-6 text-[1.7rem] font-extrabold">
          {heading1} <span className="text-amber uppercase">{span}</span>
        </h1>
        <p className="leading-8 mb-4">{info}</p>
        <p className="mb-12">
          Enquire now for enrolment opportunities in your state or territory..
        </p>
        <Button title="enrol now" path={href} />
      </div>
    </Container>
  );
}
