import React from "react";
import EntireBox from "../templates/ProjectTemplate";

import { MainProvider } from "../../context/MainContext";
import MainNavbar from "../templates/CommonNavbar";
import CommonFooter from "../templates/CommonFooter";

function Project() {
  return (
    <>
      <MainProvider>
        <MainNavbar />
      </MainProvider>
      <EntireBox />
      <CommonFooter />
    </>
  );
}

export default Project;
