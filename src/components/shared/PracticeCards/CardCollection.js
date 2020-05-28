import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import Grid from "@material-ui/core/Grid";
import { AmaIcon, CameraIcon, FilledHeartIcon } from "../../../assets/icons";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_PRACTICE } from "../../../graphql/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    width: "100%",
  },
}));

export default function CardCollection(props) {
  const classes = useStyles();
  const [likePractice] = useMutation(LIKE_PRACTICE);

  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: { practiceId: props.practiceId, upvotes: newUpvotes },
    });
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      spacing={1}
      className={classes.root}
    >
      <Grid item>
        <Typography variant="h6">
          <FilledHeartIcon onClick={handleLike} /> {props.upvotes}{" "}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          <CameraIcon /> {props.imgCount}{" "}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          <AmaIcon /> {props.questions}{" "}
        </Typography>
      </Grid>
    </Grid>
  );
}
