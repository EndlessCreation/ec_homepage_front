import React from "react";
import styled from "styled-components";

const AboutEc = styled.div`
  font-size: 32px;
  font-family: Kanit;
  font-weight: bold;
  line-height: 48px;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 72px;
  @media screen and (max-width: 1279px) {
    font-size: 28px;
    line-height: 42px;
    padding-top: 80px;
    width: 24%;
    display: inline-block;
  }
`;
function MainAboutEcText() {
  return <AboutEc>AboutEc</AboutEc>;
}

export default MainAboutEcText;
