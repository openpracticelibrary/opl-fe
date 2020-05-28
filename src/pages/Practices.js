import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { Grid, Divider } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";

import { GET_PRACTICE_LIST } from "../graphql";
import PracticeCard from "../components/shared/PracticeCards";
import AllPracticesHero from "../components/allPractices/AllPracticesHero";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    width: "100%",
    backgroundColor: theme.palette.common.true_white,
  },
  titleBox: {
    display: "flex",
    flexDirection: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.common.lighter_white,
    height: "24.25rem",
    width: "100%",
  },
  practiceList: {
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.common.true_white,
  },
}));

export default function Home() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_PRACTICE_LIST);

  if (loading) return <p>Loading...</p>;

  if (error) return `Error! ${error}`;

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.titleBox}
      >
        <AllPracticesHero />
      </Grid>
      <Divider />
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid className={classes.practiceList} item xs={9}>
          <Grid
            container
            direction="row"
            justify="center"
            alignContent="center"
            alignItems="center"
            spacing={2}
          >
            {data.practices.map((practice) => (
              <PracticeCard
                key={practice.id}
                practiceId={practice.id}
                practiceTitle={practice.title}
                coverImage={practice.coverImage}
                tags={practice.tags}
                slug={practice.slug}
                subtitle={practice.subtitle}
                mediaGallery={practice.mediaGallery.length}
                ama={practice.ama.length}
                upvotes={practice.upvotes}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
