import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  keywordSearch: {
    marginTop: ".5rem",
    minWidth: "20rem",
    borderRadius: "6.5px",
  },
}));

const KeywordSearchBox = (props) => {
  const classes = useStyles();

  return (
    <TextField
      disabled
      variant="filled"
      label="Keyword"
      classes={classes.keywordSearch}
    />
  );
};

export default KeywordSearchBox;
