import React from "react";
import styled, { css } from "styled-components";

const SlideBlock = styled.div`
  width: 49.4%;
  height: 100%;
  background-color: #fff;
  margin-left: 10px;

  @media screen and (max-width: 1279px) {
    width: 95%;
    height: 46%;
    margin-bottom: 16px;
    margin-left: 0px;
    margin-right: 16px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
function SliderBox({ key }) {
  return <SlideBlock id={key}></SlideBlock>;
}

export default SliderBox;
