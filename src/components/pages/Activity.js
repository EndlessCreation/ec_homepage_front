import MainNavbar from "../templates/CommonNavbar";
import CommonFooter from "../templates/CommonFooter";
import ActivityTemplate from "../templates/ActivityTemplate";
import { MainProvider } from "../../context/MainContext";

// import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

function Activity() {
  return (
    <>
      <MainProvider>
        <MainNavbar />
      </MainProvider>
      <ActivityTemplate />
      <CommonFooter />
  
    </>
  );
}

export default Activity;
