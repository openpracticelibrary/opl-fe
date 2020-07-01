import React from "react";
import { Typography, Link, Box } from '@material-ui/core';

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
