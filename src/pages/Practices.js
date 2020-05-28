import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";
import { Typography, Grid, Divider } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";

import { GET_PRACTICE_LIST } from "../graphql";
import PracticeCard from "../components/shared/PracticeCards";
// import PracticeCardDetails from "../components/shared/PracticeCards/PracticeCardDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(1),
    width: "100%",
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
    display: "flex",
    flexDirection: "center",
    paddingLeft: theme.spacing(10),
    width: "100%",
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
        <Typography align="center" variant={"h1"}>
          Explore the library{" "}
          <span role="img" aria-label="library">
            📚
          </span>
        </Typography>
      </Grid>
      <Divider />
      <Grid
        className={classes.practiceList}
        container
        direction="row"
        justify="space-around"
      >
        {data.practices.map((p) => (
          <PracticeCard
            key={p.id}
            practiceId={p.id}
            practiceTitle={p.title}
            coverImage={p.coverImage}
            tags={p.tags}
            slug={p.slug}
            subtitle={p.subtitle}
            mediaGallery={p.mediaGallery}
            ama={p.ama}
            upvotes={p.upvotes}
          />
        ))}
      </Grid>
    </>
  );
}
