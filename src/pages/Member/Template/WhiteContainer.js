import React from "react";
import Size from "../../../Size";
import styled from "styled-components";

const TopWhite = styled.div`
  width: 100%;
  margin: 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const WhiteBox = styled.div`
  max-width: 1280px;
  box-sizing: border-box;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  opacity: 1;
  @media screen and ${Size.device.tablet} {
    max-width: 640px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
  }
  @media screen and ${Size.device.moblie} {
    max-width: 320px;
    padding-left: 8px;
    padding-right: 8px;
    margin: 0 auto;
  }
`;

function WhiteContainer({ children }) {
  return (
    <TopWhite>
      <WhiteBox>{children}</WhiteBox>
    </TopWhite>
  );
}

export default WhiteContainer;
