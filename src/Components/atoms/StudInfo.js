import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import StuCircle from './StuCircle';
import './Slide.css';
import Size from '../../Size';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useMediaQuery} from 'react-responsive';

//항목의 text부분
const Text = styled.div`
padding-top: 33px;
width: 10px;
height: 10px;
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
`;


const studs = [
    {
      id: 1,
      name: '일개발',
      tech: 'JAVA',
      tech2: '안드로이드',
      part: true
    },
    {
        id: 2,
        name: '이개발',
        tech: '안드로이드',
        tech2: 'C++',
        part: false
    },
    {
        id: 3,
        name: '삼개발',
        tech: 'JAVA',
        tech2: '서버',
        part: false
    },
    {
        id: 4,
        name: '사개발',
        tech: 'JAVA',
        tech2: '프론트엔드',
        part: false
    },
    {
      id: 5,
      name: '오개발',
      tech: 'JAVA',
      part: true
    },
    {
    id: 6,
    name: '육개발',
    tech: 'JAVA',
    tech2: '보안',
    part: false
    },
  {
    id: 7,
    name: '칠개발',
    tech: 'JAVA',
    part: true
  },
  {
    id: 8,
    name: '팔개발',
    tech: 'JAVA',
    part: false
  },
  {
    id: 9,
    name: '구개발',
    tech: 'JAVA',
    part: false
  },
  {
    id: 10,
    name: '십개발',
    tech: 'JAVA',
    part: false
  },
  {
    id: 11,
    name: '십일개발',
    tech: 'JAVA',
    part: true
  },
  {
    id: 12,
    name: '십이개발',
    tech: 'JAVA',
    part: false
  },
  {
    id: 13,
    name: '십삼개발',
    tech: 'JAVA',
    part: false
  },
  {
    id: 14,
    name: '십사개발',
    tech: 'JAVA',
    part: false
  },
  {
    id: 15,
    name: '십오개발',
    tech: 'JAVA',
    part: false
  },
  {
    id: 16,
    name: '십육개발',
    tech: 'JAVA',
    part: false
  },
  {
    id: 17,
    name: '십칠칠개발',
    tech: 'JAVA',
    part: false
  }
];

const Block = styled.div`
width: 848px;
margin: 0 auto;

@media screen and ${Size.device.tablet}
{
  width: 608px;
  margin: 0 auto;
}

@media screen and ${Size.device.moblie}
{
  width: 303px;
  margin: 0 auto;
}
`
function StudInfo(){
  const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const isTablet = useMediaQuery({query: '(min-width: 640px) and (max-width: 1279px)'})
  const isMoblie = useMediaQuery({query:  '(max-width: 639px)'})

  const settings = {
    dots : true,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 5, 
    speed: 500,
    rows: 3, // 3행
  }

  const settingsforTablet = {
    dots : true,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 4, 
    speed: 500,
    rows: 2,
  }

  const settingsforMoblie = {
    dots : true,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 3, 
    speed: 500,
    rows: 4,
  }

  return (
    <Block>
        {isPc&&<Slider {...settings}>
          {studs.map(stud => {
              return (
                  <StuCircle key={stud.id} />
              );}
          )}
        </Slider>}
        {isTablet&&<Slider {...settingsforTablet}>
          {studs.map(stud => {
              return (
                  <StuCircle key={stud.id} />
              );}
          )}
        </Slider>}
        {isMoblie&&<Slider {...settingsforMoblie}>
          {studs.map(stud => {
              return (
                  <StuCircle key={stud.id} />
              );}
          )}
        </Slider>}
    </Block>
  )
}

export default StudInfo;