import React from "react";
import styled, { css } from "styled-components";
import { useBtnState } from "../../../context/MainContext";
import Linkitem from "../atoms/MainLinkItem";
const NavList = styled.li`
  list-style: none;
  @media screen and (max-width: 1280px) {
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

function MenuList() {
  const active = useBtnState();
  return (
    <>
      <Linkitem to={"/Activity"}>Activity</Linkitem>
      <Linkitem to={"/Project"}>Project</Linkitem>
      <Linkitem to={"/Member"}>Member</Linkitem>
      <NavList active={active}>
        Community
        <ArrowRightShow>
          <img src="images/RightArrow.png" alt="RightArrow" />
        </ArrowRightShow>
      </NavList>
    </>
  );
}

export default MenuList;
