import React,{useState} from "react";
import ProjectBox from '../atoms/ProjectBox';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';

import {useMediaQuery} from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';

const BlockforProjectContent=styled.div`
@media screen and (min-width:1280px){
    padding-left: 266px;
    padding-bottom:160px;
    width:880px;
}
@media screen and (min-width:768px)and (max-width:1279px){
  width:608px;
  padding-bottom:120px;
}
@media screen and (max-width:767px){
  padding-bottom:100px;
}
`;

const Pages = styled.div`
  @media screen and (min-width:1280px)
  {
    position: absolute;
z-index: 2;
width: 42px;
  height: 26px;
  font-family: NanumSquareRegular;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 2.4px;
  text-align: center;
  color: #afafaf;
    transform : translate(-191.2px, 600px);
  }
  @media screen and (min-width:768px) and (max-width:1279px)
  {
    width: 32px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: center;
  color: #afafaf;
  transform:translate(520px,-70px);
  }
`
;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
    @media screen and (min-width:1280px){
    .slick-prev{
      z-index: 2;
      position: absolute;
      transform : translate(-191.2px, 277px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next{
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform : translate(-1027px, 277px);
    }
  }
  @media screen and (min-width:768px) and (max-width:1279px)
  {
    .slick-prev{
      z-index: 2;
      position: absolute;
      transform : translate(520px, -320px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next{
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform : translate(-50px, -320px);
    }
  }
`;

const Pages = styled.div`

  @media screen and (min-width:1280px)
  {
    position: absolute;
z-index: 2;
width: 42px;
  height: 26px;
  font-family: NanumSquareRegular;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 2.4px;
  text-align: center;
  color: #afafaf;
    transform : translate(-191.2px, 600px);
  }

  @media screen and (min-width:768px) and (max-width:1279px)
  {
    width: 32px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: center;
  color: #afafaf;
  transform:translate(520px,-70px);
  }
`
;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }

    @media screen and (min-width:1280px){
    .slick-prev{
      z-index: 2;
      position: absolute;
      transform : translate(-191.2px, 277px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next{
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform : translate(-1027px, 277px);
    }
  }

  @media screen and (min-width:768px) and (max-width:1279px)
  {
    .slick-prev{
      z-index: 2;
      position: absolute;
      transform : translate(520px, -320px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next{
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform : translate(-50px, -320px);
    }
  }
  `

function ProjectContentBox() {
  const isPc = useMediaQuery({
    query: '(min-width: 768px)'
    })
    const isMobile = useMediaQuery({ query: ' (max-width: 767px)' })

  
    const PCTotalslides = Math.ceil(25/12);
    const MOBLIETotalslides = Math.ceil(25/6);
  
    const [state, setState] = useState({currentSlide:1});

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows:3,
    slidesToShow: 4,
    slidesToScroll:4,
    prevArrow : <FiChevronLeft type='button' class='slick-prev'/>,
    nextArrow : <FiChevronRight type='button' class='slick-next'/> ,
    centerMode: false,
    afterChange: (currentSlide) => {
      if(currentSlide!==0)
      {
        setState({currentSlide: currentSlide-2})
      }
      else
        setState({currentSlide:1})
    }
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
        {isPc&&<Pages>{state.currentSlide}/{PCTotalslides}</Pages>}
        {isMobile&&<Pages>{state.currentSlide}/{MOBLIETotalslides}</Pages>}
        {isPc&&<StyledSlider {...settings}>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(item => {
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

  const isPc = useMediaQuery({
    query: '(min-width: 768px)'
    })
    const isMobile = useMediaQuery({ query: ' (max-width: 767px)' })

  
    const PCTotalslides = Math.ceil(25/12);
    const MOBLIETotalslides = Math.ceil(25/6);
  
    const [state, setState] = useState({currentSlide:1});

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows:3,
    slidesToShow: 4,
    slidesToScroll:4,
    prevArrow : <FiChevronLeft type='button' class='slick-prev'/>,
    nextArrow : <FiChevronRight type='button' class='slick-next'/> ,
    centerMode: false,
    afterChange: (currentSlide) => {
      if(currentSlide!==0)
      {
        setState({currentSlide: currentSlide-2})
      }
      else
        setState({currentSlide:1})
    }
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
        {isPc&&<Pages>{state.currentSlide}/{PCTotalslides}</Pages>}
        {isMobile&&<Pages>{state.currentSlide}/{MOBLIETotalslides}</Pages>}
        {isPc&&<StyledSlider {...settings}>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(item => {
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