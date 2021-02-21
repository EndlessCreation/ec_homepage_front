import React from "react";
import styled from "styled-components";

import MainText from "../atoms/MainText";
import MainSubText from "../atoms/MainSubText";
const TextBlock = styled.div`
  width: 100%;
  height: 220px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  @media screen and (max-width: 1279px) {
    grid-column: 1 / -1;

    width: 100%;
    height: 205px;
  }

  @media screen and (max-width: 767px) {
    height: 237px;
    flex-direction: column;
  }
`;

function ActivityTextBox() {
  return (
    <TextBlock>
      <MainText url={"/Activity"}>Activity</MainText>
      <MainSubText>EC에 오면 이런 활동을 할 수 있어요!</MainSubText>
    </TextBlock>
  );
}

export default ActivityTextBox;
