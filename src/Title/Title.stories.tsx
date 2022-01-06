import { Heading } from "@chakra-ui/react";
import React from "react";
import { Title } from "./Title";

export default {
  title: "Form/Title",
  component: Title,
  args: {
    children: "Title",
  },
};

export const title1 = () => <Title variant="font1">Customer</Title>;
export const title2 = () => <Title variant="font2">Institution</Title>;
export const title3 = () => <Title variant="font3">Chat</Title>;
const Template = (args: any) => <Heading {...args} />;
