import React from "react";
import EntireBox from "../templates/ProjectTemplate";

import { MainProvider } from "../../../context/MainContext";
import MainNavbar from "../../Main/CommonNavbar";
import { ProjectProvider } from "../../../context/ProjectContext";
import CommonFooter from "../../Activity/CommonFooter";

function Project() {
  return (
    <>
      <ProjectProvider>
        <MainProvider>
          <MainNavbar />
        </MainProvider>
        <EntireBox />
        <CommonFooter />
      </ProjectProvider>
    </>
  );
}

export default Project;
