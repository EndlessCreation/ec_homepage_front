import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import GradCircle from './GradCircle';
import './Slide.css';
import Size from '../../Size';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useMediaQuery} from 'react-responsive';

//항목의 text부분
const Text = styled.div`
padding-top: 26px;
width: 82px;
height: 74px;
margin: 0 auto;

font: var(--unnamed-font-style-normal) normal normal 16px/28px var(--unnamed-font-family-nanumsquare);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-232323);
text-align: center;
font: normal normal normal 16px/28px NanumSquare;
letter-spacing: 0px;
color: #232323;
opacity: 1;

display: none;

@media screen and ${Size.device.tablet}
{
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

@media screen and ${Size.device.moblie}
{
  padding-top: 12px;
  width: 50px;
  height: 40px;
margin: 0 auto;

font: var(--unnamed-font-style-normal) normal normal 16px/28px var(--unnamed-font-family-nanumsquare);
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

const grads = [
  {
    id: 1,
    name: '일개발',
    position: '백엔드',
    grade: '1기',
    company: 'SAMSUNG'

  },
  {
      id: 2,
      name: '이개발',
      position: '인공지능',
      grade: '2기',
    company: 'NAVER'

  },
  {
      id: 3,
      name: '삼개발',
      position: '프론트엔드',
      grade: '3기',
      company: 'SAMSUNG'
  },
  {
      id: 4,
      name: '사개발',
      position: '빅데이터',
      grade: '4기',
      company: 'KAKAO'
  },
  {
    id: 5,
    name: '오개발',
    position: '안드로이드',
    grade: '4기',
      company: 'LINE'
  },
  {
  id: 6,
  name: '육개발',
  position: '보안',
  grade: '5기',
  company: 'SAMSUNG'
  },
{
  id: 7,
  name: '칠개발',
  position: '통신',
  grade: '6기',
  company: 'SKT'
},
{
  id: 8,
  name: '팔개발',
  position: '프론트엔드',
  grade: '7기',
  company: 'KAKAO'
},
{
  id: 9,
  name: '구개발',
  position: '보안',
  grade: '8기',
  company: 'SAMSUNG'
},
{
  id: 10,
  name: '십개발',
  position: '안드로이드',
  grade: '4기',
  company: 'KAKAO'
},
{
  id: 11,
  name: '십일개발',
  position: '백엔드',
  grade: '9기',
  company: 'LINE'
},
{
  id: 12,
  name: '십이개발',
  position: '프론트엔드',
  grade: '9기',
  company: 'NAVER'
},
{
  id: 13,
  name: '십이개발',
  position: '프론트엔드',
  grade: '9기',
  company: 'NAVER'
},
{
  id: 14,
  name: '십이개발',
  position: '프론트엔드',
  grade: '9기',
  company: 'NAVER'
},
{
  id: 15,
  name: '십이개발',
  position: '프론트엔드',
  grade: '9기',
  company: 'NAVER'
},
{
  id: 16,
  name: '십이개발',
  position: '프론트엔드',
  grade: '9기',
  company: 'NAVER'
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
  width: 304px;
  margin: 0 auto;
}
`
function GradInfo(){
  const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const isTablet = useMediaQuery({query: '(min-width: 640px) and (max-width: 1279px)'})
  const isMoblie = useMediaQuery({query:  '(max-width: 639px)'})

  const settings = {
    dots : true,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 6, 
    slidesToScroll: 1,
    speed: 500,
    rows: 2, // 3행
  }

  const settingsforTablet = {
    dots : true,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 5, 
    speed: 500,
    rows: 2,
  }

  const settingsforMoblie = {
    dots : true,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 4, 
    speed: 500,
    rows: 4,
  }

  return (
    <Block>
        {isPc&&<Slider {...settings}>
          {grads.map(grad => {
              return (
                  <GradCircle key={grad.id} />
              );}
          )}
        </Slider>}
        {isTablet&&<Slider {...settingsforTablet}>
          {grads.map(grad => {
              return (
                  <GradCircle key={grad.id} />
              );}
          )}
        </Slider>}
        {isMoblie&&<Slider {...settingsforMoblie}>
          {grads.map(grad => {
              return (
                  <GradCircle key={grad.id} />
              );}
          )}
        </Slider>}
    </Block>
  )
}

export default GradInfo;