import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import TitleAndSubtitle from './TitleAndSubtitle'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function PracticeTitle() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <main className={classes.content}>
                    <TitleAndSubtitle />
                    <Box display="flex" p={1} m={1} bgcolor="pink" alignItems="center">
                        <Box p={1} bgcolor='grey.200' flexGrow={1}>
                            <Typography variant={"overline"}>
                                Contributed by
                            </Typography>
                            <Box display="flex" flexDirection="row" bgcolor="yellow">
                                <Box>
                                    <ListItem key='test'>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="image of contributor"
                                                src="/static/images/avatar/1.jpg"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText id='testContributor1' primary='Person number1'/>
                                    </ListItem>
                                </Box>
                                <Box>
                                    <ListItem key='test'>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="image of contributor"
                                                src="/static/images/avatar/1.jpg"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText id='testContributor1' primary='Person number2'/>
                                    </ListItem>
                                </Box>
                            </Box>
                        </Box>
                        <Box p={1} bgcolor='grey.400'>
                            Published May 4, 2020 | Last edited June 8, 2020
                        </Box>
                    </Box>

                </main>
            </Container>
        </React.Fragment>
    );
}