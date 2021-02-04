import React from "react";
import styled from "styled-components";

const TextBlock = styled.div`
  font-family: NanumSquareRegular;
  font-size: 18px;
  line-height: 34px;
  padding-top: 25px;
`;
function AboutEcSubText({ children }) {
  return <TextBlock>{children}</TextBlock>;
}

export default AboutEcSubText;
