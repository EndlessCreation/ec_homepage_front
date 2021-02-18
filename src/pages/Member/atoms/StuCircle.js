import React from 'react';
import styled from 'styled-components';
import Size from '../../../Size';

//항목의 text부분
const Text = styled.div`
position: absolute;
flex: 1;

text-align: center;
margin: 0 auto;
font-family: NanumSquareR;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.75;
letter-spacing: normal;
background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
color: #232323;


@media screen and ${Size.device.tablet}
{
    position: absolute;
 

    text-align: center;
    margin: 0 auto;

    font-family: NanumSquareR;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: center;
    color: #232323;
}
@media screen and ${Size.device.moblie}{
    position: absolute;


    text-align: center;
    margin: 0 auto;
  
    font-family: NanumSquareR;
    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: center;
    color: #232323;
}
`;

// 파트장 표시
const Part = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  background: #232323;
  border-radius: 83px;
  opacity: 1;
  z-index: 5;
  display: block;
  align-items: center;
  justify-content: center;

    font-family: Kanit;
    font-size: 24px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;

  @media only screen and ${Size.device.tablet} {
    position: absolute;
    width: 30px;
    height: 30px;

    font-family: Kanit;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  @media only screen and ${Size.device.moblie} {
    position: absolute;
    width: 26px;
    height: 26px;

    font-family: Kanit;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
`;

const StudInfoBlock = styled.div`
width: 156px;
height: 156px;
display: flex;
justify-content: center;
align-items: center;
background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
border-radius: 68px;
opacity: 1;
margin-bottom: 16px;

}

@media screen and ${Size.device.tablet}
{
    width: 140px;
    height: 140px;
    border-radius: 60px;
}

@media screen and ${Size.device.moblie}
{
    width: 93px;
    height: 93px;
    border-radius: 38px;
    margin-bottom: 12px;
}
`;

function StuCircle({stud}){
    return(
      <>
      {(function () {
            if (stud.part) return <Part>P</Part>;
          })()}
    <StudInfoBlock>
        <Text>{stud.name} {stud.grade}<br />
        {stud.tech}<br />
        {stud.tech2}</Text>
    </StudInfoBlock>
    </>
    );
}

export default StuCircle;
