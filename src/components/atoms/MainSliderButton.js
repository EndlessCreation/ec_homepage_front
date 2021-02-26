import React from "react";
import styled, { css } from "styled-components";

const ButtonBlock = styled.button`
  all: unset;
  width: 10%;
  height: 6px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.4s;
  opacity: 0.24;
  background: #232323;
  ${(props) =>
    props.id === props.currentSlide &&
    css`
      width: 70%;
      opacity: 1;
    `}

  @media screen and (max-width:1279px) {
    height: 6px;
    margin-left: 9px;
  }

  @media screen and (max-width: 767px) {
    height: 5px;
    margin-left: 8px;
  }
`;

function SliderButton({ id, select, currentSlide }) {
  return (
    <ButtonBlock
      currentSlide={currentSlide}
      id={id}
      onClick={() => {
        select(id);
      }}
    />
  );
}

export default SliderButton;
