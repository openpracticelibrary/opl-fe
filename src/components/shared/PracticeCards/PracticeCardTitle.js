import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: -3,
  },
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: theme.spacing(-1),
  },
  tagBoxes: {
    borderRadius: "3px",
    backgroundColor: "rgba(16,16,16,0.1)",
    paddingLeft: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },
}));

const PracticeCardTitle = (props) => {
  const classes = useStyles();

  return (
    <div onClick={() => navigate(`/practice/${props.slug}`)}>
      <Typography id="cardTitle" className={classes.title} data-testid="practicetitle">{props.practiceTitle}</Typography>
      <Box className={classes.tagContainer}>
        {props.tags.map((t, i) => (
          <Box key={i} className={classes.tagBoxes}>
            <Typography variant={"overline"}>
          #{t.tag}&nbsp;
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default PracticeCardTitle;
