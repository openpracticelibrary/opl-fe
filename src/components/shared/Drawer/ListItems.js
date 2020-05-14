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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(3),
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
            <ListSubheader>PRACTICES</ListSubheader>
            <ListItem button>

                <b>
                    {"Please guide me"}
                </b>
            </ListItem>
            <ListItem button>

                <b>
                    {"See everything"}
                </b>                
            </ListItem>
            <ListItem button onClick={handleClick}>
                
                <b>
                    {"By mobius loop"}
                </b>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              
                <List component="div" disablePadding className={classes.nested}>
                    <ListItem button>
                        <ListItemText primary="Discovery"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Options"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Delivery"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Foundation"/>
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
            <ListSubheader>COMMUNITY</ListSubheader>
            <ListItem button>
              
                <b>
                    {"Find a mentor"}
                </b>
            </ListItem>
            <ListItem button>
                
                <b>
                    {"Become a contributor"}
                </b>
            </ListItem>
            <ListItem button>
                
                <b>
                    {"Latest happenings"}
                </b>
            </ListItem>
        </List>
    )
};
