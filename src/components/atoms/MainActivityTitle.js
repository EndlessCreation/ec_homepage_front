import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 21px;
  font-family: NanumSqaureExtraBold;
  line-height: 24px;
  ::after {
    content: "";
    display: block;
    margin-top: 16px;
    margin-bottom: 26px;
    border-bottom: 2px solid #232323;
    width: 72px;
    background-color: #232323;
  }
  @media screen and (max-width: 1279px) {
    font-size: 18px;
    list-style: 21px;
    ::after {
      margin-top: 14px;
      margin-bottom: 21px;
    }
  }
  @media screen and (max-width: 767px) {
    ::after {
      margin-top: 17px;
      margin-bottom: 21px;
    }
  }
`;
function ActivityTitle({ children }) {
  return <Title>{children}</Title>;
}

export default React.memo(ActivityTitle);
