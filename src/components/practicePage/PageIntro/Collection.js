import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/index";
import CollectionItem from './CollectionItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: theme.spacing(1)
    },
}));

export default function Collection() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container>
                    <Grid item>
                        <Typography variant="overline">
                            Collection
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <CollectionItem/>
                        <CollectionItem/>
                        <CollectionItem/>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}