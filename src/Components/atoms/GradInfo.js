<<<<<<< HEAD
import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import GradCircle from './GradCircle';
import './Slide.css';
import Size from '../../Size';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useMediaQuery} from 'react-responsive';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';

const grads = [
  {
    id: 1,
    name: 'Abacdfrgd',
    position: '백엔드백엔드백엔',
    grade: '22기',
    company: 'SAMSUNGSAMS'

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
},
{
  id: 17,
  name: '십이개발',
  position: '프론트엔드',
  grade: '9기',
  company: 'NAVER'
}
];

const Block = styled.div`
width: 848px;
margin: 0 auto;
.slick-prev{
  transform : translate(-250px, 117px);
  z-index: 2;
  position: absolute;
  opacity: 1;
  color: #c4c4c4;
}
.slick-next{
  z-index: 2;
  position: absolute;
  opacity: 1;
  color: #c4c4c4;
  transform : translate(-1050px, 117px);
}


@media screen and ${Size.device.tablet}
{
  width: 608px;
  margin: 0 auto;
  .slick-prev{
    transform : translate(510px, -218px);
    z-index: 2;
    position: absolute;
    opacity: 1;
    color: #c4c4c4;
  }
  .slick-next{
    z-index: 2;
    position: absolute;
    opacity: 1;
    color: #c4c4c4;
    transform : translate(-45px, -218px);
  }
}

@media screen and ${Size.device.moblie}
{
  width: 304px;
  margin: 0 auto;
  .slick-prev{
    transform : translate(250px, -258px);
    z-index: 2;
    position: absolute;
    opacity: 1;
    color: #c4c4c4;
  }
  .slick-next{
    z-index: 2;
    position: absolute;
    opacity: 1;
    color: #c4c4c4;
    transform : translate(-28px, -258px);
  }
}
`

const PrevPages = styled.div`
position: absolute;
z-index: 2;
transform : translate(-252px, 252px);
color: #c4c4c4;
opacity: 1;
font-size: 24px;

@media screen and ${Size.device.tablet}
{
  position: absolute;
  transform : translate(510px, -92.5px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}

@media screen and ${Size.device.moblie}
{
  position: absolute;
  transform : translate(245px, -94px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}

`
const Slash = styled.div`
position: absolute;
transform : translate(-232px, 252px);
color: #c4c4c4;
opacity: 1;
z-index: 2;
font-size: 22px;

@media screen and ${Size.device.tablet}
{
  position: absolute;
  transform : translate(534px, -92.5px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}

@media screen and ${Size.device.moblie}
{
  position: absolute;
  transform : translate(260px, -94px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}
`

const NextPages = styled.div`
position: absolute;
transform : translate(-214px, 252px);
color: #c4c4c4;
opacity: 1;
z-index: 2;
font-size: 24px;

@media screen and ${Size.device.tablet}
{
  position: absolute;
  transform : translate(553px, -92.5px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}

@media screen and ${Size.device.moblie}
{
  position: absolute;
  transform : translate(271px, -94px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}
`


function GradInfo(){
  const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const isTablet = useMediaQuery({query: '(min-width: 640px) and (max-width: 1279px)'})
  const isMoblie = useMediaQuery({query:  '(max-width: 639px)'})

  
  const PCTotalslides = Math.ceil(grads.length/12);
  const TABLETTotalslides = Math.ceil(grads.length/10);
  const MOBLIETotalslides = Math.ceil(grads.length/16);
  
  const [number, setNumber] = useState({currentPage:1});

  const settings = {
    dots : false,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 6, 
    slidesToScroll: 1,
    speed: 500,
    rows: 2, // 3행
    slidesToScroll: 6,
    prevArrow : <FiChevronLeft type='button' class='slick-prev' />,
    nextArrow : <FiChevronRight type='button' class='slick-next' />,
    afterChange : (currentPage) => {
      if(currentPage!==0)
      {
        setNumber({currentPage: currentPage-1});
      }
      else
      setNumber({currentPage:1});
    }
  }

  const settingsforTablet = {
    dots : false,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 5, 
    speed: 500,
    rows: 2,
    slidesToScroll: 5,
    prevArrow : <FiChevronLeft type='button' class='slick-prev' />,
    nextArrow : <FiChevronRight type='button' class='slick-next' />,
    afterChange : (currentPage) => {
      if(currentPage!==0)
      {
        setNumber({currentPage: currentPage-2});
      }
      else
      setNumber({currentPage:1});
    }
  }

  const settingsforMoblie = {
    dots : false,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 4, 
    speed: 500,
    rows: 4,
    slidesToScroll: 4,
    prevArrow : <FiChevronLeft type='button' class='slick-prev' />,
    nextArrow : <FiChevronRight type='button' class='slick-next' />,
    afterChange : (currentPage) => {
      if(currentPage!==0)
      {
        setNumber({currentPage: currentPage+1});
      }
      else
      setNumber({currentPage:1});
    }
  }

  return (
    <Block>
        <PrevPages>{number.currentPage}</PrevPages>
        <Slash>/</Slash>
        {isPc&&<NextPages>{PCTotalslides}</NextPages>}
        {isMoblie&&<NextPages>{MOBLIETotalslides}</NextPages>}
        {isTablet&&<NextPages>{TABLETTotalslides}</NextPages>}

        {isPc&&<Slider {...settings}>
          {grads.map(grad => {
              return (
                  <GradCircle grad={grad} />
              );}
          )}
        </Slider>}
        {isTablet&&<Slider {...settingsforTablet}>
          {grads.map(grad => {
              return (
                  <GradCircle grad={grad} />
              );}
          )}
        </Slider>}
        {isMoblie&&<Slider {...settingsforMoblie}>
          {grads.map(grad => {
              return (
                  <GradCircle grad={grad} />
              );}
          )}
        </Slider>}
    </Block>
  )
}

export default GradInfo;
=======
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
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
