import Link from "next/link";
import React from "react";

export default function CopyRight() {
  return (
    <div className="w-full h-[80px] bg-dark flex-center">
      <div className="container flex-between">
        <div className="text-white">
          Copyright © 2023 WSVTA. All Rights Reserved.
        </div>
        <div className="flex gap-2 text-light">
          <Link href="#">SiteMap</Link>
          {"|"}
          <Link href="#">Faq</Link>
          {"|"}
          <Link href="#">Privacy Policy</Link>
          {"|"}
          <Link href="#">Terms & condition</Link>
        </div>
      </div>
    </div>
  );
}
