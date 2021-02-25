import React from "react";

import CommonNavbar from "../templates/CommonNavbar";
import MainTemplate from "../templates/MainTemplate";
import CommonFooter from "../templates/CommonFooter";
import CommonModal from "../atoms/CommonModal";

function Main() {
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
