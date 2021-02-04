import React from "react";
import styled from "styled-components";

import MainAboutEcText from "../../Components/atoms/MainAboutEcText";
import AboutEcMain from "../../Components/atoms/AboutEcMain";
import AboutEcVideo from "../../Components/atoms/AboutEcVideo";
import AboutEcContents from "../../Components/organisms/AboutEcContents";
const AboutEcBlock = styled.div`
  width: 100%;
  height: 1299px;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  @media screen and (max-width: 1279px) {
    height: 1001px;
  }
`;

const AboutEcContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1279px) {
    max-width: 640px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

function MainAboutEC() {
  return (
    <AboutEcBlock>
      <AboutEcContainer>
        <MainAboutEcText />
        <AboutEcMain />
        <AboutEcVideo />
        <AboutEcContents />
      </AboutEcContainer>
    </AboutEcBlock>
  );
}

export default MainAboutEC;
