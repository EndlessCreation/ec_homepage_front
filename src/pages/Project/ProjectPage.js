import React from "react";
import styled from "styled-components";
import EntireBox from "./EntireBox";

import {MainProvider} from "../../Context/MainContext"
import MainNavbar from "../Main/MainNavbar";
import { ProjectProvider } from "../../Context/ProjectContext";

const Footer = styled.div`
  color: white;
  background: black;
  width: 100%;
  height: 419px;
`;

function ProjectPage() {
  return (
    <>
    <ProjectProvider>
    <MainProvider>
      <MainNavbar />
    </MainProvider>
        <EntireBox />
      <Footer>Footer</Footer>
      </ProjectProvider>
    </>
  );
}

export default ProjectPage;
