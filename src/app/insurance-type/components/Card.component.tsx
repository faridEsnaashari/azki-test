import CardImage from "@images/insurance.svg";
import CardDisableImage from "@images/insurance-disable.svg";
import Image from "next/image";
import { CardProps } from "./card.types";
import { WithClassName } from "@/common/types/with-class-name.type";

function Card({ className, children, onClick, disable }: WithClassName<CardProps>) {
  return (
    <div
      className={`${className} ${
        disable && "!bg-[#fafafa] !text-[#d5d5d5]"
      } flex cursor-pointer flex-col items-center justify-between rounded-3xl border border-solid border-[#e6e6e6] p-4 text-black`}
      onClick={onClick}
    >
      <Image className="w-2/3" src={disable ? CardDisableImage : CardImage} alt="card image" />
      <span className="font-bold">{children}</span>
    </div>
  );
}

export default Card;
