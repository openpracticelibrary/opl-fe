import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';

import { TextField, InputAdornment, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  keywordSearch: {
    marginTop: ".5rem",
    minWidth: "20rem",
    borderRadius: "6.5px",
  },
}));

const KeywordSearchBox = (props) => {
  const searchInputRef = React.useRef();

  const classes = useStyles();

  const handleSearchClick = () => {
    if (searchInputRef.current.value.includes(",")) {
      const multiWord = searchInputRef.current.value.split(",").map(keyword => keyword.trim());
      props.dispatch({ type: "keywordSearchChange", content: multiWord });
    }

    props.dispatch({ type: "keywordSearchChange", content: searchInputRef.current.value });
  };

  const SearchKeywordButton = () => (
    <InputAdornment position="end">
      <IconButton onClick={handleSearchClick}>
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  );

  return (
    <TextField
      variant="outlined"
      className={classes.keywordSearch}
      inputRef={searchInputRef}
      InputProps={{
        endAdornment: <SearchKeywordButton />
      }}
    />
  );
};

export default KeywordSearchBox;
