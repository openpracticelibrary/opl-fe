import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRACTICES } from "../graphql";
import { Grid, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import PracticeCard from "../components/shared/PracticeCards/PracticeCardBase";

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
  practicesPane: {
    display: "flex",
    flexDirection: "center",
    paddingLeft: theme.spacing(10),
    width: "100%",
    backgroundColor: "#ffffff",
    paddingTop: 20,
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
        <Typography align="center" variant={"h1"}>
          Explore the library{" "}
          <span role="img" aria-label="library">
            📚
          </span>
        </Typography>
      </Grid>
      <Divider />
      <Grid
        container
        direction="row"
        justify="space-around"
        className={classes.practicesPane}
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


