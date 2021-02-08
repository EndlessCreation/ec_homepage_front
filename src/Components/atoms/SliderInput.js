import React from "react";
import styled from "styled-components";

const Inputs = styled.input`
  position: absolute;
  visibility: hidden;
`;

function SliderInput({ id, checked }) {
  return <Inputs type="radio" name="r" id={id}></Inputs>;
}

export default SliderInput;
