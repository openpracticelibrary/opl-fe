import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { Grid, Button } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   practiceNum: {
//     fontFamily: "Itim",
//     fontSize: "200px",
//     fontWeight: "normal",
//     textAlign: "center",
//     color: theme.palette.common.black,
//   },
// }));

const Tag = ({ tag, filter }) => {
  const buttonRef = React.useRef(null);

  //need to consider how to show background of default "selected" button
  //thought this could be done using useEffect but not sure how to make backgrounda appear selected
  React.useEffect(() => {
    // console.log(buttonRef.current);
    // buttonRef.current.focus();
  });

  return (
    <Grid item>
      <Button ref={buttonRef} onClick={() => filter(tag)}>{tag}</Button>
    </Grid>
  );
};

const FilterTags = (props) => {
  //   const classes = useStyles();

  const { tags, filter } = props;

  return (
    <div data-testid="filterTags">
      <Grid container direction="row" justify="center" alignItems="center">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} filter={filter}/>
        ))}
      </Grid>
    </div>
  );
};

export default FilterTags;
