import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles/index";
import CollectionItem from "./CollectionItem";
import Grid from "@material-ui/core/Grid";
import {AmaIcon, CameraIcon, FilledHeartIcon} from "../../../assets/icons";
import IconButton from '@material-ui/core/IconButton';
import {useMutation} from "@apollo/react-hooks/lib/index";
import { GET_PRACTICE_PAGE, LIKE_PRACTICE } from "../../../graphql/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
  }
}));

export default function Collection(props) {
  const classes = useStyles();
  const [likePractice, { data: mutationData }] = useMutation(LIKE_PRACTICE);

  const handleLike = () => {
    const originalLikes = props.practice.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: { practiceId: props.practice.id, upvotes: newUpvotes },
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
            spacing={2}
        >
          <Grid item>
            <Typography variant="overline">Collection</Typography>
          </Grid>
          <Grid item>
            <CollectionItem amount={props.upvotes}>
              <IconButton onClick={handleLike}>
                <FilledHeartIcon/>
              </IconButton>
            </CollectionItem>
          </Grid>

          <Grid item>
            <CollectionItem amount={props.imgCount}>
              <IconButton onClick={props.handleLike}>
                <CameraIcon/>
              </IconButton>
            </CollectionItem>

          </Grid>
          <Grid item>

            <CollectionItem amount={props.questions}>
              <IconButton onClick={props.handleLike}>
                <AmaIcon/>
              </IconButton>
            </CollectionItem>

          </Grid>
        </Grid>
      </>
  );
}
