import React, { useRef, useState } from "react";

import LoginButton from "../shared/Login/LoginButton";
import PageIntro from "./PageIntro";
import PageMenu from "./PageMenu";
import PageBody from "./PageBody";
import TitleEditor from "./PageEdits/TitleEditor";
import BodyEditor from "./PageEdits/BodyEditor";
import { StartEditingButton, EditingButtons } from "./PageIntro/EditControls";
import backgroundImage from "../shared/utilities/microBackgrounds";

import { Container, Box } from '@material-ui/core';
import OplBox from "../shared/components/OplBox";

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
}

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
    coverImage,
    mediaGallery,
    ama,
    resources,
    createdAt,
    updatedAt,
  } = data;

  // Styles
  const background = backgroundImage(tags);

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

  const pageMenuData = { practiceId, upvotes, coverImage }

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
        practiceId: practiceId,
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
  const LoggedInEditing = () => {
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
      <TitleEditor
        value={data.title}
        dispatch={(event) => dispatch({ type: "titleUpdate", content: event.target.value }) }
      />
    ),

    subtitleEdit: (
      <TitleEditor
        fullWidth
        multiline
        subtitle
        value={data.subtitle}
        dispatch={(event) => dispatch({ type: "subtitleUpdate", content: event.target.value }) }
      />
    ),
  };

  const bodyEditors = {
    whatIsEditor: (
      <BodyEditor
        source={data.body.whatIs}
        dispatch={(callback) => dispatch({ type: "whatIsUpdate", content: callback() })}
      />
    ),

    whyDoEditor: (
      <BodyEditor
        source={data.body.whyDo}
        dispatch={(callback) => dispatch({ type: "whyDoUpdate", content: callback() })}
      />
    ),

    howToEditor: (
      <BodyEditor
        source={data.body.howTo}
        dispatch={(callback) => dispatch({ type: "howToUpdate", content: callback() })}
      />
    ),
  };

  return (
    <>
      <OplBox
        display="flex"
        bg={background}
      >
        <LoginButton
          navigate={navigate}
          redirect={`/practice/${data.slug}`}
        />
        <Container maxWidth="md">
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="baseline">
            <LoggedInEditing />
            <PageIntro
              editing={editing}
              {...pageIntroData}
              {...introEditors}
            />
          </Box>
        </Container>
      </OplBox>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="sticky"
        top={0}
        bgcolor="white"
        borderTop="1px solid rgba(0, 0, 0, 0.12)"
        borderBottom="1px solid rgba(0, 0, 0, 0.12)"
        zIndex={1001}
        py={1}
      >
        <PageMenu {...pageMenuData} { ...pageRefs } />
      </Box>

      <Container maxWidth="md">
        <PageBody
          editing={editing}
          {...pageBodyData}
          {...pageRefs}
          {...bodyEditors}
        />
      </Container>
    </>
  );
}

export default PracticePage;
