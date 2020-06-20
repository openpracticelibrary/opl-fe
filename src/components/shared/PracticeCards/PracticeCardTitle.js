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
    margin: theme.spacing(1, -1),
    flexWrap: "wrap",
    width: "300px",
  },
  tagBoxes: {
    width: "fit-content",
    borderRadius: "3px",
    backgroundColor: "rgba(16,16,16,0.1)",
    paddingLeft: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },
  extraTagBoxes: {
    width: "fit-content",
    borderRadius: "3px",
    backgroundColor: "rgba(16,16,16,0.1)",
    paddingLeft: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.5),
  },

}));

const PracticeCardTitle = (props) => {
  const classes = useStyles();

  const tags = () => {
    const tagsLength = props.tags.length;
    let initialTags = props.tags;
    if (tagsLength > 3) {
      initialTags = initialTags.slice(0, 3);
      const extraTags = props.tags.slice(3, props.tags.length);
      if (props.isHovered) {
        return (
          <Box id="tags" className={classes.tagContainer}>
            {initialTags.map((t, i) => (
              <Box key={i} className={classes.tagBoxes}>
                <Typography variant={"overline"}>
              #{t.tag}&nbsp;
                </Typography>
              </Box>
            ))}
            {extraTags.map((t, i) => (
              <Box key={i} className={classes.extraTagBoxes}>
                <Typography variant={"overline"}>
              #{t.tag}&nbsp;
                </Typography>
              </Box>
            ))}
          </Box>
        );
      }
    }

    return (
      <Box id="tags" className={classes.tagContainer}>
        {initialTags.map((t, i) => (
          <Box key={i} className={classes.tagBoxes}>
            <Typography variant={"overline"}>
                #{t.tag}&nbsp;
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <div onClick={() => navigate(`/practice/${props.slug}`)}>
      <Typography id="cardTitle" className={classes.title} data-testid="practicetitle">{props.practiceTitle}</Typography>
      {tags()}
    </div>
  );
};

export default PracticeCardTitle;
