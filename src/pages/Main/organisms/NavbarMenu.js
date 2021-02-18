import React from "react";
import styled, { css } from "styled-components";
import MenuList from "../molecules/MenuList";
import { useBtnState } from "../../../Context/MainContext";

const MenuShow = styled.ul`
  display: flex;
  justify-content: flex-end;
  font-family: Kanit-Regular;
  line-height: 30px;
  font-size: 20px;
  padding: 0;
  margin: 0;
  li:not(:nth-child(1)) {
    padding-left: 32px;
  }
  li:nth-child(4) {
    opacity: 0.2;
  }
  @media screen and (max-width: 1279px) {
    display: none;
    ${(props) =>
      props.active &&
      css`
        display: flex;
        flex-direction: column;
        font-size: 28px;
        height: 50%;
        li:nth-child(1) {
          padding-top: 130px;
        }
        li:not(:nth-child(1)) {
          padding-left: 0px;
          padding-top: 28px;
        }
      `}
  }
  @media screen and (max-width: 767px) {
    ${(props) =>
      props.active &&
      css`
        display: flex;
        flex-direction: column;
        font-size: 24px;
        height: 50%;
        li:nth-child(1) {
          padding-top: 96px;
          padding-left: 60px;
        }
        li:not(:nth-child(1)) {
          padding-left: 60px;
          padding-top: 24px;
        }
      `}
  } ;
`;

function NavbarMenu() {
  const active = useBtnState();
  return (
    <MenuShow active={active}>
      <MenuList />
    </MenuShow>
  );
}

export default NavbarMenu;
