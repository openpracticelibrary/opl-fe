import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    minWidth: 260,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectMenu: {
    
  }
}));

const DropDownSelectionFilter = (props) => {
  const classes = useStyles();
  const { inputLabel, items, handleFilterSelect, selectedFilter } = props;

  return (
    <FormControl className={classes.formControl} variant="outlined">
      <Select
        label={inputLabel}
        value={selectedFilter}
        onChange={handleFilterSelect}
        classes={classes.selectEmpty}
      >
        {items.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownSelectionFilter;
