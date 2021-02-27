import React from "react";
import styled, { css } from "styled-components";

import { useGlobalState } from "../../Context/GlobalContext";
import Linkitem from "../atoms/MainLinkItem";
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
const CommunutyLink = styled.li`
  list-style: none;
  color: #ffffff;
  @media screen and (max-width: 1279px) {
    ${(props) =>
      props.active &&
      css`
        color: #fff;
      `}
  }
`;

const ArrowRightShow = styled.span`
  position: relative;
  width: 15px;
  height: 15px;
  font-size: 15px;
  margin-left: 4px;
  color: #fff;
`;

function NavbarMenu() {
  const state = useGlobalState();
  const active = state.NavState;
  return (
    <MenuShow active={active}>
      <Linkitem to={"/Activity"}>Activity</Linkitem>
      <Linkitem to={"/Project"}>Project</Linkitem>
      <Linkitem to={"/Member"}>Member</Linkitem>
      <CommunutyLink active={active}>
        Community
        <ArrowRightShow>
          <img src="images/RightArrow.png" alt="RightArrow" />
        </ArrowRightShow>
      </CommunutyLink>
    </MenuShow>
  );
}

export default NavbarMenu;
