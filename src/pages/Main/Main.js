import React from "react";
import MainNavbar from "./MainNavbar";
import MainHeader from "./MainHeader";
import MainAboutEC from "./MainAboutEC";
import MainActivity from "./MainActivity";
import MainProject from "./MainProject";
import MainMember from "./MainMember";
import MainContact from "./MainContact";
import CommonFooter from "../../pages/Activity/CommonFooter";

function Main() {
  return (
   <>
      <MainNavbar />
      <MainHeader />
      <MainAboutEC />
      <MainActivity />
      <MainProject />
      <MainMember />
      <MainContact />
      <CommonFooter />
   </>
  );
}

export default Main;