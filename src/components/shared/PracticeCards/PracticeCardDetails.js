import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import { navigate } from "@reach/router";
import CardCollection from "./CardCollection";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    borderRadius: 10,
  },
  coverImage: {
    borderRadius: 10,
    height: 215,
    width: 350,
  },
  cardCollection: {
    alignItems: "left",
  },
});

export default function PracticeCardDetails(props) {
  const classes = useStyles();

  const imgCount = props.mediaGallery.length;
  const questions = props.ama.length;

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => navigate(`/practice/${props.slug}`)}>
        <CardMedia
          title={props.practiceTitle}
          image={props.coverImage}
          className={classes.coverImage}
        />
        <CardContent>
          <Typography variant={"subtitle2"}>{props.practiceTitle}</Typography>
          {props.tags.map((t, i) => (
            <Typography key={i} variant={"overline"}>
              #{t.tag}{" "}
            </Typography>
          ))}
          <Typography variant={"h6"} component="p">
            {props.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardCollection}>
        <CardCollection
          upvotes={props.upvotes}
          imgCount={imgCount}
          questions={questions}
        />
      </CardActions>
    </Card>
  );
}
