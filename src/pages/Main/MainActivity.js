import React from "react";
import styled from "styled-components";

import ActivityTextBox from "../../Components/organisms/ActivityTextBox";
import ActivityContents from "../../Components/organisms/ActivityContents";
const ActivityBlock = styled.div`
  width: 100%;
  height: 683px;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  @media screen and (max-width: 1279px) {
    height: 944px;
  }
  @media screen and (max-width: 767px) {
    height: 871px;
  }
`;

const ActivityContainer = styled.div`
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
function MainActivity() {
  return (
    <ActivityBlock>
      <ActivityContainer>
        <ActivityTextBox />
        <ActivityContents />
      </ActivityContainer>
    </ActivityBlock>
  );
}

export default MainActivity;
