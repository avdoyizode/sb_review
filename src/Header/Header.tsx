import { Box } from "@chakra-ui/react";
import React from "react";
import "./Header.css";

export const Header = (props: any) => {
  const { variant = "style1", children, ...rest } = props;

  return (
    <header className={`header${variant}`} {...rest}>
      {children}
    </header>
  );
};
