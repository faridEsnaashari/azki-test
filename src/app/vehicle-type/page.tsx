"use client";

import { FormEvent, useEffect, useState } from "react";
import { Button, RadioButton } from "@/common/components/forms";
import { carModelPlaceholder, carTypePlaceholder, errorText, nextButtonText, returnButtonText } from "./texts";
import { Option } from "@/common/components/forms/components/radio-button.types";
import { ArrowIcon } from "@/common/components/svg-icons";
import useAPICaller from "@/hooks/use-api-caller.hook";
import { VehicleType, VehicleUsage } from "@/common/types/entities.type";
import { useRouter, useSearchParams } from "next/navigation";
import withSignup from "@/HOCs/withSignup";

function Page() {
  const [getVehicleTypes, result] = useAPICaller().getVehicleTypesCaller;

  const router = useRouter();
  const searchParams = useSearchParams();

  const [carTypes, setCarTypes] = useState<VehicleType[]>([]);
  const [selectedCarType, setSelectedCarType] = useState<Option>();
  const [carUsages, setCarUsages] = useState<VehicleUsage[]>();
  const [selectedCarUsage, setSelectedCarUsage] = useState<Option>();
  const [showError, setShowError] = useState<"cartype" | "carusage">();

  useEffect(() => getVehicleTypes(), []);
  useEffect(() => {
    if (result.isFetching || !result.data) {
      return;
    }

    setCarTypes(result.data!);
  }, [result.isFetching]);

  const onCarTypeSelected = (option: Option) => {
    setSelectedCarType(option);

    const carUsagesOptions = carTypes.find((carType) => carType.id === option.id)?.usages;
    setCarUsages(carUsagesOptions);
    setSelectedCarUsage(undefined);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedCarType) {
      setShowError("cartype");
      return;
    }

    if (!selectedCarUsage) {
      setShowError("carusage");
      return;
    }

    localStorage.setItem("vehicleType", JSON.stringify(selectedCarType));
    localStorage.setItem("vehicleUsage", JSON.stringify(selectedCarUsage));

    const urlParams = new URLSearchParams(searchParams.toString());
    urlParams.append("vehicle-type", selectedCarType.id + "");
    urlParams.append("vehicle-usage", selectedCarUsage.id + "");

    router.push("insurance-company?" + urlParams);
  };

  return (
    <form className="flex w-full flex-col flex-wrap xsm:flex-row xsm:justify-end" onSubmit={onSubmit}>
      <RadioButton
        className="ml-0 w-full pb-4 xsm:ml-[4%] xsm:w-[48%]"
        options={carTypes.map((carType) => ({ id: carType.id, text: carType.title }))}
        value={selectedCarType}
        onValueChange={onCarTypeSelected}
        placeholder={carTypePlaceholder}
        name="cartype"
        errorText={errorText}
        showError={showError === "cartype"}
      />
      <RadioButton
        className="w-full pb-4 xsm:w-[48%]"
        options={carUsages?.map((carUsage) => ({ id: carUsage.id, text: carUsage.title })) || []}
        value={selectedCarUsage}
        onValueChange={setSelectedCarUsage}
        placeholder={carModelPlaceholder}
        name="carusage"
        isActive={!!!selectedCarType}
        errorText={errorText}
        showError={showError === "carusage"}
      />
      <div className="flex w-full justify-between gap-4">
        <Button
          className="relative flex h-10 w-40 min-w-[2rem] items-center rounded-full border border-solid border-[#44c1a9] bg-white text-base font-medium text-[#44c1a9] transition-color hover:bg-[#25b79b] hover:text-white"
          onClick={() => router.back()}
        >
          <ArrowIcon className="absolute right-4 !w-4 rotate-180 xsm:hidden sm:block" />
          <span className="w-full font-bold ">{returnButtonText}</span>
        </Button>
        <Button className="relative flex h-10 w-40 min-w-[2rem] items-center rounded-full border border-solid border-[#44c1a9] bg-white text-base font-medium text-[#44c1a9] transition-color hover:bg-[#25b79b] hover:text-white">
          <span className="w-full font-bold">{nextButtonText}</span>
          <ArrowIcon className="absolute left-4 !w-4 xsm:hidden sm:block" />
        </Button>
      </div>
    </form>
  );
}

export default withSignup(Page);
