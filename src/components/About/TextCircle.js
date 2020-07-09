import React from 'react';
import {
  Box,
  Typography
} from '@material-ui/core';

const TextCircle = ({
  icon,
  title = "Title",
  text = "Placeholder Text",
}) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width="22rem"
    height="22rem"
    borderRadius="50%"
    border={1}
    p={4}
    textAlign="center"
  >
    { icon ? <img src={icon} alt={title}/> : null}
    <Typography
      variant="h4"
      component="h4"
      color="primary"
    >
      {title}
    </Typography>
    <Typography
      component="h6"
      variant="subtitle2"
    >
      {text}
    </Typography>
  </Box>
);
export default TextCircle;
