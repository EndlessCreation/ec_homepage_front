import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-family: NanumSqaureBold;
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
function MainBannerText3({ children }) {
  return <Text>{children}</Text>;
}

export default MainBannerText3;
