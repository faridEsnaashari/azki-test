"use client";

import { useState } from "react";
import { Button, RadioButton } from "@/common/components/forms";
import { buttonText, text1Placeholder, text2Placeholder, descriptionText, titleText } from "./texts";
import { Option } from "@/common/components/forms/components/radio-button.types";

const insuranceCompaniesMock: Option[] = [
  { id: 0, text: "car0" },
  { id: 1, text: "car1" },
  { id: 2, text: "car2" },
];

function Page() {
  const [thirdDiscount, setThirdDiscount] = useState<Option[]>(insuranceCompaniesMock);
  const [driverDiscount, setDriverDiscount] = useState<Option[]>(insuranceCompaniesMock);
  const [selectedThirdDiscount, setSelectedThirdDiscount] = useState<Option>();
  const [selectedDriverDiscount, setSelectedDriverDiscount] = useState<Option>();

  return (
    <div className="flex w-full flex-col items-center xsm:items-start xsm:p-0 sm:pr-10 md:pr-20">
      <h1 className="py-8 text-2xl font-bold">{titleText}</h1>
      <h6 className="pb-8 text-base text-[#979797]">{descriptionText}</h6>
      <form className="flex w-full flex-col flex-wrap items-center xsm:flex-row xsm:justify-end">
        <RadioButton
          className="w-full pb-4"
          options={thirdDiscount}
          value={selectedThirdDiscount}
          onValueChange={setSelectedThirdDiscount}
          placeholder={text1Placeholder}
          name="1"
        />
        <RadioButton
          className="w-full pb-4"
          options={driverDiscount}
          value={selectedDriverDiscount}
          onValueChange={setSelectedDriverDiscount}
          placeholder={text2Placeholder}
          name="2"
        />
        <Button className="flex w-28 justify-center rounded-full bg-[#25b79b] py-2 text-base font-medium text-white">
          {buttonText}
        </Button>
      </form>
    </div>
  );
}

export default Page;
