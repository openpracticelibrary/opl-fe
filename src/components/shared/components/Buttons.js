import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    margin: theme.spacing(2),
    borderRadius: "32px",
    width: "7rem",
    padding: theme.spacing(2),
    borderColor: theme.palette.common.discovery_blue,
    borderWidth: "1px",
    borderStyle: "solid",
  },
});

const OplButton = withStyles(styles)(({ classes, children, className, ...otherProps }) => (
  <Button className={clsx(classes.root, className)} {...otherProps}>
    {children || 'class names'}
  </Button>
));

export default OplButton;


