import MainNavbar from "../templates/CommonNavbar";
import CommonFooter from "../templates/CommonFooter";
import ActivityTemplate from "../templates/ActivityTemplate";
import { MainProvider } from "../../context/MainContext";
import { MonthProvider } from "../../context/MonthProvider";
import { PhotoProvider } from "../../context/ActivityGetApi";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Activity() {
  return (
    <>
      <MainProvider>
        <MainNavbar />
      </MainProvider>

      <MonthProvider>
        <PhotoProvider>
          <ActivityTemplate />
        </PhotoProvider>
      </MonthProvider>

      <CommonFooter />
    </>
  );
}

export default Activity;
