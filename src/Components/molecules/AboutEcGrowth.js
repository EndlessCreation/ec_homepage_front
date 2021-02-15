import React from "react";
import styled from "styled-components";

import AboutEcImg from "../atoms/AboutEcImg";
import AboutEcMainText from "../atoms/AboutEcMainText";
import AboutEcSubText from "../atoms/AboutEcSubText";
const ContentBlock = styled.div`
  width: 220px;
  height: auto;
  margin-right: 99px;
  @media screen and (max-width: 1279px) {
    width: 171px;
    margin-right: 39px;
  }
  @media screen and (max-width: 767px) {
    margin: 0;
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: 93px 26px 171px;
    grid-template-rows: 30fr 35fr 29fr;
  }
`;
function AboutEcGrowth() {
  return (
    <ContentBlock>
      <AboutEcImg url={"images/Growth.png"} />
      <AboutEcMainText>Growth</AboutEcMainText>
      <AboutEcSubText>
        EC는 동아리원 모두의 성장을 격려하고 응원합니다.
      </AboutEcSubText>
    </ContentBlock>
  );
}

export default AboutEcGrowth;
