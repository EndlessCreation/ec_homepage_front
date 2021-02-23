import React from "react";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router, Route } from "react-router-dom";
import  ScrollToTop from './ScrollToTop';

import Main from "./components/pages/Main";
import Activity from "./components/pages/Activity";
import Project from "./components/pages/Project";
import Member from "./components/pages/Member";
import { MainProvider } from "./context/MainContext";
import { ECProvider } from "./context/Context";


const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
  }
`;

function App() {
  return (
    <Router>
      <ScrollToTop>
      <MainProvider>
        <ECProvider>
          <GlobalStyle />
          <Route path="/" component={Main} exact={true} />
          <Route path="/Activity" component={Activity} />
          <Route path="/Project" component={Project} />
          <Route path="/Member" component={Member} />
        </ECProvider>
      </MainProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
