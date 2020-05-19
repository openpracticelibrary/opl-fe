import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({

  toolbarSecondary: {
    overflowX: 'auto',
    paddingLeft: theme.spacing(9),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: theme.palette.text.secondary,
  },
}));

export default function PageMenu(props) {
  const classes = useStyles();
  const {sections} = props;

  return (
      <>
        <Divider/>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map((section, i) => (
              <Link
                  key={i}
                  href={section.url}
                  className={classes.toolbarLink}
                  variant={'overline'}
              >
                {section.title}
              </Link>
          ))}
        </Toolbar>
        <Divider/>
      </>
  );
}

PageMenu.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
