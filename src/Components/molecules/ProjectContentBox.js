import React from "react";
import ProjectBox from '../atoms/ProjectBox';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';

const BlockforProjectContent=styled.div`
@media screen and (max-width:1920px){
    padding-left: 23%;
    padding-bottom:160px;
}

@media screen and (min-width:640px)and (max-width:1279px){
  padding-left:2.5%;
  padding-bottom:120px;
}

@media screen and (max-width:639px){
  padding-left:2.5%;
  padding-bottom:100px;
}

`;

function ProjectContentBox() {
  const isPc = useMediaQuery({
    query: '(min-width:1280px)'
    })
    const isTablet = useMediaQuery({ query: '(min-width:640px) and (max-width:1279px)' })
    const isMobile = useMediaQuery({ query: ' (max-width: 639px)' })
  return (
      <BlockforProjectContent>
        <Grid item xs={12}>
        {isPc&&<Grid container spacing={4}>
            {[0, 1, 2,3,4,5,6,7,8,9,10,11].map((value) => (
            <Grid key={value} item>
            <ProjectBox />
            </Grid>
          ))}
        </Grid>}
        {isTablet&&<Grid container spacing={2}>
            {[0, 1, 2,3,4,5,6,7,8,9,10,11].map((value) => (
            <Grid key={value} item>
            <ProjectBox />
            </Grid>
            ))}
            </Grid>}
        {isMobile&&<Grid container spacing={2}>
            {[0, 1, 2,3,4,5].map((value) => (
            <Grid key={value} item>
            <ProjectBox />
            </Grid>
          ))}
        </Grid>}
      </Grid>
      </BlockforProjectContent>
  );
}

export default ProjectContentBox;

