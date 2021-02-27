import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useGlobalState, useGlobalDispatch } from "../../context/GlobalContext";

const LinkList = styled.li`
  list-style: none;
  .link {
    text-decoration: none;
    color: #ffffff;
    display: inline-block;
  }
  ${(props) =>
    props.ScrollState &&
    css`
      .link {
        color: black;
      }
    `}

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
  const ScrollState = state.ScrollState;
  const OffToggle = useCallback(() => {
    dispatch({
      type: "TOGGLE_OFF",
    });
  }, [active]);

  return (
    <LinkList active={active} onClick={OffToggle} ScrollState={ScrollState}>
      <Link to={to} className="link">
        {children}
      </Link>
    </LinkList>
  );
}

export default React.memo(LinkItem);
