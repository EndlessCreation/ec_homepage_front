import React from "react";
import { createGlobalStyle } from "styled-components";
import Project from "./pages/Project/ProjectPage";
const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Project />
    </>
  );
}

export default App;
