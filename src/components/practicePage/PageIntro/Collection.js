import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles/index";
import CollectionItem from "./CollectionItem";
import Grid from "@material-ui/core/Grid";
import {AmaIcon, CameraIcon, FilledHeartIcon} from "../../../assets/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
  }
}));

export default function Collection(props) {
  const classes = useStyles();

  return (
      <>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.root}
            spacing={2}
        >
          <Grid item>
            <Typography variant="overline">Collection</Typography>
          </Grid>
          <Grid item>
            <CollectionItem amount={props.upvotes}>
              <FilledHeartIcon/>
            </CollectionItem>
          </Grid>
          <Grid item>
            <CollectionItem amount={props.imgCount}>
              <CameraIcon/>
            </CollectionItem>
          </Grid>
          <Grid item>
            <CollectionItem amount={props.questions}>
              <AmaIcon/>
            </CollectionItem>
          </Grid>
        </Grid>
      </>
  );
}
