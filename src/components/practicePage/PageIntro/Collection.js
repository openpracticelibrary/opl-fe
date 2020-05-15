import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import CollectionItem from './CollectionItem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(1),
        alignItems: 'centre',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        '& > svg': {
            margin: theme.spacing(2),
        },
    }

}));

export default function Collection() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.row}>
                    <Typography variant="overline">
                        Collection
                    </Typography>
                    <Box>
                        <CollectionItem/>
                        <CollectionItem/>
                        <CollectionItem/>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}