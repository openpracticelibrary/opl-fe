import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { Grid, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    color: theme.palette.common.brownish_grey,
  },
  label: {
    ...theme.typography.overline,
    padding: theme.spacing(1),
  },
}));

const Tag = ({ tag, filter, selectedFilter }) => {
  const classes = useStyles();

  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    let button;

    if (tag === selectedFilter) {
      button = buttonRef.current;
      button.style = "background-color: #e9e9e9";
    }

    return () => {
      if (tag === selectedFilter)
        button.style = "background-color: transparent";
    };
  });

  return (
    <Grid item>
      <Chip
        clickable
        label={`#${tag}`}
        ref={buttonRef}
        classes={{ root: classes.root, label: classes.label }}
        onClick={() => filter(tag)}
      ></Chip>
    </Grid>
  );
};

const FilterTags = (props) => {
  const { tags, selectedFilter, filter } = props;

  return (
    <div data-testid="filterTags">
      <Grid container direction="row" spacing={2}>
        {tags.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            selectedFilter={selectedFilter}
            filter={filter}
          />
        ))}
      </Grid>
    </div>
  );
};

export default FilterTags;
