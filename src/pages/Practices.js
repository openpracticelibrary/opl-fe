import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRACTICES } from "../graphql";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles/index";
import PracticeCard from "../components/shared/PracticeCards/PracticeCardBase";

const useStyles = makeStyles((theme) => ({
  practicesPane: {
    display: "flex",
    flexDirection: "center",
    paddingLeft: theme.spacing(10),
    width: "100%",
    backgroundColor: theme.palette.common.true_white,
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
          />
        ))}
      </Grid>
    </>
  );
}


