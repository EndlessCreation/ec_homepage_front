import React from "react";
import Footer from "../Activity/CommonFooter";
import Navbar from "../Main/MainNavbar";
import MemberTemplate from "./MemberTemplate";

function Member() {
    return(
        <>
        <Navbar />
        <MemberTemplate />
        <Footer />
        </>
    )
}

export default Member;