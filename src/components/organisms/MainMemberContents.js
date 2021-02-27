import React from "react";
import styled from "styled-components";
import MainMemberBox from "../molecules/MainMemberBox";
const ContentsBlock = styled.div`
  width: 880px;
  height: 548px;
  margin-left: 22.16%;
  margin-right: 7%;
  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 416px;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 80px;
  }
`;

function MemberContents() {
  return (
    <ContentsBlock>
      <MainMemberBox />
    </ContentsBlock>
  );
}

export default React.memo(MemberContents);
