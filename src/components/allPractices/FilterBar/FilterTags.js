import React from "react";
import { Box, Chip, Select, MenuItem, Typography } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Tag = ({ tag, filter, selectedFilter }) => {
  const buttonRef = React.useRef(null);

  const hashtag = tag === "ALL" ? tag : `#${tag}`;

  return (
    <Chip
      clickable
      label={hashtag}
      ref={buttonRef}
      onClick={() => filter({ type: 'tagFilterChange', content: tag })}
    ></Chip>
  );
};

const FilterTags = (props) => {
  const matches = useMediaQuery("(min-width:600px)");
  const { tags, selectedFilter, filter } = props;

  return (
    <div data-testid="filterTags">
      {matches ?
        <Box display="flex" justifyContent="space-evenly" flexDirection="row" spacing={2}>
          {tags.map((tag) => (
            <Tag
              key={tag}
              tag={tag}
              selectedFilter={selectedFilter}
              filter={filter}
            />
          ))}
        </Box>
        :
        <Select
          variant="outlined"
          value={selectedFilter}
          onChange={(event) => filter({ type: 'tagFilterChange', content: event.target.value })}
        >
          {tags.map(tag => (
            <MenuItem value={tag} key={tag}>
              <Typography variant="body2">{tag === "ALL" ? tag : `#${tag}`}</Typography>
            </MenuItem>
          ))}
        </Select>
      }
    </div>
  );
};

export default FilterTags;
