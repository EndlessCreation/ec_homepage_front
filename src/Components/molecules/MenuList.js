import React from "react";
<<<<<<< HEAD
import styled from "styled-components";

const NavList = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: #101010;
=======
import styled, { css } from "styled-components";
import { useBtnState } from "../../Context/MainContext";
import Linkitem from "../atoms/LinkItem";
const NavList = styled.li`
  list-style: none;
  @media screen and (max-width: 1280px) {
    ${(props) =>
      props.active &&
      css`
        color: #fff;
      `}
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
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
<<<<<<< HEAD
  return (
    <>
      <NavList>
        <a href="#">Activity</a>
      </NavList>
      <NavList>
        <a href="#">Project</a>
      </NavList>
      <NavList>
        <a href="#">Member</a>
      </NavList>
      <NavList>
        <a href="#">Community</a>
        <ArrowRightShow>
          <img src="images/RightArrow.png" />
=======
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
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
        </ArrowRightShow>
      </NavList>
    </>
  );
}

export default MenuList;
