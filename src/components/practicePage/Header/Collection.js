import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';

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
    },
    smallText: {
        color: theme.palette.text.light_grey
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2)
    }

}));

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    );
}

export default function Collection() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.row}>
                    <Typography className={classes.smallText} variant="overline">
                        Collection
                    </Typography>
                    <Box>
                        <Typography variant="subtitle1" >
                            <Box className={classes.wrapIcon}>
                                <HomeIcon color="disabled"/> 12
                            </Box>
                            <Box className={classes.wrapIcon}>
                                <HomeIcon color="disabled"/> 12
                            </Box>
                            <Box className={classes.wrapIcon}>
                                <HomeIcon color="disabled"/> 12
                            </Box>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}