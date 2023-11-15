"use client";

import { useEffect, useState } from "react";
import { Button, RadioButton } from "@/common/components/forms";
import { carTypePlaceholder, descriptionText, nextButtonText, returnButtonText, titleText } from "./texts";
import { Option } from "@/common/components/forms/components/radio-button.types";
import { ArrowIcon } from "@/common/components/svg-icons";
import useAPICaller from "@/hooks/use-api-caller.hook";
import { VehicleType, VehicleUsage } from "@/common/types/entities.type";

function Page() {
  const [getVehicleTypes, result] = useAPICaller().getVehicleTypesCaller;

  const [carTypes, setCarTypes] = useState<VehicleType[]>([]);
  const [selectedCarType, setSelectedCarType] = useState<Option>();
  const [carUsages, setCarUsages] = useState<VehicleUsage[]>();
  const [selectedCarUsage, setSelectedCarUsage] = useState<Option>();

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

  return (
    <div className="flex w-full flex-col items-center xsm:items-start xsm:p-0 sm:pr-10 md:pr-20">
      <h1 className="py-8 text-2xl font-bold">{titleText}</h1>
      <h6 className="pb-8 text-base text-[#979797]">{descriptionText}</h6>
      <form className="flex w-full flex-col flex-wrap items-center xsm:flex-row xsm:justify-end">
        <RadioButton
          className="ml-0 w-full pb-4 xsm:ml-[4%] xsm:w-[48%]"
          options={carTypes.map((carType) => ({ id: carType.id, text: carType.title }))}
          value={selectedCarType}
          onValueChange={onCarTypeSelected}
          placeholder={carTypePlaceholder}
          name="cartype"
        />
        <RadioButton
          className="w-full pb-4 xsm:w-[48%]"
          options={carUsages?.map((carUsage) => ({ id: carUsage.id, text: carUsage.title })) || []}
          value={selectedCarUsage}
          onValueChange={setSelectedCarUsage}
          placeholder={carTypePlaceholder}
          name="carusage"
          isActive={!!!selectedCarType}
        />
        <div className="flex w-full justify-between gap-4">
          <Button className="relative flex h-10 w-40 min-w-[2rem] items-center rounded-full border border-solid border-[#44c1a9] bg-white text-base font-medium text-[#44c1a9] transition-color hover:bg-[#25b79b] hover:text-white">
            <ArrowIcon className="absolute right-4 !w-4 rotate-180 xsm:hidden sm:block" />
            <span className="w-full font-bold ">{returnButtonText}</span>
          </Button>
          <Button className="relative flex h-10 w-40 min-w-[2rem] items-center rounded-full border border-solid border-[#44c1a9] bg-white text-base font-medium text-[#44c1a9] transition-color hover:bg-[#25b79b] hover:text-white">
            <span className="w-full font-bold">{nextButtonText}</span>
            <ArrowIcon className="absolute left-4 !w-4 xsm:hidden sm:block" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
