import React from "react";
import styled from "styled-components";
import Size from "../../Size";

//항목의 text부분
const Text = styled.div`
  padding-top: 26px;
  width: 82px;
  height: 74px;
  margin: 0 auto;

  font: var(--unnamed-font-style-normal) normal normal 16px/28px
    var(--unnamed-font-family-nanumsquare);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-232323);
  text-align: center;
  font: normal normal normal 16px/28px NanumSquare;
  letter-spacing: 0px;
  color: #232323;
  opacity: 1;

  display: none;

  @media screen and ${Size.device.tablet} {
    padding-top: 18px;
    width: 75px;
    height: 60px;
    margin: 0 auto;

    font-family: NanumSquareR;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: center;
    color: #232323;

    display: none;
  }

  @media screen and ${Size.device.moblie} {
    padding-top: 12px;
    width: 50px;
    height: 40px;
    margin: 0 auto;

    font: var(--unnamed-font-style-normal) normal normal 16px/28px
      var(--unnamed-font-family-nanumsquare);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-232323);
    text-align: center;
    font: normal normal normal 8px/15px NanumSquare;
    letter-spacing: 0px;
    color: #232323;
    opacity: 1;

    display: none;
  }
`;

//하나의 항목의 block 스타일링
const GradInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 128px;
  height: 128px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 54px;
  opacity: 1;

  /* pc버전 : hover */
  &:hover {
    background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
    background: #b0b0b0 0% 0% no-repeat padding-box;

    //hover하면 Text내용 보여주기
    ${Text} {
      display: initial;
    }
  }

  justify-content: space-between;
  margin-bottom: 16px;

  @media screen and ${Size.device.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 112px;
    height: 112px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 54px;
    opacity: 1;

    /* moblie버전 : hover */
    &:active {
      background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
      background: #b0b0b0 0% 0% no-repeat padding-box;
      // Text내용 보여주기
      ${Text} {
        display: initial;
      }
    }
    justify-content: space-between;
    margin-bottom: 16px;
  }

  @media screen and ${Size.device.moblie} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 67px;
    height: 67px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 54px;
    opacity: 1;

    /* moblie버전 : hover */
    &:active {
      background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
      background: #b0b0b0 0% 0% no-repeat padding-box;
      // Text내용 보여주기
      ${Text} {
        display: initial;
      }
    }
    justify-content: space-between;
    margin-bottom: 16px;
  }
`;

function GradInfo({ id, name, position, company, grade }) {
  return (
    <GradInfoBlock>
      <Text>
        {name} {grade}
        <br />
        {position}
        <br />
        {company}
      </Text>
    </GradInfoBlock>
  );
}

/* React.memo -> 다른 항목이 업데이트 될 때, 불필요한 렌더링을 방지하여 성능을 최적화 */
export default React.memo(GradInfo);
