import React from "react";
import styled from "styled-components";

const Text = styled.div`
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

function MainBannerText({ children }) {
  return <Text>{children}</Text>;
}

export default MainBannerText;
