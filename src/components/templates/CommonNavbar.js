import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import _ from "loadsh";
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
  const ScrollState = state.ScrollState;

  const ScrollHandler = function () {
    const Scroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (window.matchMedia("(max-width:767px)").matches) {
      if (window.location.pathname === "/") {
        if (Scroll < 605) {
          dispatch({ type: "SCROLL_UP" });
        } else {
          dispatch({ type: "SCROLL_DOWN" });
        }
      } else {
        if (Scroll < 389) {
          dispatch({ type: "SCROLL_UP" });
        } else {
          dispatch({ type: "SCROLL_DOWN" });
        }
      }
    } else if (window.matchMedia("(max-width:1279px)").matches) {
      if (window.location.pathname === "/") {
        if (Scroll < 605) {
          dispatch({ type: "SCROLL_UP" });
        } else {
          dispatch({ type: "SCROLL_DOWN" });
        }
      } else {
        if (Scroll < 388) {
          dispatch({ type: "SCROLL_UP" });
        } else {
          dispatch({ type: "SCROLL_DOWN" });
        }
      }
    } else {
      if (window.location.pathname === "/") {
        if (Scroll < 700) {
          dispatch({ type: "SCROLL_UP" });
        } else {
          dispatch({ type: "SCROLL_DOWN" });
        }
      } else {
        if (Scroll < 553) {
          dispatch({ type: "SCROLL_UP" });
        } else {
          dispatch({ type: "SCROLL_DOWN" });
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", _.throttle(ScrollHandler, 300));
  }, [active]);
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