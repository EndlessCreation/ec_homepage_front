import React from "react";
import styled, { css } from "styled-components";

const SlideBlock = styled.div`
  width: 49.4%;
  height: 100%;
  margin-left: 10px;

  background-color: #fff;
`;
function SliderBox({ key }) {
  return <SlideBlock id={key}></SlideBlock>;
}

export default SliderBox;
