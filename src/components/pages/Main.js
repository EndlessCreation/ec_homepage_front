import React from "react";

import CommonNavbar from "../templates/CommonNavbar";
import MainTemplate from "../templates/MainTemplate";
import CommonFooter from "../templates/CommonFooter";
import CommonModal from "../atoms/CommonModal";

import { ProjectModalContext } from "../../context/ProjectModalContext";
function Main() {
  console.log("Main 페이지 랜더링 됩니다.");
  return (
    <ProjectModalContext>
      <CommonModal />
      <CommonNavbar />
      <MainTemplate />
      <CommonFooter />
    </ProjectModalContext>
  );
}

export default Main;
