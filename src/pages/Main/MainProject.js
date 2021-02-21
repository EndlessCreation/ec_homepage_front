import React from "react";
import styled from "styled-components";

import ProjectTextBox from "./organisms/ProjectTextBox";
import ProjectContents from "./organisms/ProjectContents";
const ProjectBlock = styled.div`
  width: 100%;
  height: 752px;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  @media screen and (max-width: 1279px) {
    height: 846px;
  }
  @media screen and (max-width: 767px) {
    height: 841px;
  }
`;

const ProjectContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 1279px) {
    max-width: 640px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
function MainProject() {
  return (
    <ProjectBlock>
      <ProjectContainer>
        <ProjectTextBox />
        <ProjectContents main/>
      </ProjectContainer>
    </ProjectBlock>
  );
}

export default MainProject;
