import React from 'react';
import PageIntro from '../components/practicePage/PageIntro/index';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import PageMenu from '../components/practicePage/PageMenu';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    titleBox: {
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: theme.palette.common.white,
        width: '100%',
    }
}));

const sections = [
    {title: 'What is it', url: '#'},
    {title: 'Media', url: '#'},
    {title: 'Why do it', url: '#'},
    {title: 'How to', url: '#'},
    {title: 'Resources', url: '#'},
    {title: 'AMA', url: '#'},
];

export default function PracticePageContent() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.titleBox}>
                    <PageIntro/>
                </Box>
                <Box>
                    <Divider/>
                    <PageMenu sections={sections}/>
                    <Divider/>
                </Box>
            </Box>
        </React.Fragment>
    )
};