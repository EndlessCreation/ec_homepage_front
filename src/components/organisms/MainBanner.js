import React from "react";
import styled, { css } from "styled-components";
// import AOS from 'aos';
import "aos/dist/aos.css";
// AOS.init();

const BannerBlock = styled.div`
  width: 100%;
  height: 525px;
  padding-left: 22.16%;
  padding-top: 265px;
  padding-bottom: 0;
  padding-right: 36%;
  color: #ffffff;
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

const MainBannerText = styled.div`
  font-family: NanumSqaureExtraBold;
  font-size: 52px;
  line-height: 78px;
  white-space: nowrap;
  @media screen and (max-width: 1279px) {
    font-size: 48px;
  }
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;
const MainBannerText2 = styled.div`
  font-family: Kanit;
  font-size: 64px;
  line-height: 78px;
  white-space: nowrap;
  @media screen and (max-width: 1279px) {
    line-height: 68px;
  }
  @media screen and (max-width: 767px) {
    font-size: 50px;
    line-height: 58px;
    white-space: pre-wrap;
  }
`;

const MainBannerText3 = styled.div`
  font-family: NanumSquareBold;
  font-size: 28px;
  line-height: 48px;
  white-space: nowrap;
  margin-top: 32px;
  @media screen and (max-width: 1279px) {
    font-size: 24px;
    line-height: 42px;
    margin-top: 28px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 28px;
    margin-top: 21px;
  }
`;

function MainBanner() {
  return (
    <BannerBlock>
      <div data-aos="fade-right" data-aos-duration="1000">
        <MainBannerText> 성장하는 즐거움,</MainBannerText>
        <MainBannerText2>Endless Creation</MainBannerText2>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
        <MainBannerText3>
          신입기수 모집 중(~3/14)
          <br /> 31기 여러분들을 기다리고 있어요
        </MainBannerText3>
      </div>
    </BannerBlock>
  );
}

export default MainBanner;
