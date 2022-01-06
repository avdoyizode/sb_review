import React from "react";
import Input, { Navbar } from "./Navbar";

export default {
  title: "Layout/Navbar",
  component: Navbar,
};

export const Small = () => <Navbar variant="n-small" />;
export const Medium = () => <Navbar variant="n-medium" />;
export const Large = () => <Navbar variant="n-large" />;

Small.storyName = "Small";
