import React from "react";
import { Label } from "./Label";

export default {
  title: "Form/Label",
  component: Label,
  args: {
    children: "Label",
  },
};

export const Label1 = () => <Label variant="Label1">Label1</Label>;
export const Label2 = () => <Label variant="Label2">Label2</Label>;
export const Label3 = () => <Label variant="Label3">Label3</Label>;

const Template = (args: any) => <label {...args} />;
