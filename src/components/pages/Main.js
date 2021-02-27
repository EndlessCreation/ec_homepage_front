import React from "react";
import MainTemplate from "../templates/MainTemplate";
import CommonModal from "../atoms/CommonModal";

function Main() {
  console.log("MainComponent");
  return (
    <>
      <CommonModal />
      <MainTemplate />
    </>
  );
}

export default React.memo(Main);
