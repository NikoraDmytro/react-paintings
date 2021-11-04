import React from "react";

import { NavBar } from "../NavBar/NavBar";

import "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <img src="./img/museumLogo1.svg" alt="Logo" />
      <NavBar />
    </header>
  );
};
