import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: theme.spacing(-1),
  },
  tagBoxes: {
    borderRadius: "3px",
    backgroundColor: "rgba(16,16,16,0.1)",
    paddingLeft: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },
}));

export default function TitleAndSubtitle(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          {props.children}
          <Typography
            variant={"h1"}
            data-testid={"title"}
          >
            {props.editing ?
              props.titleEdit : props.title
            }
          </Typography>
          <Box className={classes.tagContainer}>
            {props.tags && props.tags.map((t, i) => (
              <Box key={i} className={classes.tagBoxes}>
                <Typography variant={"overline"}>
              #{t.tag}&nbsp;&nbsp;
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={classes.space}>
          <Typography
            variant={"subtitle1"}
            data-testid={"subtitle"}
          >
            {props.editing ?
              props.subtitleEdit :
              props.subtitle
            }
          </Typography>
        </Box>
      </Box>
    </>
  );
}
