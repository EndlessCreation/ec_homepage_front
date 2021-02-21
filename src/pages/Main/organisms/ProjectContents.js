import React from "react";
import styled from "styled-components";

import SlideShow from "../molecules/SliderShow";
const ContentsBlock = styled.div`
  width: 848px;
  height: 378px;
  margin-left: 22.16%;
  margin-right: 7%;
  background-color: #f2f2f2;
  overflow: hidden;
  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 596px;
    margin-left: 0;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 548px;
    margin-top: ${props=>props.main === true ? 64 : 0}px;
    margin-left: 0;
  }
`;

function ProjectContents({main}) {
  return (
    <ContentsBlock main={main}>
      <SlideShow />
    </ContentsBlock>
  );
}

export default ProjectContents;
