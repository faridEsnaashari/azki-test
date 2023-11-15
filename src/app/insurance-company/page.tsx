"use client";

import { useState, useEffect } from "react";
import { Button, RadioButton } from "@/common/components/forms";
import { insuranceCompanyPlaceholder, descriptionText, nextButtonText, returnButtonText, titleText } from "./texts";
import { Option } from "@/common/components/forms/components/radio-button.types";
import { ArrowIcon } from "@/common/components/svg-icons";
import useAPICaller from "@/hooks/use-api-caller.hook";

function Page() {
  const [getInsuranceCompanies, result] = useAPICaller().getInsuranceCompaniesCaller;

  const [insuranceCompanies, setInsuranceCompanies] = useState<Option[]>([]);
  const [selectedInsuranceCompany, setSelectedInsuranceCompany] = useState<Option>();

  useEffect(() => getInsuranceCompanies(), []);

  useEffect(() => {
    if (result.isFetching || !result.data) {
      return;
    }

    setInsuranceCompanies(
      result.data.map((insuranceCompany) => ({ id: insuranceCompany.id, text: insuranceCompany.title })),
    );
  }, [result]);

  return (
      <form className="flex w-full flex-col flex-wrap items-center xsm:flex-row xsm:justify-end">
        <RadioButton
          className="w-full pb-4"
          options={insuranceCompanies}
          value={selectedInsuranceCompany}
          onValueChange={setSelectedInsuranceCompany}
          placeholder={insuranceCompanyPlaceholder}
          name="insuranceCompanies"
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
  );
}

export default Page;
