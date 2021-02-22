import React from "react";
import EntireBox from "../templates/ProjectTemplate";

import {MainProvider} from "../../../context/MainContext"
import MainNavbar from "../../Main/MainNavbar";
import { ProjectProvider } from "../../../context/ProjectContext";
import CommonFooter from "../../Activity/CommonFooter";

function ProjectPage() {
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

export default ProjectPage;
