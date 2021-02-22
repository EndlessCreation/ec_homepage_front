import React from "react";
import styled from "styled-components";
import EntireBox from "./EntireBox";

import {MainProvider} from "../../context/MainContext"
import MainNavbar from "../Main/MainNavbar";
import { ProjectProvider } from "../../context/ProjectContext";
import CommonFooter from "../../pages/Activity/CommonFooter";

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
