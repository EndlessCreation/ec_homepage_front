import React from "react";
import styled from "styled-components";

const TextBlock = styled.div`
  font-family: NanumSquareRegular;
  font-size: 18px;
  line-height: 34px;
  padding-top: 25px;
  @media screen and (max-width: 1279px) {
    font-size: 14px;
    line-height: 28px;
    padding-top: 16px;
  }
  @media screen and (max-width: 767px) {
    line-height: 24px;
    grid-column: 3 / span 1;
    grid-row: 3 / -1;
  }
`;
function AboutEcSubText({ children }) {
  return <TextBlock>{children}</TextBlock>;
}

export default AboutEcSubText;
