import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import Avatars from './Avatars';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'left',
    },
    smallText: {
        color: theme.palette.text.light_grey
    },
    date: {
        padding: theme.spacing(1.75, 6),
    }
}));

export default function ContributedBy(props) {
    const classes = useStyles();
    const formatDate = date => {
      return moment(date).format('MMMM D, YYYY');
    };

    return (
      <React.Fragment>
        <Box className={classes.root}>
          <Typography className={classes.smallText} variant="overline">
              Contributed by
          </Typography>

          <Box className={classes.row}>
            { props.authors.map( author => (
              <Avatars
                key={author.id}
                authorName={ `${author.firstName} ${author.lastName}` }
                authorLink={ author.mediaLink }
              />
            ))}
            <Box className={classes.date}>
                <Typography className={classes.smallText} variant="overline">
                    Published { formatDate(props.createdAt) } | Last edited { formatDate(props.updatedAt) }
                </Typography>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    );
}
