import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import CollectionItem from "./CollectionItem";
import { AmaIcon, CameraIcon, NounLoveIcon } from "../../../assets/icons";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_PRACTICE } from "../../../graphql/";

import { Typography, Grid, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    justify: "flex-start",
    direction: "row",
    paddingLeft: theme.spacing(1),
    marginBottom: theme.spacing(5)
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

export default function Collection(props) {
  const classes = useStyles();
  const [likePractice] = useMutation(LIKE_PRACTICE);

  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: {practiceId: props.practiceId, upvotes: newUpvotes},
    });
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="overline">Collection</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={handleLike} className={classes.button} data-testid={"heartIcon"}>
            <CollectionItem amount={props.upvotes} >
              <NounLoveIcon fill="#596562" />
            </CollectionItem>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton disabled>
            <CollectionItem amount={props.imgCount}>
              <CameraIcon/>
            </CollectionItem>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton disabled>
            <CollectionItem amount={props.questions}>
              <AmaIcon fill="#596562" />
            </CollectionItem>
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
