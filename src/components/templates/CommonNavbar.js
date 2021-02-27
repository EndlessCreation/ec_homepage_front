import React from "react";
import styled, { css } from "styled-components";

import { useGlobalState } from "../../Context/GlobalContext";
import NavbarMain from "../atoms/MainNavbarMain";
import NavbarMenu from "../molecules/MainNavbarMenu";
import MenuButton from "../atoms/MainMenuButton";
import CommonFooter from "../organisms/CommonFooterTablet";
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
  padding-left: 70px;
  padding-right: 70px;
  z-index: 3;
  .footer {
    width: 100%;
    display: none;
  }
  @media screen and (max-width: 1280px) {
    padding-left: 80px;
    padding-right: 70px;
    height: 84px;
    ${(props) =>
      props.active &&
      css`
        height: 100%;
        background-color: #232323;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        padding-top: 24px;
        .footer {
          display: block;
        }
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
        .footer {
          display: none;
        }
      `}
  }
  @media screen and (max-width: 359px) {
    padding-left: 8px;
  }
`;
function MainNavbar() {
  const state = useGlobalState();
  const active = state.NavState;
  return (
    <>
      <NavbarTemplate active={active}>
        <NavbarMain />
        <NavbarMenu />
        <MenuButton />
        <div className="footer">
          <CommonFooter nav={"100%"} left={"0px"} />
        </div>
      </NavbarTemplate>
    </>
  );
}

export default MainNavbar;
