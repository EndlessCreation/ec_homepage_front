import React from "react";

import { MainProvider } from "../../Context/MainContext";
import MainHeader from "./MainHeader";
import MainAboutEC from "./MainAboutEC";
import MainActivity from "./MainActivity";
import MainProject from "./MainProject";

import MainNavbar from "./MainNavbar";

function Main() {
  return (
    <MainProvider>
      <MainNavbar />
      <MainHeader />
    </MainProvider>
  );
}

export default Main;
