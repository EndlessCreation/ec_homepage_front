import React from "react";
import MonthList from "../molecules/ActivityMonthList";
import TextBlock from "../molecules/CommonSubTextContents";

// import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

function ActivityMonth() {
  return(
    <>
      <TextBlock>Month</TextBlock>
      <div data-aos="fade-up" data-aos-duration="2000">
        <MonthList />
      </div>
    </>
  );
}

export default React.memo(ActivityMonth);
