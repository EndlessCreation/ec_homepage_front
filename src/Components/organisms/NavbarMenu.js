import React from "react";
import styled, { css } from "styled-components";
import MenuList from "../molecules/MenuList";

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
  @media screen and (max-width: 1280px) {
    display: none;
  }
  ${(props) =>
    props.active &&
    css`
      display: flex;
      flex-direction: column;
      font-size: 28px;
      height: 70%;
      li:nth-child(1) {
        padding-top: 130px;
      }
      li:not(:nth-child(1)) {
        padding-left: 0px;
        padding-top: 28px;
      }
    `}
`;

function NavbarMenu({ active }) {
  return (
    <MenuShow active={active}>
      <MenuList />
    </MenuShow>
  );
}

export default NavbarMenu;
