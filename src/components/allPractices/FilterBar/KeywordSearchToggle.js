import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { Typography, Button } from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  filterText: {
    paddingRight: theme.spacing(1),
  },
  flip: {
    color: theme.palette.common.discovery_blue,
  },
  flipActive: {
    transform: "rotate(180deg)",
    color: theme.palette.common.discovery_blue,
  },
}));

const KeywordSearchToggle = (props) => {
  const classes = useStyles();
  const { toggle, keywordSearchToggle } = props;

  return (
    <Button data-testid="keywordSearchToggle" onClick={toggle}>
      <Typography variant={"overline"} className={classes.filterText}>Filters</Typography>
      {keywordSearchToggle ?
        <FilterListIcon className={classes.flipActive} fontSize="small" />
        :
        <FilterListIcon className={classes.flip} fontSize="small" />
      }
    </Button>
  );
};

export default KeywordSearchToggle;
