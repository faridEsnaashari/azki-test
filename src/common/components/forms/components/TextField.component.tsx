"use client";

import { ChangeEvent, useState, useEffect, useRef } from "react";
import { TextFieldProps } from "./text-field.types";
import { getRandomId } from "@/tools/helpers.helper";
import InputWrapper from "./InputWrapper.component";

function TextField({
  className,
  placeholder,
  value,
  onValueChange,
  label,
  description,
  counter,
  onCorrect,
  showError,
  errorText,
  isActive,
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null!);

  const [typing, setTyping] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [inputId, setInputId] = useState("");

  useEffect(() => setInputId(getRandomId() + ""), []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    onValueChange(value);

    setCorrect(onCorrect(value));
  };
  const onFocus = () => setTyping(true);
  const onFocusCancelled = () => setTyping(false);
  const crossClicked = () => {
    inputRef.current.focus();
    onValueChange("");
  };
  const onHovered = () => setHovered(true);
  const onHoveredCancelled = () => setHovered(false);

  return (
    <InputWrapper
      inputId={inputId}
      onHovered={onHovered}
      onHoveredCancelled={onHoveredCancelled}
      iconClicked={crossClicked}
      isActive={isActive}
      errorText={errorText}
      showError={showError}
      counter={counter}
      description={description}
      label={label}
      value={value}
      hovered={hovered}
      className={className}
      placeholder={placeholder}
      onFocus={onFocus}
      onFocusCancelled={onFocusCancelled}
      typing={typing}
    >
      <input
        className={`absolute h-10 w-full rounded border border-solid border-[#dfdfdf] bg-white !pl-8 pr-4 transition-colors hover:border-[#a69d9d] ${
          correct && "!border-2 !border-green-600"
        } ${showError && "!border-2 !border-red-600"} ${isActive && "!border !border-green-900 !text-gray-400"}`}
        ref={inputRef}
        id={inputId}
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onFocusCancelled}
        onMouseOver={onHovered}
        onMouseOut={onHoveredCancelled}
      ></input>
    </InputWrapper>
  );
}

export default TextField;
