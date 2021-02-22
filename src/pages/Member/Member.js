import React from "react";
import CommonFooter from "../Activity/CommonFooter";
import Navbar from "../Main/CommonNavbar";
import MemberTemplate from "./MemberTemplate";

function Member() {
  return (
    <>
      <Navbar />
      <MemberTemplate />
      <CommonFooter />
    </>
  );
}

export default Member;
