import React from "react";
import styled from "styled-components";
import Size from "../../Size";

//항목의 text부분
const Text = styled.div`
  padding-top: 33px;
  width: 110px;
  height: 74px;
  margin: 0 auto;

  font-family: NanumSquareR;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #232323;

  display: none;

  @media screen and ${Size.device.tablet} {
    padding-top: 36px;
    width: 76px;
    height: 69px;
    margin: 0 auto;

    font-family: NanumSquareR;
    font-size: 0.938rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: center;
    color: #232323;

    display: none;
  }

  @media screen and ${Size.device.moblie} {
    padding-top: 25px;
    width: 69px;
    height: 64px;
    margin: 0 auto;

    font-family: NanumSquareR;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: center;
    color: #232323;

    display: none;
  }
`;

//하나의 항목의 block 스타일링 , <<그냥 학생일경우>>
const StudInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 156px;
  height: 156px;
  background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 68px;
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

    width: 140px;
    height: 140px;
    background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
    background: #f2f2f2 0% 0% no-repeat padding-box;
    border-radius: 68px;
    opacity: 1;

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

    width: 93px;
    height: 93px;
    background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
    background: #f2f2f2 0% 0% no-repeat padding-box;
    border-radius: 68px;
    opacity: 1;

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

function StudInfo({ id, name, tech, tech2 }) {
  return (
    <StudInfoBlock>
      <Text>
        {name}
        <br />
        {tech}
        <br />
        {tech2}
      </Text>
    </StudInfoBlock>
  );
}

/* React.memo -> 다른 항목이 업데이트 될 때, 불필요한 렌더링을 방지하여 성능을 최적화 */
export default React.memo(StudInfo);
