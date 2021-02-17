import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

/*네이게이션 바 EC 텍스트*/
const NavbarEc = styled.span`
  display: inline-block;
  font-family: Kanit;
  line-height: 35px;
  font-size: 24px;
  color: #101010;
  font-weight: bold;
  white-space: nowrap;
  @media screen and (max-width: 1280px) {
    font-size: 31px;
  }
`;

function NavbarMain() {
  /*Pc와 태블릿&&모바일 다른 텍스트 구현 */
  const isPC = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const NavbarEcText = isPC ? "Endless Creation" : "EC";
  return <NavbarEc>{NavbarEcText}</NavbarEc>;
}

export default NavbarMain;
