import Link from "next/link";
import React from "react";

export default function CopyRight() {
  return (
    <div className="w-full min-h-[80px] bg-dark flex-center">
      <div className="container flex flex-col gap-4 py-4 lg:flex-between">
        <div className="text-white text-center">
          Copyright © 2023 WSVTA. All Rights Reserved.
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-light">
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
