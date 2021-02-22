import React from "react";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Activity from "./pages/Activity/Activity";
import Project from "./pages/Project/pages/Project";
import Member from "./pages/Member/Template/Template";
import { MainProvider } from "./context/MainContext";

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
  }
`;

function App() {
  return (
    <Router>
      <MainProvider>
      <GlobalStyle />
      <Route path="/" component={Main} exact={true} />
      <Route path="/Activity" component={Activity} />
      <Route path="/Project" component={Project} />
      <Route path="/Member" component={Member} />
      </MainProvider>
    </Router>
  );
}

export default App;