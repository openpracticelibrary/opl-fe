import React from 'react';
import PracticeHeader from '../components/practicePage/Header/index';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    titleBox: {
        display:"flex",
        justifyContent:"flex-start",
        backgroundColor: theme.palette.common.white,
        width: '100%',
    },

}));

export default function PracticePageContent() {
    const classes = useStyles();

    return (
        <Box className={classes.titleBox}>
            <PracticeHeader />
        </Box>
    )
};