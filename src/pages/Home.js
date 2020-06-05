import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import { useQuery } from "@apollo/react-hooks";
import Box from '@material-ui/core/Box';
import { GET_CURATED_PRACTICES } from '../graphql';
import { Divider } from "@material-ui/core";
import PracticeCardGrid from "../components/shared/PracticeCards/PracticeCardGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.common.white,
    width: '100%',
  }
}));

export default function Home() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_CURATED_PRACTICES, {variables: {limit: 8}});
  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;
  console.log(data.practices);

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.titleBox}>
          <h2>Welcome to the Open Practice Library</h2>
        </Box>
      </Box>
      <Divider />
      <PracticeCardGrid data={data}/>
    </>
  )
};

