import React from "react";
import PageIntro from "../components/practicePage/PageIntro";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PageMenu from "../components/practicePage/PageMenu";
import PageBody from "../components/practicePage/PageBody";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_PRACTICE_PAGE, LIKE_PRACTICE } from "../graphql";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  titleBox: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: theme.palette.common.lighter_white,
    width: "100%",
  },
}));

const sections = [
  { title: "What is it", url: "#whatis" },
  { title: "Media", url: "#" },
  { title: "Why do it", url: "#" },
  { title: "How to", url: "#howto" },
  { title: "Resources", url: "#" },
  { title: "AMA", url: "#" },
];

//TODO: Retrieve specific practice page content and pass through props to children
export default function PracticePageContent(props) {
  const classes = useStyles();

  const { name: slug } = props;
  const { loading, error, data } = useQuery(GET_PRACTICE_PAGE, {
    variables: { slug },
  });

  // TODO: Use loading bar/circle
  if (loading) return <p>Loading...</p>;
  // TODO: Create 404 page
  if (error) return `Error! ${error}`;

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.titleBox}>
          <PageIntro
            practiceId={data.practices[0].id}
            title={data.practices[0].title}
            subtitle={data.practices[0].subtitle}
            authors={data.practices[0].authors}
            createdAt={data.practices[0].createdAt}
            updatedAt={data.practices[0].updatedAt}
            imgCount={data.practices[0].mediaGallery.length}
            questions={data.practices[0].ama.length}
            practice={data.practices[0]}
          />
        </Box>
        <Box>
          <PageMenu sections={sections} />
        </Box>
        <PageBody
          title={data.practices[0].title}
          body={data.practices[0].body}
          mediaGallery={data.practices[0].mediaGallery}
          resources={data.practices[0].resources}
          ama={data.practices[0].ama}
        />
      </Box>
    </>
  );
}
