import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  space: {
    paddingLeft: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

export default function BreadcrumbNav() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.space}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link variant="overline" href="/">
            Discovery
          </Link>
          <Link variant="overline" href="/">
            Validate
          </Link>
        </Breadcrumbs>
      </Box>
    </>
  );
}
