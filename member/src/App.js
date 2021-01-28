import React from 'react';
import styled from 'styled-components'
import Template from './Template';
//import Slide from './Slide';

const AppCss = styled.div`
body{
  margin: 0;
}

`

function App(){
  return(
    <AppCss>
      <Template />
    </AppCss>
  )
}

export default App;