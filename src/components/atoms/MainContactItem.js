import React from "react";
import styled from "styled-components";

const Item = styled.li`
  font-family: NanumSquareRegular;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: normal;
  list-style: none;
  @media screen and (max-width: 1279px) {
    font-size: 14px;
    list-style: 26px;
  }
`;
function ContactItem({ children }) {
  return <Item>{children}</Item>;
}

export default React.memo(ContactItem);
