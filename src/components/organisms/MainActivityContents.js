import React from "react";
import styled from "styled-components";

import ActivityList from "../molecules/MainActivityList";
const ContentsBlock = styled.div`
  width: 100%;
  height: 463px;
  grid-column: 1 / 2;
  grid-row: 2/ 3;

  display: flex;
  justify-content: flex-end;
  .first {
    margin-right: 54px;
  }
  .second {
    margin-right: 75px;
  }
  @media screen and (max-width: 1279px) {
    margin-left: 0;
    width: 100%;
    height: 739px;
    .first,
    .second {
      margin-right: 112px;
    }
  }
  @media screen and (max-width: 767px) {
    height: 614px;
    .first,
    .second {
      margin-right: 24px;
    }
  }
`;
function ActivityContents() {
  return (
    <ContentsBlock>
      <ActivityList />
    </ContentsBlock>
  );
}

export default ActivityContents;
