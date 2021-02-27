import React from "react";
import ActivityTemplate from "../templates/ActivityTemplate";

// import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

function Activity() {
  return (
    <>
      <ActivityTemplate />
    </>
  );
}

export default React.memo(Activity);
