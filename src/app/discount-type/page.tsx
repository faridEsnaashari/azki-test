"use client";

import { useState, useEffect, FormEvent } from "react";
import { Button, RadioButton } from "@/common/components/forms";
import { buttonText, errorText, text1Placeholder, text2Placeholder } from "./texts";
import { Option } from "@/common/components/forms/components/radio-button.types";
import useAPICaller from "@/hooks/use-api-caller.hook";
import { ResultModal } from "./components";
import withSignup from "@/HOCs/withSignup";

function Page() {
  const [getThirdDiscounts, result] = useAPICaller().getThirdDiscountsCaller;

  const [thirdDiscounts, setThirdDiscounts] = useState<Option[]>([]);
  const [selectedThirdDiscount, setSelectedThirdDiscount] = useState<Option>();
  const [selectedDriverDiscount, setSelectedDriverDiscount] = useState<Option>();
  const [showError, setShowError] = useState<"third" | "driver">();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => getThirdDiscounts(), []);

  useEffect(() => {
    if (result.isFetching || !result.data) {
      return;
    }

    setThirdDiscounts(result.data.map((thirdDiscount) => ({ id: thirdDiscount.id, text: thirdDiscount.title })));
  }, [result.isFetching]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedThirdDiscount) {
      setShowError("third");
      return;
    }

    if (!selectedDriverDiscount) {
      setShowError("driver");
      return;
    }

    localStorage.setItem("thirdDiscount", JSON.stringify(selectedThirdDiscount));
    localStorage.setItem("driverDiscount", JSON.stringify(selectedDriverDiscount));

    setShowModal(true);
  };

  return (
    <>
      <form className="flex w-full flex-col flex-wrap items-center xsm:flex-row xsm:justify-end" onSubmit={onSubmit}>
        <RadioButton
          className="w-full pb-4"
          options={thirdDiscounts}
          value={selectedThirdDiscount}
          onValueChange={setSelectedThirdDiscount}
          placeholder={text1Placeholder}
          name="third"
          errorText={errorText}
          showError={showError === "third"}
        />
        <RadioButton
          className="w-full pb-4"
          options={thirdDiscounts}
          value={selectedDriverDiscount}
          onValueChange={setSelectedDriverDiscount}
          placeholder={text2Placeholder}
          name="driver"
          errorText={errorText}
          showError={showError === "driver"}
        />
        <Button className="flex w-28 justify-center rounded-full bg-[#25b79b] py-2 text-base font-medium text-white">
          {buttonText}
        </Button>
      </form>
      <ResultModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default withSignup(Page);
