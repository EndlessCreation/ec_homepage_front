import React from "react";
import styled from "styled-components";

import MainAboutEcText from "../atoms/MainAboutEcText";
import MainAboutEcSubText from "../atoms/MainAboutEcSubText";

const TextBlock = styled.div`
  width: 100%;
  height: 342px;
  @media screen and (max-width: 1279px) {
    height: 260px;
    display: flex;
  }

  @media screen and (max-width: 767px) {
    height: 297px;
    flex-direction: column;
  }
`;

function AboutEcTextBox() {
  return (
    <TextBlock>
      <MainAboutEcText>AboutEC</MainAboutEcText>
      <MainAboutEcSubText />
    </TextBlock>
  );
}

export default AboutEcTextBox;
