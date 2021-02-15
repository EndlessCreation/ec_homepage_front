import React from "react";
import styled from "styled-components";

const TextBlock = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  margin-top: 118px;
  font-family: NanumSquareRegular;
  font-size: 18px;
  line-height: 34px;
  @media screen and (max-width: 1279px) {
    width: 400px;
    font-size: 16px;
    list-style: 28px;
    margin-top: 96px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 36px;
  }
`;
function MainSubText({ children }) {
  return <TextBlock>{children}</TextBlock>;
}

export default MainSubText;
