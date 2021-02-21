import React from "react";
import styled, { css } from "styled-components";

import { useBtnState, useBtnToggle } from "../../../Context/MainContext";

const Button = styled.div`
  position: absolute;

  right: 100px;
  margin-top: 10px;
  display: none;
  width: 30px;
  height: 20px;
  cursor: pointer;
  span {
    position: absolute;
    transition: 0.3s ease-in-out;
    height: 3px;
    width: 30px;
    border-radius: 7px;
    background-color: #3d4146;
    top: 0;
    transition: 0.3s;
  }
  span:nth-child(1) {
    top: -3px;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 7px;
  }
  span:nth-child(4) {
    top: 17px;
  }
  @media screen and (max-width: 1280px) {
    display: block;
    top: 25px;
    right: 100px;
  }
  ${(props) =>
    props.active &&
    css`
      span {
        background-color: #fff;
      }
      span:nth-child(1) {
        opacity: 0;
      }
      span:nth-child(2) {
        transform: rotate(45deg);
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
      }
      span:nth-child(4) {
        opacity: 0;
      }
    `}
  @media screen and (max-width:767px) {
    right: 60px;
  }
`;

function MenuButton() {
  const Active = useBtnState();
  const onToggle = useBtnToggle();
  return (
    <Button active={Active} onClick={onToggle}>
      <span />
      <span />
      <span />
      <span />
    </Button>
  );
}

export default MenuButton;
