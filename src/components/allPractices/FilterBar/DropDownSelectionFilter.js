import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: ".5rem",
    minWidth: "20rem",
  },
  mobiusLoopFilters: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
  },
}));

const DropDownSelectionFilter = (props) => {
  const classes = useStyles();
  const { items, handleFilterSelect, selectedFilter } = props;

  return (
    <FormControl className={classes.formControl} variant="outlined" size="small" fullWidth>
      <Select
        value={selectedFilter}
        onChange={(event) => handleFilterSelect({ type: 'mobiusFilterChange', content: event.target.value })}
        classes={classes.selectEmpty}
      >
        {items.map((item, i) => (
          <MenuItem value={item} key={i}>
            <Typography variant="button" className={classes.mobiusLoopFilters}>
              {item}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownSelectionFilter;
