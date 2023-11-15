"use client";

import { getRandomId } from "@/tools/helpers.helper";
import { redirect } from "next/navigation";
import { ComponentType } from "react";

export default function withSignup<T>(Component: ComponentType<T>) {
  return function WithSignup(props: T) {
    if (!localStorage.getItem("user")) {
      redirect("/sign-up");
    }

    return <Component key={getRandomId()} {...props} />;
  };
}
