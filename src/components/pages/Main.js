import React from "react";

import CommonNavbar from "../templates/CommonNavbar";
import MainTemplate from "../templates/MainTemplate";
import CommonFooter from "../templates/CommonFooter";
import CommonModal from "../atoms/CommonModal";

function Main() {
  console.log("Main 페이지 랜더링 됩니다.");
  return (
    <>
      <CommonModal />
      <CommonNavbar />
      <MainTemplate />
      <CommonFooter />
      </>
  );
}

export default Main;
