import React from "react";
import { createGlobalStyle } from "styled-components";
import Activity from "./pages/Activity/Activity";
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
      <Activity />
    </>
  );
}

export default App;
