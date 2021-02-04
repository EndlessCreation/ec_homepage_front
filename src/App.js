import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Activity from "./pages/Activity/Activity";
import Project from "./pages/Project/ProjectPage";
import Member from "./pages/Member/Template";
const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route path="/" component={Main} exact={true} />
      <Route path="/Activity" component={Activity} />
      <Route path="/Project" component={Project} />
      <Route path="/Member" component={Member} />
    </Router>
  );
}

export default App;
