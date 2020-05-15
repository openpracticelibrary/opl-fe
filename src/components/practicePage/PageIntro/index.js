import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import TitleAndSubtitle from './TitleAndSubtitle';
import ContributedBy from './ContributedBy';
import Collection from './Collection';

const useStyles = makeStyles((theme) => ({

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    row: {
        display:'flex',
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
    container:{
        marginLeft: theme.spacing(2),
    }
}));

export default function PageIntro() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container className={classes.container}>
                <main className={classes.content}>
                    <TitleAndSubtitle/>
                    <Box className={classes.row}>
                        <ContributedBy />
                    </Box>
                    <Box className={classes.row}>
                        <Collection />
                    </Box>

                </main>
            </Container>
        </React.Fragment>
    );
}