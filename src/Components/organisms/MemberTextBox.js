import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import MainSubText from "../atoms/MainSubText";

const TextBlock = styled.div`
  width: 100%;
  height: 293px;
  display: flex;
  @media screen and (max-width: 1279px) {
    height: 213px;
  }

  @media screen and (max-width: 767px) {
    height: 265px;
    flex-direction: column;
  }
`;
function MemberTextBox() {
  return (
    <TextBlock>
      <MainText url={"/Member"}>Member</MainText>
      <MainSubText>
        EC에는 여러분의 성장을 도와줄
        <br />
        든든한 운영진과 멋진 선배들이 있어요!
      </MainSubText>
    </TextBlock>
  );
}

export default MemberTextBox;
