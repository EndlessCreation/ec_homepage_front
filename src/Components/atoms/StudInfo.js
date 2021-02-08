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
      name: '일개발',
      grade: '25기',
      tech: 'JAVA',
      tech2: '안드로이드',
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
`
const Slash = styled.div`
position: absolute;
transform : translate(-232px, 468px);
color: #c4c4c4;
opacity: 1;
z-index: 2;
font-size: 22px;
`

const NextPages = styled.div`
position: absolute;
transform : translate(-214px, 468px);
color: #c4c4c4;
opacity: 1;
z-index: 2;
font-size: 24px;
`


function StudInfo(){
  const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const isTablet = useMediaQuery({query: '(min-width: 640px) and (max-width: 1279px)'})
  const isMoblie = useMediaQuery({query:  '(max-width: 639px)'})

  const Totalslides = Math.ceil(studs.length/15);

  const [number, setNumber] = useState(1);
 
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  const settings = {
    dots : false,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 5, 
    speed: 500,
    rows: 3, // 3행
    slidesToScroll: 5,
    prevArrow : <FiChevronLeft type='button' class='slick-prev' onClick={onDecrease}/>,
    nextArrow : <FiChevronRight type='button' class='slick-next' onClick={onIncrease}/> 
  }


  const settingsforTablet = {
    dots : false,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 4, 
    speed: 500,
    rows: 2,
    slidesToScroll: 4,
    prevArrow : <FiChevronLeft type='button' class='slick-prev' />,
    nextArrow : <FiChevronRight type='button' class='slick-next' />
  }

  const settingsforMoblie = {
    dots : false,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 3, 
    speed: 500,
    rows: 4,
    slidesToScroll: 3,
    prevArrow : <FiChevronLeft type='button' class='slick-prev' onClick={onDecrease}/>,
    nextArrow : <FiChevronRight type='button' class='slick-next' onClick={onIncrease}/>
  }

  return (
    <Block>
        <PrevPages>{number}</PrevPages>
        <Slash>/</Slash>
        <NextPages>{Totalslides}</NextPages>
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