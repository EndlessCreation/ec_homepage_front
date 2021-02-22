import React from "react";

import CommonNavbar from "./CommonNavbar";
import MainTemplate from "./MainTemplate";
import CommonFooter from "../../pages/Activity/CommonFooter";

function Main() {
  console.log("Main 페이지 랜더링 됩니다.");
  return (
    <>
      <CommonNavbar />
      <MainTemplate />
      <CommonFooter />
    </>
  );
}

export default Main;
