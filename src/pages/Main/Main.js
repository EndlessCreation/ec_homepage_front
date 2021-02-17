import React from "react";

import { MainProvider } from "../../Context/MainContext";
import MainNavbar from "./MainNavbar";
import MainHeader from "./MainHeader";
import MainAboutEC from "./MainAboutEC";
import MainActivity from "./MainActivity";
import MainProject from "./MainProject";
import MainMember from "./MainMember";
import MainContact from "./MainContact";

function Main() {
  return (
    <MainProvider>
      <MainNavbar />
      <MainHeader />
      <MainAboutEC />
      <MainActivity />
      <MainProject />
      <MainMember />
      <MainContact />
    </MainProvider>
  );
}

export default Main;