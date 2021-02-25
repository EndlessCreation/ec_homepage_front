import React, {useEffect} from 'react';
import styled from 'styled-components';
import EcPickBox from '../atoms/ProjectEcPickBox';
import { useMediaQuery } from "react-responsive";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loader from "../atoms/CommonLoader";
import { useECState, useECDispatch, getEcpick } from "../../context/Context";


const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;s
    }
   
    .slick-dots {
      position: absolute;
      bottom: -60px;
      display: block;
  
      width:500px;
      padding-left:350px;
  
      list-style: none;
  
      text-align: right;
    }
    
    .ft-slick__dots--custom {
      height: 8px;
      width: 100%;
      background-color: #e5e7e9;
      position: relative;
      transition:0.4s;
    }
  
    .slick-dots li {
      width: 5%;
      height:6px;
      margin-left:18px;
      transition: 0.4s;
    }
  
    .slick-dots .slick-active {
      width: 20%;
      transtion:0.4s;
    }
  
    .slick-dots .slick-active .ft-slick__dots--custom {
      background-color:#232323;
      width: 100%;
      top: 2px;
      overflow: hidden;
      transition:0.4s;
    }

    
`;
const SliderBox=styled.div`
@media screen and (max-width:1280px)
{
    width:870px;
    
}
@media screen and (min-width:768px) and (max-width:1279px)
{
  width:592px;
}
`;

const BlockforEcPick=styled.div`
@media screen and (min-width:1280px){
    padding-left: 266px;
    width:879px;
    padding-bottom:120px;
    overflow:hidden;
}
@media screen and (min-width:768px) and (max-width:1279px){
  padding-bottom:89px;
  overflow:hidden;
}
@media screen and (max-width:767px){
padding-bottom:64px;
overflow:hidden;
}
`;




function ECPickContentBox({name}){
  const state = useECState();
  const dispatch = useECDispatch();
  const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
    })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width:1279px)' })
    const isMobile = useMediaQuery({ query: ' (max-width: 767px)' })


  const { data: ecpick, loading, error } = state.ecpick;
  useEffect(() => {
    if (!ecpick) {
      getEcpick(dispatch);
    }
  }, [dispatch]);
  if (loading) return <div><Loader/></div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!ecpick) return null;


    const settings = {
        dots: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
        appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>
      };

      const settingsforTablet={
        adaptiveHeight:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay:true,
        autoplaySpeed:2500,
        pauseOnHover:true,
        centerMode: false,
      };
      const settingsforMobile={
        adaptiveHeight:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.029,
        slidesToScroll: 2,
        arrows: false,
        autoplay:true,
        autoplaySpeed:2500,
        pauseOnHover:true,
        centerMode: false,
      }
       
    return (
        <BlockforEcPick>
          <SliderBox>
            {isPc&&<StyledSlider {...settings}>
            {ecpick.map((data)=> {
              return (
                  <EcPickBox project={data} />
              );
            })}
          </StyledSlider>}
          {isTablet&&<StyledSlider rows="2" {...settingsforTablet}>
            {ecpick.map(data => {
              return (
                  <EcPickBox project={data} />
              );
            })}
          </StyledSlider>}
          {isMobile&&<StyledSlider rows="2" {...settingsforMobile}>
            {ecpick.map(data => {
              return (
                  <EcPickBox project={data} />
              );
            })}
          </StyledSlider>}
          </SliderBox>
        </BlockforEcPick>
    );  
}
export default ECPickContentBox;