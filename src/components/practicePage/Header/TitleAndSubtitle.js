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
    title: {
        padding: theme.spacing(1),
    },
    subtitle: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary
    }
}));

export default function TitleAndSubtitle() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.title}>
                    <Typography variant={"h4"} gutterBottom>
                        <strong> Practice Title Lorem Ipsum </strong>
                    </Typography>
                </Box>
                <Box className={classes.subtitle}>
                    <Typography indent={"small"}>
                        Subtext lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
};
