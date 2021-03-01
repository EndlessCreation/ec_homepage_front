import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import MainSubText from "../atoms/MainSubText";

const TextBlock = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  @media screen and (max-width: 1279px) {
    height: 180px;
  }

  @media screen and (max-width: 767px) {
    height: 209px;
    flex-direction: column;
  }
`;

function ContactTextBox() {
  return (
    <TextBlock>
      <MainText>Contact</MainText>
      <MainSubText>궁금한게 있다면 언제든지 편하게 연락주세요!</MainSubText>
    </TextBlock>
  );
}

export default React.memo(ContactTextBox);
