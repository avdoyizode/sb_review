import React from "react";
import { Tablr } from "./Table";
import { Table, Th, Thead, Tr, Tbody, Td } from "@chakra-ui/react";
export default {
  title: "Form/Table",
  component: Tablr,
  args: {
    children: "Table",
  },
};

export const Large = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Sl</Th>
        <Th>header1</Th>
        <Th>header2</Th>
        <Th>header1</Th>
        <Th>header2</Th>
        <Th>header1</Th>
        <Th>header2</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Td>1</Td>
      <Td>ss</Td>
      <Td>dd</Td>
      <Td>ss</Td>
      <Td>dd</Td>
      <Td>ss</Td>
      <Td>dd</Td>
    </Tbody>
  </Table>
);
const Template = (args: any) => <Table {...args} />;
