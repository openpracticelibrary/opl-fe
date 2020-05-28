import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.common.white,
    width: '100%',
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.titleBox}>
          <h2>Practices muthafucka!</h2>
          <p>Get em while they're hot!</p>
        </Box>
      </Box>
    </>
  )
};

