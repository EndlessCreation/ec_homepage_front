import React from "react";
import styled from "styled-components";

const TextBlock = styled.div`
  font-family: kanit;
  font-size: 24px;
  line-height: 35px;
  font-weight: bold;
  ::after {
    content: "";
    display: block;
    margin-top: 16px;
    margin-bottom: 28px;
    border-bottom: 2px solid #232323;
    width: 72px;
    background-color: #232323;
  }
  @media screen and (max-width: 1279px) {
    font-size: 18px;
    line-height: 27px;
    ::after {
      margin-top: 14px;
      margin-bottom: 19px;
    }
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;
function ContactMainText({ children }) {
  return <TextBlock>{children}</TextBlock>;
}

export default ContactMainText;
