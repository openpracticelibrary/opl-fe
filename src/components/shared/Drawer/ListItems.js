import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(3),
    },
    smallText: {
        color: theme.palette.text.light_grey,
    },

    listText: {
        fontSize: 16,
        color: theme.palette.text.secondary,
    },
}));

export function TopListItems() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List className={classes.root}>
            <ListSubheader>
                <Typography className={classes.smallText} variant="overline"> PRACTICES </Typography>
            </ListSubheader>
            <ListItem button>
                <Typography className={classes.listText}>
                    <b> Please guide me </b>
                </Typography>
            </ListItem>
            <ListItem button>
                <Typography className={classes.listText}>
                    <b> See everything </b>   
                </Typography>             
            </ListItem>
            <ListItem button onClick={handleClick}>
                <Typography className={classes.listText}>
                    <b> By mobius loop </b>
                </Typography>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              
                <List component="div" disablePadding className={classes.nested}>
                    <ListItem button className={classes.listText}>
                        <ListItemText primary="Discovery" />
                    </ListItem>
                    <ListItem button className={classes.listText}>
                        <ListItemText primary="Options" />
                    </ListItem>
                    <ListItem button className={classes.listText}>
                        <ListItemText primary="Delivery" />
                    </ListItem>
                    <ListItem button className={classes.listText}>
                        <ListItemText primary="Foundation" />
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
                <Typography className={classes.smallText} variant="overline"> COMMUNITY </Typography>
            </ListSubheader>
            <ListItem button>
                <Typography className={classes.listText}>
                    <b> Find a mentor </b>
                </Typography>
            </ListItem>
            <ListItem button>
                <Typography className={classes.listText}>
                    <b> Become a contributor </b>
                </Typography>
            </ListItem>
            <ListItem button>
                <Typography className={classes.listText}>
                    <b> Latest happenings </b>
                </Typography>
            </ListItem>
        </List>
    )
};
