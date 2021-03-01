import React from "react";
import styled from "styled-components";

const TextBlock = styled.div`
  font-size: 32px;
  font-family: Kanit;
  font-weight: bold;
  line-height: 48px;
  width: 100%;
  height: 220px;
  padding-top: 100px;
  padding-bottom: 72px;
  box-sizing: border-box;
  @media screen and (max-width: 1279px) {
    font-size: 28px;
    line-height: 42px;
    width: 24%;
    height: auto;
    margin-top: 80px;
    margin-right: 64px;
    display: inline-block;
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 35px;
    width: 100%;
    margin-top: 60px;
    margin-right: 0;
  }
`;
function MainAboutEcText({ children }) {
  return <TextBlock>{children}</TextBlock>;
}

export default React.memo(MainAboutEcText);
