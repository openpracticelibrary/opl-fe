import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
    space: {
        padding: theme.spacing(1),
    }
}));

export default function TitleAndSubtitle() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.space}>
                    <Typography variant={"h1"}>
                        Practice Title Lorem Ipsum
                    </Typography>
                </Box>
                <Box className={classes.space}>
                    <Typography variant={"subtitle1"}>
                        Subtext lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
};
