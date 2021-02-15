import Home from './Home'
import HomeTablet from './HomeTablet'
<<<<<<< HEAD
import MonthList from './Month';
import MonthListTablet from './MonthTablet'
import Photo from './Photo';

=======
import HomeMobile from './HomeMobile'
import MonthList from './Month';
import MonthListTablet from './MonthTablet'
import MonthListMobile from './MonthMobile'
import Photo from './Photo';
import PhotoTablet from './PhotoTablet';
import PhotoMobile from './PhotoMobile';

import {PhotoProvider} from './PhotoProvider';
import {MonthProvider} from './MonthProvider';

import GetPhoto from './GetApi';

import MainNavbar from '../Main/MainNavbar'
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
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674


function Activity() {
  return (
    <>
    {/* <HomeTablet name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></HomeTablet>
    <MonthListTablet></MonthListTablet> */}
<<<<<<< HEAD
    <Home name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></Home>
    <MonthList></MonthList>
    <Photo></Photo>
=======
    {/* <MainNavbar /> */}
    <Desktop>
    <Home name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></Home>
    <MonthProvider>
      <MonthList></MonthList>
    </MonthProvider>
    <PhotoProvider>
      <Photo></Photo>
    </PhotoProvider>
    <GetPhoto></GetPhoto>
    </Desktop>
  

    <Tablet>
    <HomeTablet name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></HomeTablet>
    <MonthProvider>
      <MonthListTablet></MonthListTablet>
    </MonthProvider>
    <PhotoProvider>
      <PhotoTablet></PhotoTablet>
    </PhotoProvider>
    </Tablet>


    <Mobile>
    <HomeMobile name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></HomeMobile>
    <MonthProvider>
      <MonthListMobile></MonthListMobile>
    </MonthProvider>
    <PhotoProvider>
      <PhotoMobile></PhotoMobile>
    </PhotoProvider>
    </Mobile>

>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
    </>
  );
}

export default Activity;
