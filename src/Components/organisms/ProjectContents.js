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
`;

function ProjectContents() {
  return (
    <ContentsBlock>
      <SlideShow />
    </ContentsBlock>
  );
}

export default ProjectContents;
