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
    contributors: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(1),
    },

}));

export default function ContributedBy() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Typography variant={"overline"}>
                    Contributed by
                </Typography>

                <Box className={classes.contributors}>
                    <Box>
                        <Avatars/>
                    </Box>
                    <Box>
                        <Avatars/>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}