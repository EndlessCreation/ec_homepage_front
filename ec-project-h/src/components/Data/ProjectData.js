import React from "react";
import ProjectBox from '../atoms/ProjectBox';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:220,
    flexGrow: 1,
  }
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={10}>
        <Grid container justify="center" spacing={4}>
          {[0, 1, 2,3,4,5,6,7,8,9,10,11].map((value) => (
            <Grid key={value} item>
              <ProjectBox className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

