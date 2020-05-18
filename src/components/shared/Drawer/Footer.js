
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import LaunchIcon from '@material-ui/icons/Launch';
import RockIcon from '../../../assets/icons/RockIcon.js'
import BetaIcon from '../../../assets/icons/BetaIcon.js'
import NewTabIcon from '../../../assets/icons/NewTabIcon.js'
import PropTypes from "prop-types";
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        
      },
 }));


function FooterList (props){
    const preventDefault = (event) => event.preventDefault();
    return(
        <React.Fragment>
            <Box display="flex" p={1}>                 
                {props.children}                         
                <Link href={props.link} onClick={preventDefault} color="inherit">
                    <Typography variant="button"> {props.text} </Typography> 
                </Link>
            </Box>
        </React.Fragment>
     );   
}



export default function Footer() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    
    return(
        <footer className={classes.footer}>
        <Box>  
            <Box pb={1}>              
                <FooterList link="#" text="ABOUT US">
                        <RockIcon />
                </FooterList>
                <FooterList link="#" text="JOIN BETA">
                        <BetaIcon />
                </FooterList>
                <FooterList link="#" text="MEETUP">
                        <NewTabIcon />
                </FooterList>
                <FooterList link="#" text="GITHUB">
                        <NewTabIcon />
                </FooterList>
                <FooterList link="#" text="PODCAST">
                        <NewTabIcon />
                </FooterList>
            </Box>
            <Box display="flex" bgcolor="yellow">
                <Box>
                    <Box mx="auto" my="auto" p={1} >
                        I1
                    </Box>
                    <Box mx="auto" my="auto" p={1} >
                        I2
                    </Box>
                </Box>
                <Box p={1} textAlign="justify" bgcolor="cyan">              
                    <Typography variant="caption">   Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license. Icons by The Noun Project. </Typography>
                </Box>
            </Box> 
        </Box>
        </footer>
    );
}