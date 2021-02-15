import React from "react";
import { createGlobalStyle } from "styled-components";
<<<<<<< HEAD
import Template from "./pages/Member/Template";
=======

import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Activity from "./pages/Activity/Activity";
import Project from "./pages/Project/ProjectPage";
import Member from "./pages/Member/Template";

>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
  }
`;

function App() {
  return (
<<<<<<< HEAD
    <>
      <GlobalStyle />
      <Template />
    </>
=======
    <Router>
      <GlobalStyle />
      <Route path="/" component={Main} exact={true} />
      <Route path="/Activity" component={Activity} />
      <Route path="/Project" component={Project} />
      <Route path="/Member" component={Member} />
    </Router>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  );
}

export default App;
