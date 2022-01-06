import React from "react";
import "./Navbar.css";

export const Navbar = (Props: any) => {
  const { variant = "n-medium", ...rest } = Props;
  return <nav className={`nav ${variant}`} {...rest} />;
};

export default Navbar;
