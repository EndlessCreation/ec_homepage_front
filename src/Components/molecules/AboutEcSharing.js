import React from "react";
import styled from "styled-components";

import AboutEcImg from "../atoms/AboutEcImg";
import AboutEcMainText from "../atoms/AboutEcMainText";
import AboutEcSubText from "../atoms/AboutEcSubText";
const ContentBlock = styled.div`
  width: auto;
  height: auto;
  padding-right: 108px;
  padding-top: 14px;
`;

function AboutEcSharing() {
  return (
    <ContentBlock>
      <AboutEcImg url={"images/Sharing.png"} />
      <AboutEcMainText>Sharing</AboutEcMainText>
      <AboutEcSubText>
        EC는 개인의 지식과 경험을 <br />
        공유하는 장이 되어줍니다.
      </AboutEcSubText>
    </ContentBlock>
  );
}

export default AboutEcSharing;
