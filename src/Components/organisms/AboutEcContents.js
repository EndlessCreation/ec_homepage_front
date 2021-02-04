import React from "react";
import styled from "styled-components";

import AboutEcGrowth from "../molecules/AboutEcGrowth";
import AboutEcSharing from "../molecules/AboutEcSharing";
import AboutEcCooperation from "../molecules/AboutEcCooperation";
const ContentBlock = styled.div`
  width: 848px;
  height: 480px;
  margin-left: 22.16%;
  margin-right: 7%;
  display: flex;
  box-sizing: border-box;
  padding-top: 63px;
`;

function AboutEcContents() {
  return (
    <ContentBlock>
      <AboutEcGrowth />
      <AboutEcSharing />
      <AboutEcCooperation />
    </ContentBlock>
  );
}

export default AboutEcContents;
