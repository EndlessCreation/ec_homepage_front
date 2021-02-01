import React from 'react';
import styled from 'styled-components';
import EcPickBox from '../atoms/EcPickBox';
import { useMediaQuery } from 'react-responsive'
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

const BlockforEcPickContent=styled.div`
    padding-left: 23%;
    padding-bottom:120px;
    overflow:hidden;
`;


function ECPickContentBox(){
    const settingsforPC = {
        adaptiveHeight:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
        autoplaySpeed:2500,
        pauseOnHover:true,
        centerMode: true,
      };
       
   const isPc = useMediaQuery({
    query: '(min-width: 1280px)'
    })
    const isTablet = useMediaQuery({ query: '(min-width: 640px) and (max-width:1239px)' })
    const isMobile = useMediaQuery({ query: '(min-width: 360px) and (max-width: 639px)' })
    return (
        <BlockforEcPickContent>
            {isPc&&<StyledSlider {...settingsforPC}>
            {items.map(item => {
              return (
                  <EcPickBox key={item.id} />
              );
            })}
          </StyledSlider>}
        </BlockforEcPickContent>
    );  
}

export default ECPickContentBox;