import React from "react";
import PageIntro from "../components/practicePage/PageIntro";
import {makeStyles} from "@material-ui/core/styles";
import PageMenu from "../components/practicePage/PageMenu";
import PageBody from "../components/practicePage/PageBody";
import Grid from "@material-ui/core/Grid";
import {useQuery} from "@apollo/react-hooks";
import {GET_PRACTICE_PAGE} from "../graphql";
import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  alignComponentContent: {
    direction: "column",
    justify: "flex-start",
    alignItems: "flex-start",
  },
  color: {
    backgroundColor: theme.palette.common.white,
  }
}));

export default function PracticePageContent(props) {
  const classes = useStyles();

  const {name: slug} = props;
  const {loading, error, data} = useQuery(GET_PRACTICE_PAGE, {
    variables: {slug},
  });

  // TODO: Use loading bar/circle
  if (loading) return <p>Loading...</p>;
  // TODO: Create 404 page
  if (error) return `Error! ${error}`;

  return (
    <>
      <Box display="flex" className={classes.color}>
        <Grid container className={classes.alignComponentContent}>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <PageIntro
              practiceId={data.practices[0].id}
              title={data.practices[0].title}
              subtitle={data.practices[0].subtitle}
              authors={data.practices[0].authors}
              createdAt={data.practices[0].createdAt}
              updatedAt={data.practices[0].updatedAt}
              imgCount={data.practices[0].mediaGallery.length}
              questions={data.practices[0].ama.length}
              upvotes={data.practices[0].upvotes}
            />
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </Box>

      <Divider/>
      <Box display="flex">
        <Grid container className={classes.alignComponentContent}>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <PageMenu/>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </Box>
      <Divider/>

      <Box display="flex">
        <Grid container className={classes.alignComponentContent}>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <PageBody
              title={data.practices[0].title}
              body={data.practices[0].body}
              mediaGallery={data.practices[0].mediaGallery}
              resources={data.practices[0].resources}
              ama={data.practices[0].ama}
            />
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
