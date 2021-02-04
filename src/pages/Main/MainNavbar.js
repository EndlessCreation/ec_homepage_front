import React from "react";
import styled, { css } from "styled-components";

import { useBtnState } from "../../Context/MainContext";
import NavbarMain from "../../Components/atoms/NavbarMain";
import NavbarMenu from "../../Components/organisms/NavbarMenu";
import HamburgerBtn from "../../Components/atoms/HamburgerBtn";

/* 상단 고정 네이게이션 바 Template*/
const NavbarTemplate = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding-left: 70px;
  padding-right: 70px;
  z-index: 3;

  @media screen and (max-width: 1280px) {
    padding-left: 80px;
    padding-right: 70px;
    height: 84px;

    ${(props) =>
      props.active &&
      css`
        height: 100%;
        background-color: #232323;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding-top: 24px;
      `}
  }
  @media screen and (max-width: 767px) {
    padding-left: 28px;
    padding-right: 28px;
    height: 72px;
    ${(props) =>
      props.active &&
      css`
        height: 100%;
        background-color: #232323;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding-top: 20px;
      `}
  }
`;
function MainNavbar() {
  const active = useBtnState();
  return (
    <>
      <NavbarTemplate active={active}>
        <NavbarMain />
        <NavbarMenu />
        <HamburgerBtn />
      </NavbarTemplate>
    </>
  );
}

export default MainNavbar;
