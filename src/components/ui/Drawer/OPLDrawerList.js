import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function OPLDrawerList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <List
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    PRACTICES
                </ListSubheader>
            }
        >
            <ListItem button>
                <ListItemIcon>
                    <SendIcon/>
                </ListItemIcon>
                <ListItemText primary={props.item1}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <ListItemText primary={props.item2}/>
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary={props.item3}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary={props.subitem1}/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary={props.subitem2}/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary={props.subitem3}/>
                    </ListItem>
                </List>
            </Collapse>
        </List>

    );
};