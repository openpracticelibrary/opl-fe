import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: ".5rem",
    minWidth: "20rem",
  },
}));

const DropDownSelectionFilter = (props) => {
  const classes = useStyles();
  const { items, handleFilterSelect, selectedFilter } = props;

  return (
    <FormControl className={classes.formControl} variant="outlined" size="small" fullWidth>
      <Select
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
