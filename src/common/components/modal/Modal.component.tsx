"use client";

import { WithClassName } from "@/common/types/with-class-name.type";
import { PropsWithChildren } from "react";
import { ModalProps } from "./modal.types";

function Modal({ children, className, open, onOpenChange }: PropsWithChildren<WithClassName<ModalProps>>) {
  return (
    <div
      className={
        className + ` fixed left-0 top-0 flex h-screen w-screen items-center justify-center ${open ? "flex" : "hidden"}`
      }
    >
      <div className="absolute -z-10 h-full w-full bg-[#00000021]" onClick={() => onOpenChange(false)}></div>
      <div className="w-[100%] rounded-lg bg-[#f2efef] 2xsm:w-[90%] xsm:w-[80%] md:w-[70%]">{children}</div>
    </div>
  );
}

export default Modal;
