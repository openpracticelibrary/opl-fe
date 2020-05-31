import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles/index";
import QuestionsAndAnswers from "./QuestionsAndAnswers";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
  input: {
    '&::placeholder': {
      fontStyle: 'italic',
      fontFamily: "Noto Serif",
      fontWeight: "normal italic",
      fontSize: "1.625rem",
      color: theme.palette.common.brown_grey,
      padding: theme.spacing(1)
    },
  },
}));

export default function AskMeAnything(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography variant={"h2"} href="#WhyDoIt">
            Ask me anything
          </Typography>
        </Box>
        <Box className={classes.space}>
          <Typography variant={"body1"}>
            {'Questions from community aliquam id diam maecenas ultricies mi eget mauris. Odio tempor orci dapibus ultrices in. '}
          </Typography>
        </Box>
        <Box className={classes.space}>
          <TextField
            id="ama"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="What questions do you have?"
            InputProps={{
              classes: { input: classes.input}
            }}/>
        </Box>
        <QuestionsAndAnswers ama={props.ama}/>
      </Box>
    </>
  );
}
