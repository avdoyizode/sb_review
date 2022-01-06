import React from "react";
import { Button } from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export const AddNew = () => <Button variant="primary">AddNew</Button>;
export const Update = () => <Button variant="secondary">Update</Button>;
export const Create = () => <Button variant="success">Create</Button>;
export const Cancel = () => <Button variant="danger">Cancel</Button>;
export const Back = () => <Button variant="back">Back</Button>;
// export const ack = () => <Button variant="back">Back</Button>;
const Template = (args: any) => <Button {...args} />;

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: "primary",
//   // children: 'Primary Args',
// };

// export const SecondaryA = Template.bind({});
// SecondaryA.args = {
//   variant: "secondary",
//   // children: 'Secondary Args',
// };

// export const LongPrimaryA = Template.bind({});
// LongPrimaryA.args = {
//   ...PrimaryA.args,
//   // children: 'Long Primary Args',
// };
