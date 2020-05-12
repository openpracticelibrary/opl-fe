import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core/styles';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import MobiusLoopIcon from '@material-ui/icons/AllInclusive';
import ContributeIcon from '@material-ui/icons/AddToPhotos';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(8),
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
            <ListSubheader inset>PRACTICES</ListSubheader>
            <ListItem button>
                <ListItemIcon>
                    <TouchAppIcon/>
                </ListItemIcon>
                <ListItemText primary="Please guide me"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="See everything"/>
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <MobiusLoopIcon/>
                </ListItemIcon>
                <ListItemText primary="By mobius loop"/>
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
            <ListSubheader inset>COMMUNITY</ListSubheader>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Find a mentor"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ContributeIcon/>
                </ListItemIcon>
                <ListItemText primary="Become a contributor"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Latest happenings"/>
            </ListItem>
        </List>
    )
};