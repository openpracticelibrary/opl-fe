import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({

    toolbarSecondary: {

        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: theme.palette.text.secondary,
    },
}));

export default function PageMenu(props) {
    const classes = useStyles();
    const {sections} = props;

    return (
        <React.Fragment>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section, i) => (
                  <Link
                        key={i}
                        href={section.url}
                        className={classes.toolbarLink}
                        variant={'overline'}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

PageMenu.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
