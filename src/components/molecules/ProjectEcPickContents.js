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
      bottom: -66px;
      display: block;
  
      width:850px;

      @media screen and (min-width:768px) and (max-width:1279px){
          bottom:-54px;
          width:592px;
      }

      @media screen and (max-width:767px){
          bottom:-32px;
          width:288px;  
      }
  
      list-style: none;
  
      text-align: right;
    }
  
    .slick-dots li {
      width: 18px;
      height:6px;
      margin-left:18px;
      transition: 0.4s;

      @media screen and (min-width:768px) and (max-width:1279px){
          width:16px;
          height:5px;
          margin-left:12px;
      }

      @media screen and (max-width:767px){
          width:18px;
          height:4px;
          margin-left:12px;
      }
    }
  
    .slick-dots .slick-active {
        width:108px;
        height:6px;
    transtion:0.4s;

    @media screen and (min-width:768px) and (max-width:1279px){
      width: 72px;
      height:5px;
    }

    @media screen and (max-width:767px){
        width:52px;
        height:4px;
    }
    }

    .ft-slick__dots--custom {
        height: 6px;
        width: 100%;
        background-color: #e5e7e9;
        position: relative;
        transition:0.4s;
      }

    .ft-slick__dots--custom--tablet{
      width: 100%;
      height:5px;
      background-color: #e5e7e9;
      position: relative;
      transition:0.4s;
    }

    .ft-slick__dots--custom--mobile {
        height: 4px;
        width: 100%;
        background-color: #e5e7e9;
        position: relative;
        transition:0.4s;
      }
  

    .slick-dots .slick-active .ft-slick__dots--custom {
        background-color:#232323;
        width: 100%;
        overflow: hidden;
        transition:0.4s;
      }

      .slick-dots .slick-active .ft-slick__dots--custom--tablet {
        background-color:#232323;
        width: 100%;
        height:5px;
        overflow:hidden;
        transition:0.4s;
      }
  
  
    .slick-dots .slick-active .ft-slick__dots--custom--mobile {
      background-color:#232323;
      width: 100%;
      overflow: hidden;
      transition:0.4s;
    }
}
    
`;

const BlockforEcPick=styled.div`
@media screen and (min-width:1280px){
    padding-left: 266px;
    width:879px;
    padding-bottom:192px;
    overflow:hidden;
}
@media screen and (min-width:768px) and (max-width:1279px){
  padding-bottom:148px;
  overflow:hidden;
}
@media screen and (max-width:767px){
padding-bottom:100px;
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
  }, [dispatch,ecpick]);
  if (loading) return <div><Loader/></div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!ecpick) return null;


    const settings = {
        dots: true,
        speed: 1000,
        arrows: false,
        slidesToShow:2,
        slidesToScroll: 2,
        centerMode: false,
        appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>
      };

      const settingsforTablet={
        dots: true,
        speed: 500,
        slidesToShow: 2,
        rows:2,
        slidesToScroll: 2,
        arrows: false,
        centerMode: false,
        appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom--tablet"></div>
      };

      const settingsforMobile={
        dots: true,
        speed: 500,
        slidesToShow: 1,
        rows:2,
        slidesToScroll: 2,
        arrows: false,
        centerMode: false,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => <div className="ft-slick__dots--custom--mobile"></div>
          };

    return (
        <BlockforEcPick>
            {isPc&&<StyledSlider {...settings}>
            {ecpick.map((data,index)=> {
              return (
                  <EcPickBox key={data.id} project={data} />
              );
            })}
          </StyledSlider>}
          {isTablet&&<StyledSlider {...settingsforTablet}>
            {ecpick.map((data,index) => {
              return (
                  <EcPickBox key={data.id} project={data} />
              );
            })}
          </StyledSlider>}
          {isMobile&&<StyledSlider {...settingsforMobile}>
            {ecpick.map((data,index) => {
              return (
                  <EcPickBox key={data.id} project={data} />
              );
            })}
          </StyledSlider>}
        </BlockforEcPick>
    );  
}
export default React.memo(ECPickContentBox); 