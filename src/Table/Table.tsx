import { Table, Th, Thead, Tr, Tbody, Td } from "@chakra-ui/react";
import React from "react";
import "./Table.css";

export const Tablr = (props: any) => {
  const { variant = "Table", children, ...rest } = props;

  return <Table className={`Table ${variant}`}></Table>;
};
