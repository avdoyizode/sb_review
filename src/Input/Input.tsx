import React from "react";
import "./Input.css";

export const Input = (Props: any) => {
  const { size = "medium", ...rest } = Props;
  return <input className={`input ${size}`} {...rest} />;
};

export default Input;
