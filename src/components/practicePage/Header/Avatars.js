import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));

export default function Avatars() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        className={classes.small}
                        alt="image of contributor"
                        src="/static/images/avatar/1.jpg"
                    />
                </ListItemAvatar>
                <ListItemText primary='First Lastname'/>
            </ListItem>
        </React.Fragment>
    );
}