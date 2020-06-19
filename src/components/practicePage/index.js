import React, { useRef, useState } from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";

import LoginButton from "../shared/Login/LoginButton";
import PageIntro from "./PageIntro";
import PageMenu from "./PageMenu";
import PageBody from "./PageBody";
import RichMarkdownEditor from "../shared/Editor/RichMarkdownEditor";
import { StartEditingButton, EditingButtons } from "./PageIntro/EditControls";
import blueDiagonals from "../../assets/icons/bluelines.svg";

const useStyles = makeStyles((theme) => ({
  alignComponentContent: {
    alignItems: "flex-start",
  },
  whiteColor: {
    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.76) 70.4%, #FFFFFF 900%), url(${blueDiagonals})`,
  },
  trueWhiteColor: {
    backgroundColor: theme.palette.common.true_white,
  },
  pageIntro: {
    paddingTop: theme.spacing(6),
  },
  editButton: {
    paddingTop: theme.spacing(9),
    display: "flex",
    justifyContent: "flex-end",
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
  titleInput: {
    ...theme.typography.h1,
  },
  subtitleInput: {
    ...theme.typography.subtitle1,
  },
  editorStyle: {
    boxShadow: "inset 0 1px 3px 0 rgba(16,16,16,0.26)",
    borderRadius: "6px",
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1),
  },
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

const PracticePage = ({ data, updatePractice, loggedIn, navigate }) => {
  // State
  const [editing, setEditing] = useState();
  const [state, dispatch] = React.useReducer(reducer, {}, () => ({
    title: "",
    subtitle: "",
    whatIs: "",
    whyDo: "",
    howTo: ""
  }));

  // Data
  const {
    id: practiceId,
    title,
    subtitle,
    authors,
    body,
    tags,
    upvotes,
    mediaGallery,
    ama,
    resources,
    createdAt,
    updatedAt,
  } = data;

  // Styles
  const classes = useStyles();

  // Refs
  const whatIsRef = useRef(null);
  const mediaRef = useRef(null);
  const whyDoRef = useRef(null);
  const howToRef = useRef(null);
  const resourceRef = useRef(null);
  const amaRef = useRef(null);

  // Child props
  const pageRefs = {
    whatIsRef,
    mediaRef,
    whyDoRef,
    howToRef,
    resourceRef,
    amaRef
  };

  const pageIntroData = {
    practiceId,
    title,
    subtitle,
    tags,
    authors,
    createdAt,
    updatedAt,
    upvotes,
    imgCount: mediaGallery.length,
    questions: ama.length
  };

  const pageMenuData = { practiceId, upvotes }

  const pageBodyData = {
    practiceId,
    title,
    body,
    mediaGallery,
    ama,
    resources
  };

  // Handler Functions
  const handleEdit = () => {
    setEditing(!editing);
    dispatch({
      type: "cancelUpdates",
      title: data.title,
      subtitle: data.subtitle,
      body: data.body
    });
  };

  const handleSaveEdits = () => {
    updatePractice({
      variables: {
        practiceId: data.practiceId,
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

  const introEditors = {
    titleEdit: (
      <TextField
        variant="outlined"
        className={classes.titleTextField}
        InputProps={{ classes: { input: classes.titleInput, root: classes.editorStyle } }}
        defaultValue={data.title}
        onChange={(event) => dispatch({ type: "titleUpdate", content: event.target.value }) }
      />
    ),

    subtitleEdit: (
      <TextField
        variant="outlined"
        fullWidth
        multiline
        InputProps={{ classes: { input: classes.subtitleInput, root: classes.editorStyle } }}
        defaultValue={data.subtitle}
        onChange={(event) => dispatch({ type: "subtitleUpdate", content: event.target.value }) }
      />
    ),
  };

  const bodyEditors = {
    whatIsEditor: () => (
      <div className={classes.editorStyle}>
        <RichMarkdownEditor
          source={data.body.whatIs}
          handleChange={(callback) => dispatch({ type: "whatIsUpdate", content: callback() }) }
        />
      </div>
    ),

    whyDoEditor: () => (
      <div className={classes.editorStyle}>
        <RichMarkdownEditor
          source={data.body.whyDo}
          handleChange={(callback) => dispatch({ type: "whyDoUpdate", content: callback() }) }
        />
      </div>
    ),

    howToEditor: () => (
      <div className={classes.editorStyle}>
        <RichMarkdownEditor
          source={data.body.howTo}
          handleChange={(callback) => dispatch({ type: "howToUpdate", content: callback() }) }
        />
      </div>
    ),
  };

  return (
    <>
      <Box className={classes.trueWhiteColor}>
        <Box display="flex" className={classes.whiteColor}>
          <Box className={classes.loginBox}>
            <LoginButton
              navigate={navigate}
              redirect={`/practice/${data.slug}`}
            />
          </Box>
          <Grid container className={classes.alignComponentContent}>
            <Grid item xs={2} className={classes.editButton}>
              {loggedInEditing()}
            </Grid>
            <Grid item xs={8} className={classes.pageIntro}>
              <PageIntro
                editing={editing}
                {...pageIntroData}
                {...introEditors}
              >
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
              <PageMenu {...pageMenuData} { ...pageRefs } />
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
                editing={editing}
                {...pageBodyData}
                {...pageRefs}
                {...bodyEditors}
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

export default PracticePage;