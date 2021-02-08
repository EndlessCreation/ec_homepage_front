import React from "react";
import ProjectBox from '../atoms/ProjectBox';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';
import { useState } from 'react';

const BlockforProjectContent=styled.div`
@media screen and (min-width:1280px){
    padding-left: 23%;
    padding-bottom:160px;
    max-width:936px;
}

@media screen and (min-width:768px)and (max-width:1279px){
  padding-left:2.5%;
  padding-bottom:120px;
}

@media screen and (max-width:767px){
  padding-left:2.5%;
  padding-bottom:100px;
}

`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

function ProjectContentBox() {

  const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
    })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width:1279px)' })
    const isMobile = useMediaQuery({ query: ' (max-width: 767px)' })

    const [number,setNumber]=useState(1);

  const settings = {
    adaptiveHeight:true,
    dots: true,
    infinite: true,
    speed: 500,
    rows:3,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:<FiChevronLeft type="button" class='slick-prev'/>,
    nextArrow:<FiChevronRight type="button" class='slick-next'/>,
    centerMode: false,
  };

  const settingsforTablet={
    adaptiveHeight:true,
    dots: true,
    infinite: true,
    speed: 500,
    rows:3,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    centerMode: false,
  };

  const settingsforMobile={
    adaptiveHeight:true,
    dots: true,
    infinite: true,
    speed: 500,
    rows:3,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay:true,
    autoplaySpeed:2500,
    pauseOnHover:true,
    centerMode: false,
  }
   
return (
    <BlockforProjectContent>
        {isPc&&<StyledSlider {...settings}>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item => {
          return (
              <ProjectBox key={item.id} />
          );
        })}
      </StyledSlider>}
      {isTablet&&<StyledSlider {...settingsforTablet}>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item => {
          return (
              <ProjectBox key={item.id} />
          );
        })}
      </StyledSlider>}
      {isMobile&&<StyledSlider {...settingsforMobile}>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item => {
          return (
              <ProjectBox key={item.id} />
          );
        })}
      </StyledSlider>}
    </BlockforProjectContent>
);  
}

export default ProjectContentBox;

