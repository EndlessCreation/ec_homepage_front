import React,{useEffect, useState} from "react";
import ProjectBox from '../atoms/ProjectBox';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi'
import { getCount, getProject, ProjectProvider, useProjectDispatch, useProjectState } from "../../../context/ProjectContext";

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
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 2.4px;
  text-align: center;
  color: #afafaf;
    transform : translate(-230px, 606px);
  }

  @media screen and (min-width:768px) and (max-width:1279px)
  {
    width: 32px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: center;
  color: #afafaf;
  transform:translate(520px,-77px);
  }

  @media screen and (max-width:767px)
  {
    width: 30px;
  height: 20px;
  font-family: NanumSquareR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: right;
  color: #afafaf;
  transform:translate(225px,-80px);
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
      transform : translate(-245px, 277px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next{
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform : translate(-1050px, 277px);
    }
  }

  @media screen and (min-width:768px) and (max-width:1279px)
  {
    .slick-prev{
      z-index: 2;
      position: absolute;
      transform : translate(520px, -330px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next{
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform : translate(-50px, -330px);
    }
  }

  @media screen and (max-width:767px)
  {
    .slick-prev{
      z-index: 2;
      position: absolute;
      transform : translate(220px, -340px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next{
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform : translate(-40px, -340px);
    }
  }
`;


function ProjectContentBox() {

  const isPc = useMediaQuery({
    query: '(min-width: 768px)'
    })
    const isMobile = useMediaQuery({ query: ' (max-width: 767px)' })
  
    const [pageState, setState] = useState({currentSlide:1});
    const state=useProjectState();
    const dispatch=useProjectDispatch();
    const {data:project,loading,error}=state.project;
    const {data:count}=state.count;

    //console.log(project);
    //console.log(count);
    
    useEffect(()=>{
        getProject(dispatch);
        getCount(dispatch);
        console.log("프로젝트 데이터 받기");
        console.log("프로젝트 count 받기");
    },[dispatch]);

    if(loading) return <div>로딩중..</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!project) return null;
    if(!count) return null;

    const PCTotalslides = Math.ceil(96/12);
    const MOBLIETotalslides = Math.ceil(count.count/6);
    

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
        console.log(pageState.currentSlide);
        setState({currentSlide: Math.ceil(currentSlide/4)+1});
        console.log(currentSlide);  
      }
      else
        setState({currentSlide:1})
    }
  };

  const settingsforMobile={
    dots: false,
    infinite: false,
    speed: 500,
    rows:3,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false,
    prevArrow : <FiChevronLeft type='button' class='slick-prev'/>,
    nextArrow : <FiChevronRight type='button' class='slick-next'/>,
    afterChange: (currentSlide) => {
      if(currentSlide!==0)
      {
        console.log(pageState.currentSlide);
        setState({currentSlide: Math.ceil(currentSlide/2)+1});
        console.log(currentSlide);  
      }
      else
        setState({currentSlide:1})
    }
  }
   
  
return (
    <BlockforProjectContent>
        {isPc&&<Pages>{pageState.currentSlide}/{PCTotalslides}</Pages>}
        {isMobile&&<Pages>{pageState.currentSlide}/{MOBLIETotalslides}</Pages>}
        {isPc&&<StyledSlider {...settings}>
        {project.map((data)=> {
          return (
              <ProjectBox key={data.id}>{data.imageUrl}</ProjectBox>
          );
        })}
      </StyledSlider>}
      {isMobile&&<StyledSlider {...settingsforMobile}>
        {project.map(data => {
          return (
              <ProjectBox key={data.id}>{data.imageUrl}</ProjectBox>
          );
        })}
      </StyledSlider>}
    </BlockforProjectContent>
);  
}

export default ProjectContentBox;

