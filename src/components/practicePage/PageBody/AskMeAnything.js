import React from "react";
import { AmaIcon } from "../../../assets/icons";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

export default function AskMeAnything(props) {
  return (
    <>
      <Typography>Questions from the community</Typography>
      <TextField
        id="ama-question"
        label="What questions do you have?"
        variant="outlined"
      />
      <Box p={3}>
        {props.ama.map((qAndA, i) => (
          <React.Fragment key={i}>
            <Typography variant={"h5"}>
              <AmaIcon />
              {qAndA.question}
            </Typography>
            <Typography variant="overline">Answer</Typography>
            <Typography>{qAndA.answers.map((a) => a.answer)}</Typography>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
}
