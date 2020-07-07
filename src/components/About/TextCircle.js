import React from 'react';
import { 
  Box
} from '@material-ui/core';

const TextCircle = ({
  icon,
  title = "Title",
  text = "Placeholder Text",
}) => (
  <Box
    color="common.light_grey"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    fontWeight="400"
    width="22rem"
    height="22rem"
    borderRadius="50%"
    border={1}
    p={6}
    textAlign="center"
  > 
    { icon ? <img src={icon} alt={title}/> : null}  
    <Box
      fontSize="2.5rem"
      color="common.discovery_blue"
      my={2}
    >
      {title}
    </Box>
    <Box>
      {text}
    </Box>
  </Box>
);
export default TextCircle;