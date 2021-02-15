<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import Size from '../../Size';

//항목의 text부분
const Text = styled.div`
position: absolute;
padding-top: 41px;
width: 156px;
height: 156px;
vertical-align: middle;
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
display: none;

@media screen and ${Size.device.tablet}
{
    position: absolute;
    padding-top: 36px;
    width: 140px;
    height: 140px;
    text-align: center;
    margin: 0 auto;
    vertical-align: middle;
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
media screen and ${Size.device.moblie}{
    position: absolute;
    padding-top: 20px;
    width: 93px;
    height: 93px;
    text-align: center;
    margin: 0 auto;
    vertical-align: middle;    
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
  background: #a0a0a0 0% 0% no-repeat padding-box;
  border-radius: 83px;
  opacity: 1;
  z-index: 5;
  display: block;
  align-items: center;
  justify-content: center;

  @media only screen and ${Size.device.tablet} {
    position: absolute;
    width: 30px;
    height: 30px;
  }

  @media only screen and ${Size.device.moblie} {
    position: absolute;
    width: 26px;
    height: 26px;
  }
`;

const StudInfoBlock = styled.div`
width: 156px;
height: 156px;
background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
border-radius: 68px;
opacity: 1;
margin-bottom: 16px;

/* pc버전 : hover */
&:hover {
  background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
  background: #B0B0B0 0% 0% no-repeat padding-box;

  ${Text}{
    display: initial;
}

}

@media screen and ${Size.device.tablet}
{
    width: 140px;
    height: 140px;
}

@media screen and ${Size.device.moblie}
{
    width: 93px;
    height: 93px;
    margin-bottom: 12px;
}
`;

function StuCircle({stud}){
    return(
    <StudInfoBlock>
        {(function () {
            if (stud.part) return <Part />;
          })()}
        <Text>{stud.name} {stud.grade}</Text><br />
        <Text>{stud.tech}</Text><br />
        <Text>{stud.tech2}</Text>
    </StudInfoBlock>
    );
}

export default StuCircle;
=======
import React from "react";
import styled from "styled-components";
import StudInfo from "./StudInfo";
import { useStudState } from "../../Context/StudProvider";
const Circle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  margin-bottom: 16px;
`;

function StuCircle() {
  const studs = useStudState();
  return (
    <Circle>
      {studs.map((stud) => (
        <StudInfo
          key={stud.id}
          id={stud.id}
          name={stud.name}
          tech={stud.tech}
          tech2={stud.tech2}
          part={stud.part}
        />
      ))}
    </Circle>
  );
}

export default StuCircle;
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
