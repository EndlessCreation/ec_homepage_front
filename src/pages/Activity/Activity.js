import Home from './Home'
import HomeTablet from './HomeTablet'
import MonthList from './Month';
import MonthListTablet from './MonthTablet'
import Photo from './Photo';



function Activity() {
  return (
    <>
    {/* <HomeTablet name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></HomeTablet>
    <MonthListTablet></MonthListTablet> */}
    <Home name="Activity" explain='2021년 Endless Creation 에서는' explain2='아래와 같은 활동을 준비하고 있어요!'></Home>
    <MonthList></MonthList>
    <Photo></Photo>
    </>
  );
}

export default Activity;
