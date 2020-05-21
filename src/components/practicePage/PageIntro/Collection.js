import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles/index";
import CollectionItem from "./CollectionItem";
import Grid from "@material-ui/core/Grid";
import {AmaIcon, CameraIcon, FilledHeartIcon} from "../../../assets/icons";
import IconButton from '@material-ui/core/IconButton';
import {useMutation} from "@apollo/react-hooks/lib/index";
import {LIKE_PRACTICE} from "../../../graphql/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

export default function Collection(props) {
  const classes = useStyles();
  const [likePractice, {data: mutationData}] = useMutation(LIKE_PRACTICE);

  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: {practiceId: props.practiceId, upvotes: newUpvotes},
    });
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Typography variant="overline">Collection</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={handleLike} className={classes.button}>
            <CollectionItem amount={props.upvotes}>
              <FilledHeartIcon/>
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
              <AmaIcon/>
            </CollectionItem>
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
