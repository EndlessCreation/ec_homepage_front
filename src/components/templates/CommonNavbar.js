import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { useGlobalState, useGlobalDispatch } from "../../context/GlobalContext";
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
  ${(props) =>
    props.ScrollState &&
    css`
      background: #fff;
      transition: all 0.5s ease-in-out;
    `}
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
        transition: all 0s;
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
  const dispatch = useGlobalDispatch();
  const active = state.NavState;

  const [ScrollState, SetScrollState] = useState(false);
  /*
  const ScrollHandler = function () {
    const Scroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (Scroll > 600) {
      if (ScrollState === false) {
        SetScrollState(true);
        console.log("Scroll up");
      }
    } else {
      if (ScrollState === true) {
        SetScrollState(false);
        console.log("Scroll Down");
      }
    }
  };
  document.addEventListener("scroll", setInterval(ScrollHandler));
*/
  const ScrollHandler = function () {
    const Scroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (Scroll < 600) {
      SetScrollState(false);
      console.log("헤더영역");
    } else {
      SetScrollState(true);
      console.log("헤더외 영역");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
  }, [ScrollState]);

  return (
    <>
      <NavbarTemplate active={active} ScrollState={ScrollState}>
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
