"use client";

import { LayoutProps } from "@/common/types/next-components.type";
import { redirect, useSearchParams } from "next/navigation";
import { descriptionText, titleText } from "./texts";

function Layout({ children }: LayoutProps) {
  const searchParams = useSearchParams();

  if (!searchParams.get("vehicle-type") || !searchParams.get("vehicle-usage")) {
    redirect("/vehicle-type");
  }

  return (
    <div className="flex w-full flex-col items-center xsm:items-start xsm:p-0 sm:pr-10 md:pr-20">
      <h1 className="py-8 text-2xl font-bold">{titleText}</h1>
      <h6 className="pb-8 text-base text-[#979797]">{descriptionText}</h6>
      {children}
    </div>
  );
}

export default Layout;
