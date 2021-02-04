import React from "react";
import styled from "styled-components";

import MainBanner from "../../Components/organisms/MainBanner";
import MainBannerForm from "../../Components/atoms/MainBannerForm";
const HeaderBlock = styled.div`
  max-width: 1280px;
  height: 717px;
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
      <MainBanner />
      <FormBlock>
        <MainBannerForm />
      </FormBlock>
    </HeaderBlock>
  );
}

export default MainHeader;
