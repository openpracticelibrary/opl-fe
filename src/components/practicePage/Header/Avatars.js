import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Box from '@material-ui/core/Box';


export default function Avatars() {

    return (
        <React.Fragment>
            <Box>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar
                            alt="image of contributor"
                            src="/static/images/avatar/1.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText secondary='First Lastname'/>
                </ListItem>
            </Box>
        </React.Fragment>
    );
}