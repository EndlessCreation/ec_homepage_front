import React from "react";
import styled from "styled-components";

import ActivityList from "../molecules/ActivityList";
import ActivityPhoto from "../molecules/ActivityPhoto";
const ContentsBlock = styled.div`
  width: 848px;
  height: 463px;
  margin-left: 22.16%;
  margin-right: 7%;
  display: flex;
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
      <ActivityPhoto />
    </ContentsBlock>
  );
}

export default ActivityContents;
