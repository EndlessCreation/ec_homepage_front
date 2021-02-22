import MainNavbar from "../Main/MainNavbar";
import CommonFooter from "./CommonFooter";
import ActivityTemplate from "./ActivityTemplate";
import { MainProvider } from "../../context/MainContext";
import { MonthProvider } from '../../context/MonthProvider';
import { PhotoProvider } from './ActivityGetApi';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Activity() {
  return (
    <>
    <MainProvider>
      <MainNavbar />
    </MainProvider>

    <MonthProvider>
    <PhotoProvider>
        <ActivityTemplate/>
  
    </PhotoProvider> 
    </MonthProvider>
    
    <CommonFooter/>
    </>
  );
}

export default Activity;