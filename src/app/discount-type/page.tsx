"use client";

import { useState, useEffect } from "react";
import { Button, RadioButton } from "@/common/components/forms";
import { buttonText, text1Placeholder, text2Placeholder, descriptionText, titleText } from "./texts";
import { Option } from "@/common/components/forms/components/radio-button.types";
import useAPICaller from "@/hooks/use-api-caller.hook";

function Page() {
  const [getThirdDiscounts, result] = useAPICaller().getThirdDiscountsCaller;

  const [thirdDiscounts, setThirdDiscounts] = useState<Option[]>([]);
  const [selectedThirdDiscount, setSelectedThirdDiscount] = useState<Option>();
  const [selectedDriverDiscount, setSelectedDriverDiscount] = useState<Option>();

  useEffect(() => getThirdDiscounts(), []);

  useEffect(() => {
    if (result.isFetching || !result.data) {
      return;
    }

    setThirdDiscounts(result.data.map((thirdDiscount) => ({ id: thirdDiscount.id, text: thirdDiscount.title })));
  }, [result.isFetching]);

  return (
    <form className="flex w-full flex-col flex-wrap items-center xsm:flex-row xsm:justify-end">
      <RadioButton
        className="w-full pb-4"
        options={thirdDiscounts}
        value={selectedThirdDiscount}
        onValueChange={setSelectedThirdDiscount}
        placeholder={text1Placeholder}
        name="third"
      />
      <RadioButton
        className="w-full pb-4"
        options={thirdDiscounts}
        value={selectedDriverDiscount}
        onValueChange={setSelectedDriverDiscount}
        placeholder={text2Placeholder}
        name="driver"
      />
      <Button className="flex w-28 justify-center rounded-full bg-[#25b79b] py-2 text-base font-medium text-white">
        {buttonText}
      </Button>
    </form>
  );
}

export default Page;
