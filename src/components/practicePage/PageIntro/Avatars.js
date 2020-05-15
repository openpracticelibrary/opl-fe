import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
    space: {
        paddingRight: theme.spacing(3),
    },
}));

export default function Avatars() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box>
                <ListItem disableGutters className={classes.space}>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <Typography variant="body1">
                        First Lastname
                    </Typography>
                </ListItem>
            </Box>
        </React.Fragment>
    );
}