import React from "react";
import CommonFooter from "../templates/CommonFooter";
import Navbar from "../templates/CommonNavbar";
import MemberTemplate from "../templates/MemberTemplate";

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
