import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function FooterList(props) {
  return (
    <>
      <Box display="flex" p={1}>
        <Box>
          {props.children}
        </Box>
        <Box ml={1}>
          <Link href={props.link} target="_blank">
            <Typography variant="body2"> {props.text} </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
}
