import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => <Input size="small" />;
export const Medium = () => <Input size="medium" />;
export const Large = () => <Input size="large" />;
export const ExtraLarge = () => <Input size="x-large" />;

Small.storyName = "Small";
