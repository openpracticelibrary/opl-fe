import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import TitleAndSubtitle from './TitleAndSubtitle';
import ContributedBy from './ContributedBy';

const useStyles = makeStyles((theme) => ({

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    row: {
        display:'flex',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        alignItems:"flex-end",
    },
    date: {
        padding: theme.spacing(1),
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <main className={classes.content}>
                    <TitleAndSubtitle/>
                    <Box className={classes.row}>
                        <ContributedBy />
                        <Box className={classes.date}>
                            Published May 4, 2020 | Last edited June 8, 2020
                        </Box>
                    </Box>
                </main>
            </Container>
        </React.Fragment>
    );
}