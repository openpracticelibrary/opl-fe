import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import Avatars from './Avatars';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'centre',
    },
    smallText: {
        color: theme.palette.text.light_grey
    },
    date: {
        padding: theme.spacing(1, 6),
    }
}));

export default function ContributedBy() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Typography className={classes.smallText} variant="overline">
                    Contributed by
                </Typography>

                <Box className={classes.row}>
                    <Avatars/>
                    <Avatars/>
                    <Box className={classes.date}>
                        <Typography className={classes.smallText} variant="overline">
                            Published May 4, 2020 | Last edited June 8, 2020
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}