import React from "react";
import EntireBox from "../templates/ProjectTemplate";
import MainNavbar from "../templates/CommonNavbar";
import CommonFooter from "../templates/CommonFooter";
import CommonModal from "../atoms/CommonModal";

function Project() {
  return (
    <>
      <MainNavbar />
      <CommonModal />
      <EntireBox />
      <CommonFooter />
    </>
  );
}

export default Project;
