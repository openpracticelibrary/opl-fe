import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRACTICES } from "../graphql";
import { Grid } from "@material-ui/core";


export default function Practices() {
  const { loading, error, data } = useQuery(GET_PRACTICES);
  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
      >
        {data.practices.map((p) => (
          <div>{p.title}</div>
        ))}
      </Grid>
    </>
  );
}


