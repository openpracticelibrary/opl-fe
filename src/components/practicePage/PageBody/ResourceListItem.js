import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  space: {
    paddingRight: theme.spacing(2),
  },
  //todo: (@Darcie) font and styling for the link  items
  color: {
    color: theme.palette.common.black
  }
}));

export default function ResourceListItem(props) {
  const classes = useStyles();

  return (
      <>
        <Box className={classes.root}>
          <Box className={classes.space}>
            {props.children}
          </Box>
          <Box>
            <Link href={props.url}>
              <Typography variant="body1" key={props.key} className={classes.color}>
                {props.description}
              </Typography>
            </Link>
          </Box>
        </Box>
      </>
  );
}