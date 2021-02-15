import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

/*네이게이션 바 EC 텍스트*/
const NavbarEc = styled.span`
=======
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";

import LinkItem from "./LinkItem";
import { useBtnState } from "../../Context/MainContext";
/*네이게이션 바 EC 텍스트*/
const Text = styled.span`
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  display: inline-block;
  font-family: Kanit;
  line-height: 35px;
  font-size: 24px;
  color: #101010;
  font-weight: bold;
  white-space: nowrap;
  @media screen and (max-width: 1280px) {
    font-size: 31px;
<<<<<<< HEAD
=======
    ${(props) =>
      props.Active &&
      css`
        color: #fff;
      `}
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  }
`;

function NavbarMain() {
<<<<<<< HEAD
=======
  const Active = useBtnState();
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  /*Pc와 태블릿&&모바일 다른 텍스트 구현 */
  const isPC = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const NavbarEcText = isPC ? "Endless Creation" : "EC";
<<<<<<< HEAD
  return <NavbarEc>{NavbarEcText}</NavbarEc>;
=======
  return (
    <Text Active={Active}>
      <LinkItem to={"/"}>{NavbarEcText}</LinkItem>
    </Text>
  );
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
}

export default NavbarMain;
