import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_PRACTICES } from "../graphql";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import PracticeCard from "../components/shared/PracticeCards/PracticeCard";
import AllPracticesHero from "../components/allPractices/AllPracticesHero";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(1),
    width: "100%",
    paddingTop: 27,
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
  practicesPane: {
    display: "flex",
    flexDirection: "center",
    paddingLeft: theme.spacing(10),
    width: "100%",
    padding: theme.spacing(2, 0),
  },
}));

export default function Practices() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_PRACTICES);
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
