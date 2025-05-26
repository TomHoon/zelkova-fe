"use client";

import C_InputStyles from "@/styles/C_Input.module.scss";

const PlaceholderSizeMap = {
  sm: C_InputStyles.placeholderSm,
  md: C_InputStyles.placeholderMd,
};

const StateMap = {
  default: "",
  error: C_InputStyles.error,
  focused: C_InputStyles.focused,
};

export default function C_Input({
  value,
  onChange,
  placeholder = "",
  width = "100%",
  size = "md",
  state = "default",
  isDate = false,
  type = "text",
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${C_InputStyles.input} ${PlaceholderSizeMap[size]} ${
        isDate ? C_InputStyles.date : ""
      } ${StateMap[state]}`}
      style={{ width }}
    />
  );
}
