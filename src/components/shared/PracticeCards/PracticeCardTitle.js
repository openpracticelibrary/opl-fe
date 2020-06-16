import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: -3,
  },
}));

const PracticeCardTitle = (props) => {
  const classes = useStyles();

  return (
    <div onClick={() => navigate(`/practice/${props.slug}`)}>
      <Typography id="cardTitle" className={classes.title} data-testid="practicetitle">{props.practiceTitle}</Typography>
      {props.tags.map((t, i) => (
        <Typography key={i} variant={"overline"}>
          #{t.tag}&nbsp;
        </Typography>
      ))}
    </div>
  );
};

export default PracticeCardTitle;
