import React from 'react'; 
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Wrapper = styled.div`
    width : 200px;
    margin : 0 auto;
    padding-bottom: 100px;
    display: flex;
    align-items: center;

    .Loading{
        margin : 0 auto;
    }
`;

const LoadingMessage = styled.div`
    padding-bottom: 10px;
    font-family: NanumSquareBold;
    font-size: 24px;
    margin: 0 auto;

;`


export default function Loader() {
  return (
    <Wrapper>
    <LoadingMessage>Loading...&ensp;</LoadingMessage>
    <CircularProgress disableShrink className="Loading"/>
     </Wrapper>
  );
}