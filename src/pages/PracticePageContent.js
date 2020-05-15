import React from 'react';
import PageIntro from '../components/practicePage/PageIntro/index';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import PageMenu from '../components/practicePage/PageMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
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

//TODO: Retrieve specific practice page content and pass through props to children
export default function PracticePageContent(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.titleBox}>
                  <PageIntro
                    title={ `Practice Title Lorem Ipsum -- ${props.name}` }
                    subtitle="Subtext lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                </Box>
                <Box>
                    <PageMenu sections={sections}/>
                </Box>
                { props.name }
            </Box>
        </React.Fragment>
    )
};
