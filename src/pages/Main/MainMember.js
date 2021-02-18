import React from "react";
import styled from "styled-components";
import MemberTextBox from "./organisms/MemberTextBox";
import MemberContents from "./organisms/MemberContents";

const MemberBlock = styled.div`
  width: 100%;
  height: 841px;
  margin: 0;
  padding: 0;
  background-color: #fff;
  @media screen and (max-width: 1279px) {
    height: 629px;
  }
  @media screen and (max-width: 767px) {
    height: 969px;
  }
`;

const MemberContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 1279px) {
    max-width: 640px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

function MainMember() {
  return (
    <MemberBlock>
      <MemberContainer>
        <MemberTextBox />
        <MemberContents />
      </MemberContainer>
    </MemberBlock>
  );
}

export default MainMember;
