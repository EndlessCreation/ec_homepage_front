import React from "react";
import styled from "styled-components";

const Text = styled.div`
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

function MainBannerText2({ children }) {
  return <Text>{children}</Text>;
}

export default MainBannerText2;
