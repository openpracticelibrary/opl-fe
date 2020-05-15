import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

export default function Avatars(props) {

    return (
        <React.Fragment>
            <Box>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar
                            alt={ props.authorName }
                            src="/static/images/avatar/1.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText secondary={ props.authorName } />
                </ListItem>
            </Box>
        </React.Fragment>
    );
}
