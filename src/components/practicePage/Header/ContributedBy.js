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
        padding: theme.spacing(1),
        alignItems: 'centre',
    },
    date: {
        padding: theme.spacing(2),
    }
}));

export default function ContributedBy() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Typography variant={"overline"}>
                    Contributed by
                </Typography>

                <Box className={classes.row}>
                    <Box>
                        <Avatars/>
                    </Box>
                    <Box flexGrow={1}>
                        <Avatars/>
                    </Box>
                    <Box className={classes.date}>
                        Published May 4, 2020 | Last edited June 8, 2020
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}