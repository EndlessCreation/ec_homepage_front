import React from 'react';
import styled from 'styled-components';

const Pages = styled.div`

  @media screen and (min-width:1280px)
  {
    position: absolute;
z-index: 2;
width: 56px;
  height: 26px;
  font-family: NanumSquareRegular;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 2.4px;
  text-align: right;
  color: #afafaf;
    transform : translate(-240px, 604px);
  }

  @media screen and (min-width:768px) and (max-width:1279px)
  {
    width: 40px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: right;
  color: #afafaf;
  transform:translate(518px,-80px);
  }

  @media screen and (max-width:767px)
  {
    width: 50px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: right;
  color: #afafaf;
  transform:translate(225px,-78px);
  }
`
;

function SlidePage({children}){
    return <Pages>{children}</Pages>
}

export default SlidePage;