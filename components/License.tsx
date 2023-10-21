import React from "react";
import { Container, ParentDiv } from ".";
import { AiOutlineNumber } from "react-icons/ai";
import { PiLockKey } from "react-icons/pi";

export default function License() {
  return (
    <div className="w-full h-[50px] bg-ring text-white">
      <Container style="flex flex-wrap items-center justify-center gap-[300px] m-auto h-full">
        <h2 className="font-extrabold flex items-center gap-4">
          <span className="text-2xl">
            <AiOutlineNumber />
          </span>
          Rto No | 2345
        </h2>
        <h2 className="font-extrabold flex items-center gap-4">
          <span className="text-2xl">
            <PiLockKey />
          </span>
          NSW Master License No | 154 419 178
        </h2>
      </Container>
    </div>
  );
}
