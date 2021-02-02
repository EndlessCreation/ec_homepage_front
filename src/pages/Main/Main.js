import React from "react";
import Navbar from "./Navbar";
import MainHeader from "./MainHeader";
import MainAboutEC from "./MainAboutEC";
import MainActivity from "./MainActivity";
import MainProject from "./MainProject";

import MainNavbar from "./MainNavbar";

function Main() {
  return (
    <>
      <MainNavbar />
      <MainHeader />
      <MainAboutEC />
      <MainActivity />
      <MainProject />
    </>
  );
}

export default Main;
