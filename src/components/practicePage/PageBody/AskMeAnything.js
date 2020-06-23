import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles/index";
import QuestionsAndAnswers from "./QuestionsAndAnswers";

const useStyles = makeStyles((theme) => ({
  input: {
    '&::placeholder': {
      fontFamily: "Quicksand",
      opacity: 100
    },
  },
}));

export default function AskMeAnything(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Grid container direction="column">
        <Box mb={4}>
          <Grid item xs={12}>
            <Typography
              variant={"h2"}
              ref={props.amaRef}
            >
              Ask me anything
            </Typography>
            <Box marginY={2}>
              <Typography variant={"body1"}>
                Please send a question to the community about anything you may need for using this practice.
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <TextField
              id="ama"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              placeholder="e.g. How do I know when to use this practice?"
              rows="4"
              type="textarea"
              InputProps={
                {classes: { input: classes.input }}
              }
            />
            <Grid
              alignItems="center"
              container
              spacing={3}
            >
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Your name"
                  size="small"
                  InputProps={
                    {classes: { input: classes.input }}
                  }
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Your email"
                  type="email"
                  size="small"
                  InputProps={
                    {classes: { input: classes.input }}
                  }
                />               
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  size="medium"
                  variant="outlined"
                >
                  Send Question
                </Button>               
              </Grid>
            </Grid>
            <Box marginY={1}>
              <Typography
                variant={"h6"}
              >
                Name / email are optional for posting. We will use your name next to the question and email to let you know when it has been answered.
              </Typography>
            </Box>
          </Grid>
        </Box>
        <QuestionsAndAnswers
          ama={props.ama}
        />
      </Grid>
  
    </>
  );
}
