import Link from "next/link";
import React from "react";

type ButtonProps = {
  title: string;
  path: string;
};

export default function Button({ title, path }: ButtonProps) {
  return (
    <Link href={`${path}`} className="btn-primary w-max">
      {title}
    </Link>
  );
}
