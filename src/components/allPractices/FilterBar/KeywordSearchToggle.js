import React from "react";
import { Typography, Button } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const KeywordSearchToggle = (props) => {
  const { toggle, keywordSearchToggle } = props;

  return (
    <Button data-testid="keywordSearchToggle" onClick={toggle}>
      {keywordSearchToggle ? <Typography>Filter <ExpandMoreIcon /></Typography> : <Typography>Filter <ExpandLessIcon /></Typography>}
    </Button>
  );
};

export default KeywordSearchToggle;