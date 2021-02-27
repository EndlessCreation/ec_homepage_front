import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  div:first-child {
    margin-left: 0;
  }
  @media screen and (max-width: 1279px) {
    flex-direction: column;
    div:first-child {
      margin-right: 16px;
    }
  }
`;
function SliderBoxs({ children }) {
  return <Box>{children}</Box>;
}

export default SliderBoxs;
