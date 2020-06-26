import React from "react";
import { Grid, Chip } from "@material-ui/core";

const Tag = ({ tag, filter, selectedFilter }) => {
  const buttonRef = React.useRef(null);

  return (
    <Grid item>
      <Chip
        clickable
        label={tag}
        ref={buttonRef}
        onClick={() => filter({ type: 'tagFilterChange', content: tag })}
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
