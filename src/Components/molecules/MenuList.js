import React from "react";
import styled from "styled-components";

const NavList = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: #101010;
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
        </ArrowRightShow>
      </NavList>
    </>
  );
}

export default MenuList;
