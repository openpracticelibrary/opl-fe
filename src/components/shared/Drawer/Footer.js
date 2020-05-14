import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';

import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        
      },

    listItem: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },

   

 }));

export default function Footer() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return(
        <footer className={classes.footer}>
        <Box>  
            <Box pb={2}>
                <Box display="flex">
                    <Box p={1}>
                        <LaunchIcon fontSize="small" />
                    </Box>
                    <Box p={1}>
                        <Link href="#" onClick={preventDefault} color="inherit">
                            {'ABOUT US'}
                        </Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box p={1}>
                        <LaunchIcon fontSize="small" />
                    </Box>
                    <Box p={1}>
                        <Link href="#" onClick={preventDefault} color="inherit">
                            {'JOIN BETA'}
                        </Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box p={1}>
                        <LaunchIcon fontSize="small" />
                    </Box>
                    <Box p={1}>
                        <Link href="#" onClick={preventDefault} color="inherit">
                            {'MEETUP'}
                        </Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box p={1}>
                        <LaunchIcon fontSize="small" />
                    </Box>
                    <Box p={1}>
                        <Link href="#" onClick={preventDefault} color="inherit">                    
                            {'GITHUB'}
                        </Link>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box p={1}>
                        <LaunchIcon fontSize="small" />
                    </Box>
                    <Box p={1}>
                        <Link href="#" onClick={preventDefault} color="inherit">
                            {'PODCAST'}
                        </Link>   
                    </Box>
                </Box>
            </Box>

            <Box display="flex">
                <Box>
                    <Box mx="auto" my="auto" p={1} >
                        I1
                    </Box>
                    <Box mx="auto" my="auto" p={1} >
                        I2
                    </Box>
                </Box>
                <Box p={1} fontSize={7} textAlign="justify">              
                    {"Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license. Icons by The Noun Project."}
                </Box>        
            </Box> 
        </Box>
        </footer>
    );
}