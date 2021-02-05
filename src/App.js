import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./pages/Member/Template";
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
      <Template />
    </>
  );
}

export default App;
