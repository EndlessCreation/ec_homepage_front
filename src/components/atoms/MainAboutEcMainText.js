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
  @media screen and (max-width: 1279px) {
    font-size: 21px;
    line-height: 31px;
    ::after {
      margin-top: 13px;
    }
    @media screen and (max-width: 767px) {
      font-size: 20px;
      line-height: 30px;
      grid-column: 3 / span 1;
      grid-row: 1 / span 1;
    }
  }
`;
function AboutEcMainText({ children }) {
  return <TextBlock>{children}</TextBlock>;
}

export default React.memo(AboutEcMainText);
