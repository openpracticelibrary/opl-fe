import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/index";
import PhotoAndName from './PhotoAndName';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    space: {
        marginLeft: theme.spacing(7),
        alignContent: 'stretch'
    }
}));

export default function ContributedBy() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container direction="column"
                  justify="center"
                  alignItems="flex-start"
                  className={classes.root}
            >
                <Grid item>
                    <Typography variant="overline">
                        Contributed by
                    </Typography>
                </Grid>

                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <PhotoAndName/>
                        </Grid>
                        <Grid item>
                            <PhotoAndName/>
                        </Grid>
                        <Grid item className={classes.space}>
                            <Typography variant="overline">
                                Published May 4, 2020 | Last edited June 8, 2020
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}