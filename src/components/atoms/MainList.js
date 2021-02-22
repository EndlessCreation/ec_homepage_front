import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  font-family: NanumSquareRegular;
  font-size: 16px;
  line-height: 28px;
  color: #232323;
  list-style: none;
  @media screen and (max-width: 1279px) {
    font-size: 14px;
    line-height: 26px;
  }
`;
function List({ Text }) {
  return <ListItem>{Text}</ListItem>;
}

export default List;
