import React from "react";
import { Header } from "./Header";

export default {
  title: "Form/Header",
  component: Header,
  args: {
    children: "Header",
  },
};

export const Frame1 = () => <Header variant="style1">Customer</Header>;
export const Frame2 = () => <Header variant="style2">Institution</Header>;
export const Frame3 = () => <Header variant="style3">Chat</Header>;
const Template = (args: any) => <header {...args} />;
