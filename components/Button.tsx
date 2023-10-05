import React from "react";

type ButtonProps = {
  title: string;
};

export default function Button({ title }: ButtonProps) {
  return <button className="btn-primary">{title}</button>;
}
