import React from "react";
import styled from "styled-components";

import MainText from "../atoms/MainText";
import MainSubText from "../atoms/MainSubText";
const TextBlock = styled.div`
  width: 100%;
  height: 254px;
  display: flex;
  @media screen and (max-width: 1279px) {
    height: 250px;
  }

  @media screen and (max-width: 767px) {
    height: 237px;
    flex-direction: column;
  }
`;
function ProjectTextBos() {
  return (
    <TextBlock>
      <MainText url={"/Project"}>Project</MainText>
      <MainSubText>
        31기수에 이르기까지 그동안 EC선배들이 했던 프로젝트들이에요! 너무 많아서
        몇 가지만 골라봤어요
      </MainSubText>
    </TextBlock>
  );
}

export default ProjectTextBos;
