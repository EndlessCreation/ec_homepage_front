import React from "react";
import styled from "styled-components";
import MainBanner from "../organisms/MainBanner";
import MainBannerForm from "../atoms/MainBannerForm";
// import AOS from 'aos';
import "aos/dist/aos.css";
// AOS.init();
const HeaderBlock = styled.div`
  width: 100%;
  height: 717px;
  background-image: url("images/MainHeader.png");
  background-size: cover;
  @media screen and (max-width: 1279px) {
    height: 689px;
  }
  @media screen and (max-width: 767px) {
    height: 605px;
  }
`;

const HeaderContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width: 1279px) {
    max-width: 640px;
    height: 689px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    height: 605px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
const FormBlock = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 16%;
`;
function MainHeader() {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <MainBanner />
        <div data-aos="flip-up" data-aos-duration="500" data-aos-delay="300">
          <FormBlock>
            <MainBannerForm />
          </FormBlock>
        </div>
      </HeaderContainer>
    </HeaderBlock>
  );
}

export default MainHeader;
