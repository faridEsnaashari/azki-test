"use client";

import { card1Text, card2Text, titleText } from "./texts";
import { Card } from "./components";

function Page() {
  return (
    <div className="flex w-full flex-col items-center xsm:p-0 sm:pr-10 md:pr-20">
      <h1 className="py-8 text-2xl font-bold">{titleText}</h1>
      <div className="flex flex-wrap">
        <Card className="mb-4 ml-4 h-32 w-32" onClick={() => {}}>
          {card1Text}
        </Card>
        <Card disable className="h-32 w-32" onClick={() => {}}>
          {card2Text}
        </Card>
      </div>
    </div>
  );
}

export default Page;
