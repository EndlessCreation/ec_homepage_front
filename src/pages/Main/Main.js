import React from "react";
<<<<<<< HEAD
import Navbar from "./Navbar";
=======

import { MainProvider } from "../../Context/MainContext";
import MainNavbar from "./MainNavbar";
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
import MainHeader from "./MainHeader";
import MainAboutEC from "./MainAboutEC";
import MainActivity from "./MainActivity";
import MainProject from "./MainProject";
<<<<<<< HEAD

import MainNavbar from "./MainNavbar";

function Main() {
  return (
    <>
=======
import MainMember from "./MainMember";
import MainContact from "./MainContact";

function Main() {
  return (
    <MainProvider>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
      <MainNavbar />
      <MainHeader />
      <MainAboutEC />
      <MainActivity />
      <MainProject />
<<<<<<< HEAD
    </>
=======
      <MainMember />
      <MainContact />
    </MainProvider>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  );
}

export default Main;
