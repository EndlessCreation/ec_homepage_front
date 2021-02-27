import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useGlobalState, useGlobalDispatch } from "../../Context/GlobalContext";

const LinkList = styled.li`
  list-style: none;
  .link {
    text-decoration: none;
    color: #ffffff;
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
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();
  const active = state.NavState;
  const OffToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_OFF",
    });
  }, []);

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
