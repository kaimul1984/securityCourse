import React from "react";

type BannerProps = {
  title: string;
};

export default function Banner({ title }: BannerProps) {
  return (
    <div className="w-full h-[200px] flex-center bg-tahiti">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
    </div>
  );
}
