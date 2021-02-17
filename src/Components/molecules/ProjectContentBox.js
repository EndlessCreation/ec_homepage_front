import React from "react";
import ProjectBox from '../atoms/ProjectBox';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const BlockforProjectContent=styled.div`
    padding-left: 23%;
    padding-bottom:160px;

`;

function ProjectContentBox() {
  return (
      <BlockforProjectContent>
        <Grid item xs={12}>
            <Grid container spacing={4}>
            {[0, 1, 2,3,4,5,6,7,8,9,10,11].map((value) => (
            <Grid key={value} item>
            <ProjectBox />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </BlockforProjectContent>
  );
}

export default ProjectContentBox;

