import React from "react";
import EntireBox from "../templates/ProjectTemplate";

import { MainProvider } from "../../context/MainContext";
import MainNavbar from "../templates/CommonNavbar";
import { ProjectProvider } from "../../context/ProjectContext";
import CommonFooter from "../templates/CommonFooter";
import { ProjectModalContext } from "../../context/ProjectModalContext";
function Project() {
  return (
    <ProjectModalContext>
      <ProjectProvider>
        <MainProvider>
          <MainNavbar />
        </MainProvider>
        <EntireBox />
        <CommonFooter />
      </ProjectProvider>
    </ProjectModalContext>
  );
}

export default Project;
