import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Box } from "@material-ui/core";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  practiceItemBound: {
    overflow: 'visible',
    height: 220,
    margin: 10,
  },
  practiceItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  coverImage: {
    borderRadius: 10,
    height: 181,
    width: 295,
  },
  title: {
    marginBottom: -3,
  },
  subtitle: {
    width: 280,
    fontSize: 12,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.83,
    letterSpacing: .3,
    whiteSpace: 'normal',
  },
  cardCollection: {
    alignItems: "left",
  },
});

export default function PracticeCard(props) {
  const classes = useStyles();
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <Box
      className={classes.practiceItemBound}
      style={{
        zIndex: `${hovered ? '10' : '1'}`,
        transition: `${hovered ? '0.5s' : '0.5s'}`,
      }}
    >
      <Box
        className={classes.practiceItem}
        onClick={() => navigate(`/practice/${props.slug}`)}
        onMouseOut={() => setHovered(false)}
        onMouseOver={() => setHovered(true)}
        style={{
          transform: `${hovered ? 'scale(1.2,1.2)' : 'scale(1, 1)'}`,
          transition: `${hovered ? '0.5s' : '0.5s'}`,
          zIndex: `${hovered ? '10' : '1'}`,
          boxShadow: `${hovered ? '1px 2px 0px rgba(0,0,0,.2)' : '0px 0px 0px 0px'}`,
        }}
      >
        <Paper
          elevation={0}
          className={classes.coverImage}
        >
          <img
            alt={props.practiceTitle}
            src={props.coverImage}
            className={classes.coverImage}
          />
        </Paper>
        <Paper 
          elevation={0}
          style={{
            transform: `${hovered ? 'scale(.925, .925)' : 'scale(1, 1)'}`,
            transition: `${hovered ? '0.5s' : '0.5s'}`,
          }}
        >
          <Typography className={classes.title}>{props.practiceTitle}</Typography>
          {props.tags.map((t, i) => (
            <Typography key={i} variant={"overline"}>
              #{t.tag}&nbsp;
            </Typography>
          ))}

          { hovered ? 
            <Paper 
              elevation={0}
            >
              <div className={classes.subtitle} >{props.subtitle}</div>
            </Paper> : null }
        </Paper>
      </Box>
    </Box>
  );
}
