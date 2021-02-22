import React from "react";
import EntireBox from "../templates/ProjectTemplate";

import {MainProvider} from "../../../context/MainContext"
import MainNavbar from "../../Main/MainNavbar";
import { ProjectProvider } from "../../../context/ProjectContext";
import Footer from "../../Activity/Footer";

function ProjectPage() {
  return (
    <>
    <ProjectProvider>
    <MainProvider>
      <MainNavbar />
    </MainProvider>
        <EntireBox />
      <Footer />
      </ProjectProvider>
    </>
  );
}

export default ProjectPage;
