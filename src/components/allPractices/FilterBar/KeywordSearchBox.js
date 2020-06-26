import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';

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
