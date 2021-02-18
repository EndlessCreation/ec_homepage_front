import React from "react";
import styled from "styled-components";

const VideoBlock = styled.div`
  background-color: #dddddd;
  /*  width: 70%;
  height: 39.75%;
 */
  width: 848px;
  height: 477px;
  margin-left: 22.16%;
  margin-right: 7%;
  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 342px;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 767px) {
    height: 171px;
  }
`;

function AboutEcVideo() {
  return <VideoBlock></VideoBlock>;
}

export default AboutEcVideo;
