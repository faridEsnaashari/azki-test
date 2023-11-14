"use client";

import { InputWrapperProps } from "./input-wrapper.types";
import { ArrowIcon, CrossIcon, WarningIcon } from "../../svg-icons";

function InputWrapper({
  placeholder,
  value,
  description,
  label,
  counter,
  errorText,
  showError,
  isActive,
  className,
  children,
  hovered,
  iconClicked,
  onHovered,
  onHoveredCancelled,
  inputId,
  onFocus,
  onFocusCancelled,
  typing,
  isTextArea,
  open,
  isRadioButton,
}: InputWrapperProps) {
  return (
    <div className={`flex flex-col gap-2 !leading-4 text-white ${isActive && "!text-gray-300"} ${className}`}>
      <div className="flex flex-wrap justify-between overflow-hidden whitespace-nowrap">
        <span className="block w-1/2 px-2 text-sm">{label}</span>
        {!hovered && (
          <span
            className={`block w-1/2 px-2 text-left text-xs opacity-0 transition-opacity ${!hovered && "!opacity-100"}`}
          >
            {counter}
          </span>
        )}
      </div>
      <div className={`relative w-full text-base text-[#807878] ${isTextArea ? "h-full" : "h-12"}`}>
        {children}
        {value === "" && (
          <label
            className={`absolute right-2 top-[.5rem] cursor-text break-all pl-2 pr-4 text-[#a69d9d] ${
              isActive && "!text-gray-400"
            }`}
            htmlFor={inputId + ""}
            onMouseOver={onHovered}
            onMouseOut={onHoveredCancelled}
          >
            {placeholder}
          </label>
        )}
        <a
          className={`absolute left-2 mr-2 mt-[.2rem] h-9 w-9 cursor-pointer p-2 text-[#a69d9d] opacity-100 ${
            showError && "text-gray-700"
          } ${!typing && !isRadioButton && "!cursor-text !opacity-0"}`}
          onClick={iconClicked}
          onFocus={onFocus}
          onBlur={onFocusCancelled}
          onMouseOver={onHovered}
          onMouseOut={onHoveredCancelled}
        >
          {isRadioButton ? (
            <ArrowIcon className={`rotate-90 transition-transform ${open && "!-rotate-90"}`} />
          ) : (
            <CrossIcon />
          )}
        </a>
      </div>
      {showError && errorText && (
        <div className={`relative pl-2 pr-7 text-red-500 ${isActive && "!text-gray-500"}`}>
          <WarningIcon />
          <span className="block w-full break-words text-xs">{errorText}</span>
        </div>
      )}
      {description && (
        <span
          className={`block max-h-0 w-full overflow-hidden break-words px-2 text-xs text-gray-200 transition-max-h ${
            (hovered || typing || showError) && "!max-h-24"
          } ${isActive && "!text-gray-500"}`}
        >
          {description}
        </span>
      )}
    </div>
  );
}

export default InputWrapper;
