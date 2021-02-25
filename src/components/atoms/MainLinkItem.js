import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useBtnState, useBtnOffToggle } from "../../context/Context";

const LinkList = styled.li`
  list-style: none;
  .link {
    text-decoration: none;
    color: #232323;
    display: inline-block;
  }
  @media screen and (max-width: 1280px) {
    ${(props) =>
      props.active &&
      css`
        .link {
          color: #fff;
        }
      `}
  }
`;
function LinkItem({ children, to }) {
  const active = useBtnState();
  const OffToggle = useBtnOffToggle();
  console.log(active);
  return (
    <LinkList active={active} onClick={OffToggle}>
      <Link to={to} className="link">
        {children}
      </Link>
    </LinkList>
  );
}

export default LinkItem;
