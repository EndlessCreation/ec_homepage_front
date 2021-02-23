import MainNavbar from "../templates/CommonNavbar";
import CommonFooter from "../templates/CommonFooter";
import ActivityTemplate from "../templates/ActivityTemplate";

// import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

function Activity() {
  return (
    <>
      <MainNavbar />
      <ActivityTemplate />
      <CommonFooter />
    </>
  );
}

export default Activity;
