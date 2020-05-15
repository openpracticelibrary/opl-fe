import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import PropTypes from "prop-types";


export default function FooterOptions(props){
    const preventDefault = (event) => event.preventDefault();
    const {ImportIcon} = props;

     return(
        <React.Fragment>
            <Box display="flex" p={1}>                   
                {ImportIcon.map((value) => (
                
                    <Link href={value.link} onClick={preventDefault} color="inherit">
                        {value.text}
                    </Link>
                ))}         
            </Box>
        </React.Fragment>
     );   
}

FooterOptions.propTypes = {
    ImportIcon: PropTypes.array,
    icon: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
  };
