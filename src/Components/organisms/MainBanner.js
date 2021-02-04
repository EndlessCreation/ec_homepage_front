import React from "react";
import styled, { css } from "styled-components";
import MainBannerText from "../atoms/MainBannerText";
import MainBannerText2 from "../atoms/MainBannerText2";
import MainBannerText3 from "../atoms/MainBannerText3";

const BannerBlock = styled.div`
  width: 100%;
  height: 525px;
  padding-left: 22.16%;
  padding-top: 265px;
  padding-bottom: 0;
  padding-right: 36%;
  box-sizing: border-box;
  @media screen and (max-width: 1279px) {
    padding-left: 0;
    padding-top: 40.78%;
    padding-right: 0;
    height: 567px;
  }
  @media screen and (max-width: 767px) {
    height: 494px;
    padding-left: 0;
    padding-top: 57.18%;
  }
`;

function MainBanner() {
  return (
    <BannerBlock>
      <MainBannerText> 성장하는 즐거움,</MainBannerText>
      <MainBannerText2>Endless Creation</MainBannerText2>
      <MainBannerText3>
        신입기수 모집 중(~3/14)
        <br /> 31기 여러분들을 기다리고 있어요
      </MainBannerText3>
    </BannerBlock>
  );
}

export default MainBanner;
