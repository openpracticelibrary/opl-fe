import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Box from '@material-ui/core/Box';
import OPLDrawer from '../components/shared/Drawer';

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
      <OPLDrawer initialDrawerOpenState={false}>
        <Box className={classes.root}>
          <Box className={classes.titleBox}>
            <h2>Welcome to the Open Practice Library</h2>
            <p>This page is currently under construction</p>
          </Box>
        </Box>
      </OPLDrawer>
    </>
  )
};

