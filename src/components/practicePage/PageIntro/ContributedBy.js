import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import PhotoAndName from './PhotoAndName';
import Grid from '@material-ui/core/Grid';

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
    date: {
        padding: theme.spacing(1.75, 6),
    }
}));

export default function ContributedBy() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Typography variant="overline">
                    Contributed by
                </Typography>

                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <PhotoAndName/>
                    </Grid>
                    <Grid item xs={3}>
                        <PhotoAndName/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="overline">
                            Published May 4, 2020 | Last edited June 8, 2020
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}