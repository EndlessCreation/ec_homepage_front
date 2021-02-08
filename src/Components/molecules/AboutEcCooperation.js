import React from "react";
import styled from "styled-components";
import AboutEcImg from "../atoms/AboutEcImg";
import AboutEcMainText from "../atoms/AboutEcMainText";
import AboutEcSubText from "../atoms/AboutEcSubText";
const ContentBlock = styled.div`
  width: 229px;
  height: auto;
  margin-top: 8px;
  @media screen and (max-width: 1279px) {
    width: 178px;
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

function AboutEcCooperation() {
  return (
    <ContentBlock>
      <AboutEcImg url={"images/Cooperation.png"} />
      <AboutEcMainText>Cooperation</AboutEcMainText>
      <AboutEcSubText>
        EC는 더 나은 학습 환경을 위해 함께 고민하고 협력합니다.
      </AboutEcSubText>
    </ContentBlock>
  );
}

export default AboutEcCooperation;
