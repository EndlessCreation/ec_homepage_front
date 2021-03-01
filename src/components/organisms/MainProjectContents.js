import React from "react";
import styled from "styled-components";

import ProjectEcPick from "../molecules/ProjectEcPickContents";
const ContentsBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: #f2f2f2;
  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 596px;
    margin-left: 0;
  }
  @media screen and (max-width: 767px) {
    width: 304px;
    height: 548px;
    margin-top: ${(props) => (props.main === true ? 64 : 0)}px;
    margin-left: 0;
  }
`;

function ProjectContents({ main }) {
  return (
    <ContentsBlock main={main}>
      <ProjectEcPick />
    </ContentsBlock>
  );
}

export default React.memo(ProjectContents);
