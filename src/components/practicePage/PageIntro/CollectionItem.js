import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        marginLeft: theme.spacing(2),
        color: theme.palette.common.brownish_grey,
    }
}));

export default function CollectionItem() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.wrapIcon}>
                <ImageIcon/>
                <Typography variant='body1'>12</Typography>
            </Box>
        </React.Fragment>
    );
}