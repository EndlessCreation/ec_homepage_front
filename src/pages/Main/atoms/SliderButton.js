import React, { useState } from "react";
import styled, { css } from "styled-components";

const ButtonBlock = styled.button`
  all: unset;
  width: ${(props) => (props.Active === true ? 70 : 10)}%;
  height: 6px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.4s;
  background: #afafaf;
  :active {
    width: 70%;
    background: #232323;
  }
`;

function SliderButton({ id, select }) {
  const [Active, setActive] = useState(false);
  return (
    <ButtonBlock
      Active={Active}
      id={id}
      onClick={() => {
        select(id);
      }}
    />
  );
}

export default SliderButton;
