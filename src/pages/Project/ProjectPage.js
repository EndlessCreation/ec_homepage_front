import React from "react";
import styled from "styled-components";
import EntireBox from "./EntireBox";

import {MainProvider} from "../../Context/MainContext"
import MainNavbar from "../Main/MainNavbar";

const Footer = styled.div`
  color: white;
  background: black;
  width: 100%;
  height: 419px;
`;

function ProjectPage() {
  return (
    <>
    <MainProvider>
      <MainNavbar />
    </MainProvider>
        <EntireBox />
      <Footer>Footer</Footer>
    </>
  );
}

export default ProjectPage;
