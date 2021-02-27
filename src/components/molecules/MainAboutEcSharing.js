import React from "react";
import styled from "styled-components";

import AboutEcImg from "../atoms/MainAboutEcImg";
import AboutEcMainText from "../atoms/MainAboutEcMainText";
import AboutEcSubText from "../atoms/MainAboutEcSubTexts";
const ContentBlock = styled.div`
  width: 204px;
  height: auto;
  margin-right: 108px;
  margin-top: 15.6px;
  @media screen and (max-width: 1279px) {
    width: 158px;
    margin-right: 52px;
    margin-top: 15.6px;
  }
  @media screen and (max-width: 767px) {
    margin: 0;
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: 93px 26px 171px;
    grid-template-rows: 30fr 35fr 29fr;
    margin-top: 57px;
  }
`;

function AboutEcSharing() {
  return (
    <ContentBlock>
      <AboutEcImg url={"images/Sharing.png"} />
      <AboutEcMainText>Sharing</AboutEcMainText>
      <AboutEcSubText>
        EC는 개인의 지식과 경험을 공유하는 장이 되어줍니다.
      </AboutEcSubText>
    </ContentBlock>
  );
}

export default React.memo(AboutEcSharing);
