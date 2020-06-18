import React, { useRef, useState, useContext } from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";

import LoginContext from "../components/shared/Login/LoginContext";
import LoginButton from "../components/shared/Login/LoginButton";
import { GET_PRACTICE_PAGE, UPDATE_PRACTICE } from "../graphql";
import PageIntro from "../components/practicePage/PageIntro";
import PageMenu from "../components/practicePage/PageMenu";
import PageBody from "../components/practicePage/PageBody";
import Loading from "../components/shared/QueryState/Loading.js";
import QueryError from "../components/shared/QueryState/QueryError";
import RichMarkdownEditor from "../components/shared/Editor/RichMarkdownEditor";
import { StartEditingButton, EditingButtons } from "../components/practicePage/PageIntro/EditControls";

const useStyles = makeStyles((theme) => ({
  alignComponentContent: {
    direction: "column",
    justify: "flex-start",
    alignItems: "flex-start",
  },
  whiteColor: {
    backgroundColor: theme.palette.common.white,
  },
  trueWhiteColor: {
    backgroundColor: theme.palette.common.true_white,
  },
  pageIntro: {
    paddingTop: theme.spacing(6),
  },
  loginBox: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: theme.spacing(3),
  },
  titleTextField: {
    width: "54%",
  },
  subtitleTextField: {
    width: "50%",
  },
  titleInput: {
    ...theme.typography.h1,
  },
  subtitleInput: {
    ...theme.typography.subtitle1,
  }
}));

function reducer(state, action) {
  switch (action.type) {
  case "titleUpdate":
    state.title = action.content;
    return state;
  case "subtitleUpdate":
    state.subtitle = action.content;
    return state;
  case "whatIsUpdate":
    state.whatIs = action.content;
    return state;
  case "whyDoUpdate":
    state.whyDo = action.content;
    return state;
  case "howToUpdate":
    state.howTo = action.content;
    return state;
  case "cancelUpdates":
    return {
      title: action.title,
      subtitle: action.subtitle,
      ...action.body
    };
  default:
    throw new Error();
  }
};

export default function PracticePageContent(props) {
  // State
  const [editing, setEditing] = useState();
  const loggedIn = useContext(LoginContext);
  const [state, dispatch] = React.useReducer(reducer, {}, () => ({
    title: "",
    subtitle: "",
    whatIs: "",
    whyDo: "",
    howTo: ""
  }));

  // Styles
  const classes = useStyles();

  // Refs
  const whatIsRef = useRef(null);
  const mediaRef = useRef(null);
  const whyDoRef = useRef(null);
  const howToRef = useRef(null);
  const resourceRef = useRef(null);
  const amaRef = useRef(null);
  const pageRefs = { whatIsRef, mediaRef, whyDoRef, howToRef, resourceRef, amaRef };

  // GraphQL
  const [updatePractice] = useMutation(UPDATE_PRACTICE);
  const { name: slug } = props;
  const { loading, error, data } = useQuery(GET_PRACTICE_PAGE, {
    variables: { slug },
  });

  if (loading) return <Loading />;
  if (error) return <QueryError err={error} />;

  // Handler Functions
  const handleEdit = () => {
    setEditing(!editing);
    dispatch({
      type: "cancelUpdates",
      title: data.practices[0].title,
      subtitle: data.practices[0].subtitle,
      body: data.practices[0].body
    });
  };

  const handleSaveEdits = () => {
    updatePractice({
      variables: {
        practiceId: data.practices[0].id,
        title: state.title,
        subtitle: state.subtitle,
        whatIs: state.whatIs,
        whyDo: state.whyDo,
        howTo: state.howTo,
      }
    });
    setEditing(false);
  };

  // Composition
  const loggedInEditing = () => {
    if (loggedIn && editing) {
      return (<EditingButtons handleEdit={handleEdit} handleSaveEdits={handleSaveEdits} />);
    } else if (loggedIn && !editing) {
      return (<StartEditingButton handleEdit={handleEdit} />);
    } else {
      return "";
    }
  };

  const titleEdit = (
    <TextField
      className={classes.titleTextField}
      InputProps={{ classes: { input: classes.titleInput } }}
      defaultValue={data.practices[0].title}
      onChange={(event) => dispatch({ type: "titleUpdate", content: event.target.value }) }
    />
  );

  const subtitleEdit = (
    <TextField
      className={classes.subtitleTextField}
      InputProps={{ classes: { input: classes.subtitleInput } }}
      defaultValue={data.practices[0].subtitle}
      onChange={(event) => dispatch({ type: "subtitleUpdate", content: event.target.value }) }
    />
  );

  const editors = {
    whatIsEditor: () => (
      <RichMarkdownEditor
        source={data.practices[0].body.whatIs}
        handleChange={(callback) => dispatch({ type: "whatIsUpdate", content: callback() }) }
      />
    ),

    whyDoEditor: () => (
      <RichMarkdownEditor
        source={data.practices[0].body.whyDo}
        handleChange={(callback) => dispatch({ type: "whyDoUpdate", content: callback() }) }
      />
    ),

    howToEditor: () => (
      <RichMarkdownEditor
        source={data.practices[0].body.howTo}
        handleChange={(callback) => dispatch({ type: "howToUpdate", content: callback() }) }
      />
    ),
  };

  return (
    <>
      <Box className={classes.trueWhiteColor}>
        <Box display="flex" className={classes.whiteColor}>
          <Box className={classes.loginBox}>
            <LoginButton
              loggedIn={props.loggedIn}
              navigate={props.navigate}
              redirect={`/practice/${data.practices[0].slug}`}
            />
          </Box>
          <Grid container className={classes.alignComponentContent}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8} className={classes.pageIntro}>
              <PageIntro
                practiceId={data.practices[0].id}
                title={data.practices[0].title}
                tags={data.practices[0].tags}
                subtitle={data.practices[0].subtitle}
                authors={data.practices[0].authors}
                createdAt={data.practices[0].createdAt}
                updatedAt={data.practices[0].updatedAt}
                imgCount={data.practices[0].mediaGallery.length}
                questions={data.practices[0].ama.length}
                upvotes={data.practices[0].upvotes}
                editing={editing}
                titleEdit={titleEdit}
                subtitleEdit={subtitleEdit}
              >
                {loggedInEditing()}
              </PageIntro>
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Box>
        <Divider/>
        <Box display="flex">
          <Grid container className={classes.alignComponentContent}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <PageMenu { ...pageRefs } />
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Box>
        <Divider/>

        <Box display="flex">
          <Grid container className={classes.alignComponentContent}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <PageBody
                practiceId={data.practices[0].id}
                title={data.practices[0].title}
                body={data.practices[0].body}
                mediaGallery={data.practices[0].mediaGallery}
                resources={data.practices[0].resources}                
                ama={data.practices[0].ama}
                whatIsRef={whatIsRef}
                mediaRef={mediaRef}
                whyDoRef={whyDoRef}
                howToRef={howToRef}
                resourceRef={resourceRef}
                amaRef={amaRef}
                editing={editing}
                {...editors}
              />
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
