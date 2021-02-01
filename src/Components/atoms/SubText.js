import React from "react";
import styled from "styled-components";
import Size from "../../Size";

const TextBlock = styled.div`
  padding-top: 8px;
  padding-left: 22.166666667%;

  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    24px/40px var(--unnamed-font-family-nanumsquare);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-101010);
  text-align: left;
  font: normal normal bold 24px/40px NanumSquare;
  letter-spacing: 0px;
  color: #101010;
  opacity: 1;

  @media screen and ${Size.device.tablet} {
    padding-top: 24px;
    padding-left: 0%;

    font-family: NanumSquareR;
    font-size: 1.125rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }

  @media screen and ${Size.device.moblie} {
    padding-top: 19px;
    padding-left: 0%;

    font-family: NanumSquareR;
    font-size: 1.125rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }
`;

function BigText() {
  return (
    <TextBlock>
      EC에는 여러분의 성장을 도와줄
      <br />
      든든한 운영진과 멋진 선배들이 있어요!
    </TextBlock>
  );
}
export default BigText;
