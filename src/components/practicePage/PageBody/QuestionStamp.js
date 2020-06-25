import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
  questionStamp:{
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "QuickSand", 
  }
}));

const QuestionStamp = ({ 
  isQuestion = true,
  userName = "Anonymous User",
  datePosted = new Date(2020, 0, 1).toDateString()
}) => {
  const classes = useStyles();

  return (
    <>
      <Box marginY={2}>
        <Typography
          className={classes.questionStamp} 
          variant={"h6"}
        >
          {`${isQuestion ? 'Asked' : 'Answered'} By ${userName} | ${new Date(datePosted).toDateString()}`}
        </Typography>
      </Box>         
    </>
  );
}
export default QuestionStamp;