import React from "react";
import styled from "styled-components";

const TextBlock = styled.div`
  font-family: kanit;
  font-size: 24px;
  line-height: 35px;
  ::after {
    content: "";
    display: block;
    margin-top: 16px;
    border-bottom: 2px solid #232323;
    width: 72px;
    background-color: #232323;
  }
`;
function AboutEcMainText({ children }) {
  return <TextBlock>{children}</TextBlock>;
}

export default AboutEcMainText;
