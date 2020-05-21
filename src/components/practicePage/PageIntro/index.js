import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles/index";
import Box from '@material-ui/core/Box';
import TitleAndSubtitle from './TitleAndSubtitle';
import ContributedBy from './ContributedBy';
import Collection from './Collection';
import BreadcrumbNav from './BreadcrumbNav';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  row: {
    display: 'flex',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
}));

export default function PageIntro(props) {
  const classes = useStyles();

  return (
      <>
        <CssBaseline/>
        <Container className={classes.root}>
          <main className={classes.content}>
            <BreadcrumbNav/>
            <TitleAndSubtitle title={props.title} subtitle={props.subtitle}/>
            <Box className={classes.row}>
              <ContributedBy
                  authors={props.authors}
                  createdAt={props.createdAt}
                  updatedAt={props.updatedAt}
              />
            </Box>
            <Box className={classes.row}>
              <Collection
                  practiceId={props.practiceId}
                  upvotes={props.upvotes}
                  imgCount={props.imgCount}
                  questions={props.questions}
                  handleLike={props.handleLike}
                  practice={props.practice}
              />
            </Box>

          </main>
        </Container>
      </>
  );
}
