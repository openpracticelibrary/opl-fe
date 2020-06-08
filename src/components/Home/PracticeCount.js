import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import { useQuery } from "@apollo/react-hooks";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_PRACTICE_COUNT } from "../../graphql";

const useStyles = makeStyles((theme) => ({
  practiceNum: {
    fontFamily: "Itim",
    fontSize: "200px",
    fontWeight: "normal",
    textAlign: "center",
    color: theme.palette.common.black,
  },
}));

const PracticeCount = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_PRACTICE_COUNT);
  if (loading) return <ComponentLoading />;
  if (error) return <ComponentQueryError err={error} />;

  return (
    <div data-testid="practiceNum" className={classes.practiceNum}>{data.practicesConnection.aggregate.totalCount}</div>
  )
};

export default PracticeCount;
