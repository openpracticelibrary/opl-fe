import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "inherit",
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
}));

export function TopListItems() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.root}>
      <ListSubheader>
        <Typography variant="overline"> PRACTICES </Typography>
      </ListSubheader>
      <ListItem button>
        <Typography variant="body2"> Please guide me </Typography>
      </ListItem>
      <ListItem button>
        <Typography variant="body2"> See everything </Typography>
      </ListItem>
      <ListItem button onClick={handleClick}>
        <Typography variant="body2"> By mobius loop </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={classes.nested}>
          <ListItem button>
            <Typography variant="body1"> Discovery </Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="body1"> Options </Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="body1"> Delivery </Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="body1"> Foundation </Typography>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export function BottomListItems() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListSubheader>
        <Typography variant="overline"> COMMUNITY </Typography>
      </ListSubheader>
      <ListItem button>
        <Typography variant="body2"> Find a mentor </Typography>
      </ListItem>
      <ListItem button>
        <Typography variant="body2"> Become a contributor </Typography>
      </ListItem>
      <ListItem button>
        <Typography variant="body2"> Latest happenings </Typography>
      </ListItem>
    </List>
  );
}
