import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


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

    fixedHeight: {
        height: 50,
    },

 }));

export default function Footer() {
    const classes = useStyles();
    
    return(
        
            <footer className={classes.footer}>
                 <List className={classes.listItem}>
                    <Link>
                        <ListItemText primary="ABOUT US"/> 
                    </Link>
                    <Link>
                        <ListItemText primary="JOIN BETA"/>
                    </Link>
                    <Link>
                        <ListItemText primary="MEETUP"/>
                    </Link>
                    <Link>
                        <ListItemText primary="GITHUB"/>
                    </Link>
                    <Link>
                        <ListItemText primary="PODCAST"/>
                    </Link>   
                </List>

{/*
                <div style={{ width: '100%' }}>
                    <Box display="flex" p={1} bgcolor="background.paper">
                        {"I'm a flexbox container!"}
                    </Box>
                </div>

*/}

{/*
                <div>
                    <Paper elevation={0}>
                     <Typography>I'm footer.I'm footer.</Typography>   
                    </Paper>
                   
                </div>
*/}    
               <Container>
               
                  I'm footer.I'm footer.I'm footer.I'm footer.I'm footer.I'm footer.I'm footer.I'm footer.I'm footer.I'm footer.I'm footer.I'm footer.
                    
                </Container>   
            </footer>
    );
}