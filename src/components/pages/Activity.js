import MainNavbar from "../templates/CommonNavbar";
import CommonFooter from "../templates/CommonFooter";
import ActivityTemplate from "../templates/ActivityTemplate";
import { MonthProvider } from "../../context/MonthProvider";

// import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

function Activity() {
  return (
    <>
      <MainNavbar />

      <MonthProvider>
        <ActivityTemplate />
      </MonthProvider>

      <CommonFooter />
    </>
  );
}

export default Activity;
