import React from "react";
import styled from "styled-components";
import { labelcount } from "../molecules/SliderShow";

const boxwidth = 3;
const width = 100 / boxwidth + "%";
const Box = styled.div`
  width: ${width};
  height: 100%;
  background-color: #dddddd;
  display: flex;
  div:first-child {
    margin-left: 0;
  }
`;
function SliderBoxs({ children, id }) {
  console.log(id);
  return <Box>{children}</Box>;
}

export default SliderBoxs;
