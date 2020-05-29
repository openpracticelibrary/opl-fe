import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Box } from "@material-ui/core";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  practiceItemBound: {
    overflow: 'visible',
    height: 220,
    marginBottom: 13,
  },
  practiceItem: {
    backgroundColor: '#fff',
    
  },
  coverImage: {
    borderRadius: 10,
    height: 181,
    width: 295,
  },
  title: {
    marginBottom: -5,
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
  }
});

export default function PracticeCardBase(props) {
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
          transform: `${hovered ? 'scale(1.25,1.25)' : 'scale(1, 1)'}`,
          transition: `${hovered ? '0.5s' : '0.5s'}`,
          zIndex: `${hovered ? '10' : '1'}`,
          boxShadow: `${hovered ? '0px 2px 3px rgba(0,0,0,.4)' : '0px 0px 0px 0px'}`,
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
            transform: `${hovered ? 'scale(.92, .92)' : 'scale(1, 1)'}`,
            transition: `${hovered ? '0.5s' : '0.5s'}`,
          }}
        >
          <Typography className={classes.title}>{props.practiceTitle}</Typography>
          {props.tags.map((t, i) => (
            <Typography key={i} variant={"overline"}>
              #{t.tag}&nbsp;
            </Typography>
          ))}

          { hovered ? <Paper 
            elevation={0}
            style={{
              
              opacity: `${hovered ? 1 : 0 }`,
              transition: `${hovered ? '1.5s' : '1.5s'}`,
            }}
          >
            <div className={classes.subtitle} >{props.subtitle}</div>
          </Paper> : null }
        </Paper>
      </Box>
    </Box>
  );
}
