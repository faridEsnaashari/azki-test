"use client";

import { useState } from "react";
import { Button, TextField } from "@/common/components/forms";
import { familyPlaceholder, namePlaceholder, passwordPlaceholder, phonenumberPlaceholder, titleText } from "./texts";
import { isValidName, isValidPhoneNumber } from "@/tools/helpers.helper";

function Page() {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  return (
    <div className="flex w-full flex-col items-center xsm:items-start xsm:p-0 sm:pr-10 md:pr-20">
      <h1 className="py-8 text-2xl font-bold">{titleText}</h1>
      <form className="flex w-full flex-col flex-wrap items-center xsm:flex-row xsm:justify-end">
        <TextField
          className="ml-0 w-full pb-4 xsm:ml-[4%] xsm:w-[48%]"
          value={name}
          onValueChange={setName}
          onCorrect={(value) => isValidName(value)}
          placeholder={namePlaceholder}
        />
        <TextField
          className="w-full pb-4 xsm:w-[48%]"
          value={family}
          onValueChange={setFamily}
          onCorrect={(value) => isValidName(value)}
          placeholder={familyPlaceholder}
        />
        <TextField
          className="w-full pb-4"
          value={phonenumber}
          onValueChange={setPhonenumber}
          onCorrect={(value) => isValidPhoneNumber(value)}
          placeholder={phonenumberPlaceholder}
        />
        <TextField
          className="w-full pb-4"
          value={password}
          onValueChange={setPassword}
          onCorrect={(value) => isValidName(value)}
          placeholder={passwordPlaceholder}
        />
        <Button className="rounded-full bg-[#25b79b] px-10 py-3 text-base font-medium text-white">{titleText}</Button>
      </form>
    </div>
  );
}

export default Page;
