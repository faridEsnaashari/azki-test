"use client";

import { card1Text, card2Text, titleText } from "./texts";
import { Card } from "./components";
import { useRouter } from "next/navigation";
import withSignup from "@/HOCs/withSignup";

function Page() {
  const router = useRouter();

  const onClick = (insuranceType: "driver" | "third") => {
    const urlParams = new URLSearchParams({ type: insuranceType });

    localStorage.setItem("type", insuranceType);

    router.push("/vehicle-type?" + urlParams);
  };

  return (
    <div className="flex w-full flex-col items-center xsm:p-0 sm:pr-10 md:pr-20">
      <h1 className="py-8 text-2xl font-bold">{titleText}</h1>
      <div className="flex flex-wrap">
        <Card className="mb-4 ml-4 h-32 w-32" onClick={() => onClick("third")}>
          {card1Text}
        </Card>
        <Card disable className="h-32 w-32" onClick={() => onClick("driver")}>
          {card2Text}
        </Card>
      </div>
    </div>
  );
}

export default withSignup(Page);
