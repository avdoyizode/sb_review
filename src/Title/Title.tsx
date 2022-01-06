import { Heading } from "@chakra-ui/react";
import React from "react";
import "./Title.css";

export const Title = (props: any) => {
  const { variant = "font1", children, ...rest } = props;

  return (
    <Heading className={`Heading ${variant}`} {...rest}>
      {children}
    </Heading>
  );
};
