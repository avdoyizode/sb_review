import React from "react";
import "./Label.css";

export const Label = (props: any) => {
  const { variant = "Label1", children, ...rest } = props;

  return (
    <label className={`Label ${variant}`} {...rest}>
      {children}
    </label>
  );
};
