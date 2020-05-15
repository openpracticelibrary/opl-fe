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
    padding: theme.spacing(1),
  },
  titleBox: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: theme.palette.common.white,
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

  const [likePractice, { data: mutationData }] = useMutation(LIKE_PRACTICE);

  const handleLike = () => {
    const propUpvotes = data.practices[0].upvotes;
    const newUpvotes = propUpvotes + 1;
    likePractice({
      variables: { practiceId: data.practices[0].id, upvotes: newUpvotes },
    });
  };

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
            upvotes={data.practices[0].upvotes}
            imgCount={data.practices[0].mediaGallery.length}
            questions={data.practices[0].ama.length}
            handleLike={handleLike}
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
