<<<<<<< HEAD
import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import StuCircle from './StuCircle';
import './Slide.css';
import Size from '../../Size';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useMediaQuery} from 'react-responsive';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';


const Block = styled.div`
width: 848px;
margin: 0 auto;
.slick-prev{
  transform : translate(-250px, 218px);
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
  transform : translate(-1050px, 218px);
}

@media screen and ${Size.device.tablet}
{
  width: 608px;
  margin: 0 auto;
  .slick-prev{
    transform : translate(510px, -245px);
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
    transform : translate(-45px, -245px);
  }
}
@media screen and ${Size.device.moblie}
{
  width: 303px;
  margin: 0 auto;
  .slick-prev{
    transform : translate(250px, -300px);
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
    transform : translate(-28px, -300px);
  }
}
`

const studs = [
    {
      id: 1,
      name: 'AAAAAAAAAA',
      grade: '25기',
      tech: 'JASDJ',
      tech2: '안드로이드안드로이',
      part: true
    },
    {
        id: 2,
        name: '이개발',
        grade: '25기',
        tech: '안드로이드',
        tech2: 'C++',
        part: false
    },
    {
        id: 3,
        name: '삼개발',
        grade: '25기',
        tech: 'JAVA',
        tech2: '서버',
        part: false
    },
    {
        id: 4,
        name: '사개발',
        grade: '25기',
        tech: 'JAVA',
        tech2: '프론트엔드',
        part: false
    },
    {
      id: 5,
      name: '오개발',
      grade: '25기',
      tech: 'JAVA',
      part: true
    },
    {
    id: 6,
    name: '육개발',
    grade: '25기',
    tech: 'JAVA',
    tech2: '보안',
    part: false
    },
  {
    id: 7,
    name: '칠개발',
    grade: '25기',
    tech: 'JAVA',
    part: true
  },
  {
    id: 8,
    name: '팔개발',
    grade: '25기',
    tech: 'JAVA',
    part: false
  },
  {
    id: 9,
    name: '구개발',
    grade: '25기',
    tech: 'JAVA',
    part: false
  },
  {
    id: 10,
    name: '십개발',
    grade: '25기',
    tech: 'JAVA',
    part: false
  },
  {
    id: 11,
    name: '십일개발',
    grade: '25기',
    tech: 'JAVA',
    part: true
  },
  {
    id: 12,
    name: '십이개발',
    grade: '25기',
    tech: 'JAVA',
    part: false
  },
  {
    id: 13,
    name: '십삼개발',
    grade: '25기',
    tech: 'JAVA',
    part: false
  },
  {
    id: 14,
    name: '십사개발',
    grade: '25기',
    tech: 'JAVA',
    part: false
  },
  {
    id: 15,
    name: '십오개발',
    tech: 'JAVA',
    grade: '25기',
    part: false
  },
  {
    id: 16,
    name: '십육개발',
    grade: '25기',
    tech: 'JAVA',
    part: false
  },
  {
    id: 17,
    name: '십칠칠개발',
    grade: '25기',
    tech: 'JAVA',
    part: false
  }
];

const PrevPages = styled.div`
position: absolute;
z-index: 2;
transform : translate(-252px, 468px);
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
  transform : translate(245px, -93px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}

`
const Slash = styled.div`
position: absolute;
transform : translate(-232px, 468px);
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
  transform : translate(260px, -93px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}
`

const NextPages = styled.div`
position: absolute;
transform : translate(-214px, 468px);
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
  transform : translate(271px, -93px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}
`

function StudInfo(){
  const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const isTablet = useMediaQuery({query: '(min-width: 640px) and (max-width: 1279px)'})
  const isMoblie = useMediaQuery({query:  '(max-width: 639px)'})

  const PCTotalslides = Math.ceil(studs.length/15);
  const TABLETTotalslides = Math.ceil(studs.length/8);
  const MOBLIETotalslides = Math.ceil(studs.length/12);

  const [number, setNumber] = useState({currentPage:1});

  const settings = {
    dots : false,
    infinite: false, 
    slidesToShow: 5, 
    speed: 500,
    rows: 3, // 3행
    slidesToScroll: 5,
    prevArrow : <FiChevronLeft type='button' class='slick-prev'/>,
    nextArrow : <FiChevronRight type='button' class='slick-next'/>,
    afterChange : (currentPage) => {
      if(currentPage!==0)
      {
        setNumber({currentPage: currentPage+1});
      }
      else
      setNumber({currentPage:1});
    }
  }


  const settingsforTablet = {
    dots : false,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 4, 
    speed: 500,
    rows: 2,
    slidesToScroll: 4,
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
    slidesToShow: 3, 
    speed: 500,
    rows: 4,
    slidesToScroll: 3,
    prevArrow : <FiChevronLeft type='button' class='slick-prev' />,
    nextArrow : <FiChevronRight type='button' class='slick-next' />,
    afterChange : (currentPage) => {
      if(currentPage!==0)
      {
        setNumber({currentPage});
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
          {studs.map(stud => {
              return (
                  <StuCircle stud={stud} />
              );}
          )}
        </Slider>}
        {isTablet&&<Slider {...settingsforTablet}>
          {studs.map(stud => {
              return (
                  <StuCircle stud={stud} />
              );}
          )}
        </Slider>}
        {isMoblie&&<Slider {...settingsforMoblie}>
          {studs.map(stud => {
              return (
                  <StuCircle stud={stud} />
              );}
          )}
        </Slider>}
    </Block>
  )
}

export default StudInfo;
=======
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
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
