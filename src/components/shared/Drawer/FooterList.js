import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function FooterList(props) {
  const preventDefault = (event) => event.preventDefault();
  return (
      <>
        <Box display="flex" p={1}>
          {props.children}
          <Link href={props.link} onClick={preventDefault}>
            <Typography variant="button"> {props.text} </Typography>
          </Link>
        </Box>
      </>
  );
}