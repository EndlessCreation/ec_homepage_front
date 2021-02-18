import React from "react";
import styled from "styled-components";

import PhotoBox from "../atoms/PhotoBox";
const PhotoBlock = styled.div`
  width: 498px;
  height: 100%;
  overflow: scroll;
  background-color: #fff;
  display: inline-block;
  @media screen and (max-width: 1279px) {
    width: 400px;
  }
  @media screen and (max-width: 767px) {
    width: 182px;
  }
`;
const PhotoExample = ["p1", "p2", "p3"];

function ActivityPhoto() {
  return (
    <PhotoBlock>
      {PhotoExample.map((photo, index) => (
        <PhotoBox url={photo} key={index} />
      ))}
    </PhotoBlock>
  );
}

export default ActivityPhoto;
