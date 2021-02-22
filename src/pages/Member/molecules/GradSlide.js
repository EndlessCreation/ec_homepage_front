import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import GradCircle from '../atoms/GradCircle';
import '../atoms/Slide.css';
import Size from '../../../Size';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useMediaQuery} from 'react-responsive';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';
import {
  useGraduateState,
  useGraduateDispatch,
  getGraduate
} from "../../../context/MemberContext";


const Block = styled.div`
width: 848px;
margin: 0 auto;
.slick-prev{
  transform : translate(-200px, 117px);
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
  transform : translate(-990px, 117px);
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
    transform : translate(230px, -258px);
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
transform : translate(-200px, 252px);
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
  transform : translate(230px, -94px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}

`
const Slash = styled.div`
position: absolute;
transform : translate(-178px, 252px);
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
  transform : translate(249px, -94px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}
`

const NextPages = styled.div`
position: absolute;
transform : translate(-157px, 252px);
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
  transform : translate(266px, -94px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 18px;
}
`


function GradSlide(){
  const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const isTablet = useMediaQuery({query: '(min-width: 640px) and (max-width: 1279px)'})
  const isMoblie = useMediaQuery({query:  '(max-width: 639px)'})
  
  const [number, setNumber] = useState({currentPage:1});
  const state = useGraduateState();
  const dispatch = useGraduateDispatch();
  const {data: graduate, loading, error} = state.graduate;

  useEffect(()=>{
    getGraduate(dispatch);
  }, [dispatch]);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!graduate) return null;

  const PCTotalslides = Math.ceil(graduate.length/12);
  const TABLETTotalslides = Math.ceil(graduate.length/10);
  const MOBLIETotalslides = Math.ceil(graduate.length/16);

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
        setNumber({currentPage: Math.ceil(currentPage/5)+1});
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
        setNumber({currentPage: Math.ceil(currentPage/5)+1});
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
        setNumber({currentPage: Math.ceil(currentPage/6)+1});
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
          {graduate.map((grad) => {
              return (
                  <GradCircle grad={grad} />
              );}
          )}
        </Slider>}
        {isTablet&&<Slider {...settingsforTablet}>
          {graduate.map((grad) => {
              return (
                  <GradCircle grad={grad} />
              );}
          )}
        </Slider>}
        {isMoblie&&<Slider {...settingsforMoblie}>
          {graduate.map((grad) => {
              return (
                  <GradCircle grad={grad} />
              );}
          )}
        </Slider>}
    </Block>
  )
}

export default GradSlide;
