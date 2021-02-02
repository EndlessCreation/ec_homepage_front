import React, { useState } from "react";
import styled, { css } from "styled-components";
import NavbarMain from "../../Common/atoms/NavbarMain";
import NavbarMenu from "../../Common/organisms/NavbarMenu";
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
  }
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
`;
const HamburgerBtn = styled.div`
  position: absolute;
  right: 100px;
  margin-top: 10px;
  display: none;
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
    top: -5px;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 5px;
  }
  span:nth-child(4) {
    top: 15px;
  }
  @media screen and (max-width: 1280px) {
    display: block;
    top: 25px;
  }
`;
function MainNavbar() {
  const [active, setActive] = useState(false);
  const onToggle = () => {
    console.log(active);
    setActive(!active);
  };
  return (
    <NavbarTemplate active={active}>
      <NavbarMain />
      <NavbarMenu active={active} />
      <HamburgerBtn active={active} onClick={onToggle}>
        <a href="#">
          <span />
          <span />
          <span />
          <span />
        </a>
      </HamburgerBtn>
    </NavbarTemplate>
  );
}

export default MainNavbar;