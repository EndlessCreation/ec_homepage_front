import React from "react";
import styled from "styled-components";

const Label = styled.label`
  width: 10%;
  height: 6px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.4s;
  background: #afafaf;
  :hover {
    width: 70%;
    background: #232323;
  }
`;

function SliderLabel({ id }) {
  return <Label htmlfor={id} />;
}

export default SliderLabel;
