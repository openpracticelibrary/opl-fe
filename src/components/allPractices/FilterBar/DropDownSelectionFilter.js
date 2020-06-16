import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DropDownSelectionFilter = (props) => {
  const classes = useStyles();
  const { inputLabel, items } = props;

  return (
    <FormControl className={classes.formControl} variant="outlined">
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        label={inputLabel}
      >
        <MenuItem value={inputLabel} disabled>
          {inputLabel}
        </MenuItem>
        {items.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownSelectionFilter;
