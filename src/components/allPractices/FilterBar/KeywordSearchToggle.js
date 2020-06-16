import React from "react";
import { Typography, Button } from "@material-ui/core";

const KeywordSearchToggle = (props) => {
  const { toggle } = props;

  return (
    <Button data-testid="keywordSearchToggle" onClick={toggle}>
      <Typography>Filter</Typography>
    </Button>
  );
};

export default KeywordSearchToggle;
