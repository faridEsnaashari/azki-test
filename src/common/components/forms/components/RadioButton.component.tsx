"use client";

import { ChangeEvent, useState, useEffect, useRef } from "react";
import InputWrapper from "./InputWrapper.component";
import { RadioButtonProps } from "./radio-button.types";
import { getRandomId } from "@/tools/helpers.helper";
import { RadioCircle } from "../../svg-icons";
import { WithClassName } from "@/common/types/with-class-name.type";

function RadioButton({
  className,
  placeholder,
  value,
  onValueChange,
  label,
  description,
  counter,
  showError,
  errorText,
  isActive,
  name,
  options,
}: WithClassName<RadioButtonProps>) {
  const inputRef = useRef<HTMLInputElement>(null!);

  const [openOptions, setOpenOptions] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inputId, setInputId] = useState("");

  useEffect(() => setInputId(getRandomId() + ""), []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = (e.target as HTMLInputElement).value;
    onValueChange(options.find((option) => option.id === +id)!);
    setOpenOptions(false);
  };
  const onFocusCancelled = () => !hovered && setOpenOptions(false);
  const onHovered = () => setHovered(true);
  const onHoveredCancelled = () => setHovered(false);
  const onClick = () => !isActive && setOpenOptions(true);
  const onIconClick = () => {
    if (isActive) {
      return;
    }

    setOpenOptions(true);
    inputRef.current.focus();
  };

  return (
    <InputWrapper
      inputId={inputId}
      onHovered={onHovered}
      onHoveredCancelled={onHoveredCancelled}
      isActive={isActive}
      errorText={errorText}
      showError={showError}
      counter={counter}
      description={description}
      label={label}
      value={value?.text || ""}
      hovered={hovered}
      className={className}
      placeholder={placeholder}
      onFocus={() => {}}
      onFocusCancelled={onFocusCancelled}
      open={openOptions}
      isRadioButton
      iconClicked={onIconClick}
    >
      <input
        className={`absolute h-10 w-full rounded border border-solid border-[#dfdfdf] bg-white !pl-8 pr-4 transition-colors hover:border-[#a69d9d] ${
          showError && "!border-2 !border-red-600"
        } ${isActive && "cursor-not-allowed !border bg-[#f0eded] !text-gray-400"}`}
        ref={inputRef}
        id={inputId}
        type="text"
        value={value?.text || ""}
        onBlur={onFocusCancelled}
        onMouseOver={onHovered}
        onMouseOut={onHoveredCancelled}
        onClick={onClick}
      ></input>
      <div
        className={`absolute top-12 z-50 max-h-0 w-full flex-col overflow-auto overflow-hidden rounded-b-lg border-0 border-solid border-[#dfdfdf] transition-max-h duration-300 ${
          openOptions && "!max-h-[20vh] !border"
        }`}
        onMouseOver={onHovered}
        onMouseOut={onHoveredCancelled}
      >
        {options.map((option, index) => (
          <>
            <input
              className="hidden"
              key={index}
              id={name + index + ""}
              type="radio"
              name={name}
              value={option.id}
              onChange={onChange}
              checked={value?.id === option.id}
            ></input>
            <label
              className="flex h-10 w-full justify-between bg-white p-3 text-[#807878] hover:bg-[#f7f7f7] hover:text-[#9d9a9a]"
              htmlFor={name + index + ""}
            >
              <span>{option.text}</span>
              <RadioCircle className={value === option ? "fill-[#807878]" : ""} />
            </label>
          </>
        ))}
      </div>
    </InputWrapper>
  );
}

export default RadioButton;
