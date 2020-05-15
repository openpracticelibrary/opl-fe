import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import {makeStyles} from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    space: {
        paddingRight: theme.spacing(3),
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: theme.palette.common.brown_grey
    },
}));

export default function PhotoAndName() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box>
                <ListItem disableGutters className={classes.space}>
                    <ListItemAvatar>
                        <Avatar className={classes.small}>
                            <ImageIcon fontSize='small'/>
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