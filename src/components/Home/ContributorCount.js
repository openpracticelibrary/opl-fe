import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import { useQuery } from "@apollo/react-hooks";

import ComponentLoading from "../shared/QueryState/ComponentLoading";
import ComponentQueryError from "../shared/QueryState/ComponentQueryError";
import { GET_CONTRIBUTORS } from "../../graphql";

const useStyles = makeStyles((theme) => ({
  contributorNum: {
    fontFamily: "Itim",
    fontSize: "200px",
    fontWeight: "normal",
    textAlign: "center",
    color: theme.palette.common.black,
  },
}));

const PracticeCount = (props) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_CONTRIBUTORS);
  if (loading) return <ComponentLoading />;
  if (error) return  <ComponentQueryError err={error} />;

  return (
    <div data-testid="contributorNum" className={classes.contributorNum}>{data.users.length}</div>
  )
};

export default PracticeCount;
