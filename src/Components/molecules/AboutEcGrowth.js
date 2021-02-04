import React from "react";
import styled from "styled-components";

import AboutEcImg from "../atoms/AboutEcImg";
import AboutEcMainText from "../atoms/AboutEcMainText";
import AboutEcSubText from "../atoms/AboutEcSubText";
const ContentBlock = styled.div`
  width: auto;
  height: auto;
  padding-right: 99px;
`;
function AboutEcGrowth() {
  return (
    <ContentBlock>
      <AboutEcImg url={"images/Growth.png"} />
      <AboutEcMainText>Growth</AboutEcMainText>
      <AboutEcSubText>
        EC는 동아리원 모두의 성장을 <br />
        격려하고 응원합니다.
      </AboutEcSubText>
    </ContentBlock>
  );
}

export default AboutEcGrowth;
