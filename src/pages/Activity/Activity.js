// import Home from './Home'
// import HomeTablet from './HomeTablet'
// import HomeMobile from './HomeMobile'
import MonthList from './Month';
import MonthListTablet from './MonthTablet'
import MonthListMobile from './MonthMobile'
import Photo from './Photo';
import PhotoTablet from './PhotoTablet';
import PhotoMobile from './PhotoMobile';

import Footer from './Footer';


import {PhotoProvider} from '../../Context/PhotoProvider';
import {MonthProvider} from '../../Context/MonthProvider';

import { MainProvider } from "../../Context/MainContext";
import MainNavbar from "../Main/MainNavbar";

import IntroContainer from "../Project/organisms/IntroContainer";
//import {PhotoProvider} from './GetApi';

import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

// const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 })
//   return isNotMobile ? children : null
// }


function Activity() {
  return (
    <>
    {/* <HomeTablet name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></HomeTablet>
    <MonthListTablet></MonthListTablet> */}
    {/* <MainNavbar /> */}

    <IntroContainer main="Activity" intro='2021년 Endless Creation 에서는' intro2='아래와 같은 활동을 준비하고 있어요!'></IntroContainer>

    <Desktop>
    <MainProvider>
      <MainNavbar />
    </MainProvider>
    {/* <Home name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></Home> */}
    <MonthProvider>
      <MonthList></MonthList>
    </MonthProvider>
    <PhotoProvider>
      <Photo></Photo>
    </PhotoProvider>
    </Desktop>
  

    <Tablet>
    <MainProvider>
      <MainNavbar />
    </MainProvider>
    {/* <HomeTablet name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></HomeTablet> */}
    <MonthProvider>
      <MonthListTablet></MonthListTablet>
    </MonthProvider>
    <PhotoProvider>
      <PhotoTablet></PhotoTablet>
    </PhotoProvider>
    </Tablet>


    <Mobile>
    <MainProvider>
      <MainNavbar />
    </MainProvider>
    {/* <HomeMobile name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></HomeMobile> */}
    <MonthProvider>
      <MonthListMobile></MonthListMobile>
    </MonthProvider>
    <PhotoProvider>
      <PhotoMobile></PhotoMobile>
    </PhotoProvider>
    </Mobile>

    <Footer></Footer>

    </>
  );
}

export default Activity;