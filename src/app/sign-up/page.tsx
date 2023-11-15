"use client";

import { FormEvent, useState } from "react";
import { Button, TextField } from "@/common/components/forms";
import {
  errorText1,
  errorText2,
  errorText3,
  errorText4,
  familyPlaceholder,
  namePlaceholder,
  passwordPlaceholder,
  phonenumberPlaceholder,
  titleText,
} from "./texts";
import { hasOnlyPersian, isValidName, isValidPassword, isValidPhoneNumber } from "@/tools/helpers.helper";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [showError, setShowError] = useState<"name" | "family" | "password" | "phonenumber">();
  const [errorText, setErrorText] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "") {
      setShowError("name");
      setErrorText(errorText1);
      return;
    }

    if (!hasOnlyPersian(name)) {
      setShowError("name");
      setErrorText(errorText3);
    }

    if (family === "") {
      setShowError("family");
      setErrorText(errorText1);
      return;
    }

    if (!hasOnlyPersian(family)) {
      setShowError("family");
      setErrorText(errorText3);
    }

    if (!isValidPassword(password)) {
      setShowError("password");
      setErrorText(errorText4);
      return;
    }

    if (!isValidPhoneNumber(phonenumber)) {
      setShowError("phonenumber");
      setErrorText(errorText2);
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, family, password, phonenumber }));

    router.push("/insurance-type?");
  };

  return (
    <div className="flex w-full flex-col xsm:items-start xsm:p-0 sm:pr-10 md:pr-20">
      <h1 className="py-8 text-2xl font-bold">{titleText}</h1>
      <form className="flex w-full flex-col flex-wrap items-center xsm:flex-row xsm:justify-end" onSubmit={onSubmit}>
        <TextField
          className="ml-0 w-full pb-4 xsm:ml-[4%] xsm:w-[48%]"
          value={name}
          onValueChange={setName}
          onCorrect={(value) => isValidName(value) && hasOnlyPersian(value)}
          placeholder={namePlaceholder}
          showError={showError === "name"}
          errorText={errorText}
        />
        <TextField
          className="w-full pb-4 xsm:w-[48%]"
          value={family}
          onValueChange={setFamily}
          onCorrect={(value) => isValidName(value) && hasOnlyPersian(value)}
          placeholder={familyPlaceholder}
          showError={showError === "family"}
          errorText={errorText}
        />
        <TextField
          className="w-full pb-4"
          value={phonenumber}
          onValueChange={setPhonenumber}
          onCorrect={(value) => isValidPhoneNumber(value)}
          placeholder={phonenumberPlaceholder}
          showError={showError === "phonenumber"}
          errorText={errorText}
        />
        <TextField
          className="w-full pb-4"
          value={password}
          onValueChange={setPassword}
          onCorrect={(value) => isValidPassword(value)}
          placeholder={passwordPlaceholder}
          showError={showError === "password"}
          errorText={errorText}
        />
        <Button className="flex w-28 justify-center self-center rounded-full bg-[#25b79b] py-2 text-base font-medium text-white">
          {titleText}
        </Button>
      </form>
    </div>
  );
}

export default Page;
