import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { Grid, Button, Chip } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   practiceNum: {
//     fontFamily: "Itim",
//     fontSize: "200px",
//     fontWeight: "normal",
//     textAlign: "center",
//     color: theme.palette.common.black,
//   },
// }));

const Tag = ({ tag, filter, selectedFilter }) => {
    //   const classes = useStyles();
    
  const buttonRef = React.useRef(null);

  //need to consider how to show background of default "selected" button
  //thought this could be done using useEffect but not sure how to make backgrounda appear selected
  React.useEffect(() => {
    if(tag === selectedFilter) buttonRef.current.style='background-color: #e9e9e9';
    return () => buttonRef.current.style='background-color: transparent';
  });

  return (
    <Grid item>
      <Chip clickable label={tag} ref={buttonRef} onClick={() => filter(tag)}></Chip>
    </Grid>
  );
};

const FilterTags = (props) => {


  const { tags, selectedFilter, filter } = props;

  return (
    <div data-testid="filterTags">
      <Grid container direction="row" justify="center" alignItems="center">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} selectedFilter={selectedFilter} filter={filter}/>
        ))}
      </Grid>
    </div>
  );
};

export default FilterTags;
