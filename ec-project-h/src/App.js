import React from 'react';
import styled from 'styled-components';
import ProjectPage from './components/pages/ProjectPage';

const Header=styled.div`
  color:white;
  background:black;
  width:100%;
  height:120px;
`;

const Footer=styled.div`
  color:white;
  background:black;
  width:100%;
  height:419px;
`

function App() {
  return (
    <>
      <Header>Header</Header>
      <ProjectPage />
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
