import React from "react";
import styled from "styled-components";
import AboutEcImg from "../atoms/AboutEcImg";
import AboutEcMainText from "../atoms/AboutEcMainText";
import AboutEcSubText from "../atoms/AboutEcSubText";
const ContentBlock = styled.div`
  width: auto;
  height: auto;
  padding-top: 10px;
`;

function AboutEcCooperation() {
  return (
    <ContentBlock>
      <AboutEcImg url={"images/Cooperation.png"} />
      <AboutEcMainText>Cooperation</AboutEcMainText>
      <AboutEcSubText>
        EC는 더 나은 학습 환경을 위해 <br />
        함께 고민하고 협력합니다.
      </AboutEcSubText>
    </ContentBlock>
  );
}

export default AboutEcCooperation;
