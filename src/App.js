import React from "react";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Navbar from "./components/templates/CommonNavbar";
import Footer from "./components/templates/CommonFooter"
import Main from "./components/pages/Main";
import Activity from "./components/pages/Activity";
import Project from "./components/pages/Project";
import Member from "./components/pages/Member";
import { ECProvider } from "./Context/Context";
import { GlobalContext } from "./Context/GlobalContext";

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
        <GlobalContext>
          <ECProvider>
            <GlobalStyle />
            <Navbar />
            <Route path="/" component={Main} exact={true} />
            <Route path="/Activity" component={Activity} />
            <Route path="/Project" component={Project} />
            <Route path="/Member" component={Member} />
            <Footer />
          </ECProvider>
        </GlobalContext>
      </ScrollToTop>
    </Router>
  );
}

export default App;
