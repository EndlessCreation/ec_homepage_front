import React from 'react';
import styled from 'styled-components';
import EcPickBox from '../atoms/EcPickBox';
import {useMediaQuery} from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

const items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const BlockforEcPick=styled.div`
@media screen and (min-width:1280px){
    padding-left: 23%;
    padding-bottom:120px;
    overflow:hidden;
}

<<<<<<< HEAD
@media screen and (min-width:768px) and (max-width:1279px){
=======
@media screen and (min-width:640px) and (max-width:1279px){
>>>>>>> ac259fa89582fdebcb5a3033460967d6734f294e
  padding-left: 2.5%;
  padding-bottom:89px;
  overflow:hidden;
}

@media screen and (max-width:767px){
  padding-left: 2.5%;
padding-bottom:64px;
overflow:hidden;
}
`;



function ECPickContentBox(){
  const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
    })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width:1279px)' })
    const isMobile = useMediaQuery({ query: ' (max-width: 767px)' })


    const settings = {
        adaptiveHeight:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.245,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed:2500,
        pauseOnHover:true,
        centerMode: false,
      };

      const settingsforTablet={
        adaptiveHeight:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.055,
        slidesToScroll: 1,
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
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed:2500,
        pauseOnHover:true,
        centerMode: false,
      }
       
    return (
        <BlockforEcPick>
            {isPc&&<StyledSlider {...settings}>
            {items.map(item => {
              return (
                  <EcPickBox key={item.id} />
              );
            })}
          </StyledSlider>}
          {isTablet&&<StyledSlider rows="2" {...settingsforTablet}>
            {items.map(item => {
              return (
                  <EcPickBox key={item.id} />
              );
            })}
          </StyledSlider>}
          {isMobile&&<StyledSlider rows="2" {...settingsforMobile}>
            {items.map(item => {
              return (
                  <EcPickBox key={item.id} />
              );
            })}
          </StyledSlider>}
        </BlockforEcPick>
    );  
}

export default ECPickContentBox;