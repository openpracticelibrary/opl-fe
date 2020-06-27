import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";

import {
  Button,
  Text,
  Icon,
} from "@chakra-ui/core";

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
    <Button
      data-testid="keywordSearchToggle"
      variant="ghost"
      _focus={{ border: 0, bg: "transparent" }}
      _hover={{ bg: "transparent" }}
      onClick={toggle}
    >
      <Text fontSize="sm" textTransform="uppercase" fontFamily="heading">Filters</Text>
      {keywordSearchToggle ?
        <Icon
          name="filter"
          color="blue.500"
          transform="rotate(180deg)"
          fontSize="lg"
        />
        :
        <Icon
          name="filter"
          color="blue.500"
          className={classes.flip}
          fontSize="lg"
        />
      }
    </Button>
  );
};

export default KeywordSearchToggle;
