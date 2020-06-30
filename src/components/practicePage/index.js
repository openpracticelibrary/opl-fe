import React, { useRef, useState } from "react";
import { useTheme, Box, Flex, Input, Textarea } from "@chakra-ui/core";

import LoginButton from "../shared/Login/LoginButton";
import PageIntro from "./PageIntro";
import PageMenu from "./PageMenu";
import PageBody from "./PageBody";
import RichMarkdownEditor from "../shared/Editor/RichMarkdownEditor";
import { StartEditingButton, EditingButtons } from "./PageIntro/EditControls";
import blueDiagonals from "../../assets/icons/bluelines.svg";
import purpleGrid from "../../assets/images/graph-paper.svg";
import yellowRain from "../../assets/images/rain.svg";
import greenDots from "../../assets/images/polka-dots.svg";

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
    coverImage,
    mediaGallery,
    ama,
    resources,
    createdAt,
    updatedAt,
  } = data;

  // Styles
  const theme = useTheme();
  const backgroundImage = () => {
    const tagMatch = tags.map(t => t.tag.toLowerCase());
    if (tagMatch.includes('discovery')) {
      return `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.76) 70.4%, #FFFFFF 900%), url(${blueDiagonals})`;
    }
    if (tagMatch.includes('delivery')) {
      return `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.76) 70.4%, #FFFFFF 900%), url(${greenDots})`;
    }
    if (tagMatch.includes('options')) {
      return `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.76) 70.4%, #FFFFFF 900%), url(${yellowRain})`;
    }

    return `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.76) 70.4%, #FFFFFF 900%), url(${purpleGrid})`;
  };

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
      <Input
        {...theme.brand.editor.box}
        h="auto"
        w="auto"
        fontFamily="heading"
        fontSize="5xl"
        fontWeight="bold"
        defaultValue={data.title}
        onChange={(event) => dispatch({ type: "titleUpdate", content: event.target.value }) }
      />
    ),

    subtitleEdit: (
      <Textarea
        {...theme.brand.editor.box}
        w={["950px", "auto", "auto", "950px"]}
        resize="none"
        fontFamily="heading"
        fontSize="lg"
        defaultValue={data.subtitle}
        onChange={(event) => dispatch({ type: "subtitleUpdate", content: event.target.value }) }
      />
    ),
  };

  const bodyEditors = {
    whatIsEditor: (
      <Box {...theme.brand.editor.box}>
        <RichMarkdownEditor
          source={data.body.whatIs}
          handleChange={(callback) => dispatch({ type: "whatIsUpdate", content: callback() }) }
        />
      </Box>
    ),

    whyDoEditor: (
      <Box {...theme.brand.editor.box}>
        <RichMarkdownEditor
          source={data.body.whyDo}
          handleChange={(callback) => dispatch({ type: "whyDoUpdate", content: callback() }) }
        />
      </Box>
    ),

    howToEditor: (
      <Box {...theme.brand.editor.box}>
        <RichMarkdownEditor
          source={data.body.howTo}
          handleChange={(callback) => dispatch({ type: "howToUpdate", content: callback() }) }
        />
      </Box>
    ),
  };

  return (
    <>
      <Flex justify="space-around" bgImg={backgroundImage()}>
        <Box position="absolute" top="0" right="0" p={4}>
          <LoginButton
            navigate={navigate}
            redirect={`/practice/${data.slug}`}
          />
        </Box>
        <Flex justify="space-around" alignItems="baseline" alignContent="center">
          <Flex justify="flex-end">
            {loggedInEditing()}
          </Flex>
          <Box
            pt={12}
            mx={25}
            maxW={950}
            w={["950px", "auto", "auto", "950px"]}
          >
            <PageIntro
              editing={editing}
              {...pageIntroData}
              {...introEditors}
            >
            </PageIntro>
          </Box>
        </Flex>
      </Flex>

      <Flex
        position="sticky"
        top={0}
        zIndex={1001}
        bg="white"
        borderTop="1px solid rgba(0, 0, 0, 0.12)"
        borderBottom="1px solid rgba(0, 0, 0, 0.12)"
      >
        <PageMenu {...pageMenuData} { ...pageRefs } />
      </Flex>

      <Flex justify="space-around" align="center">
        <Box maxW="950px" mx={25}>
          <PageBody
            editing={editing}
            {...pageBodyData}
            {...pageRefs}
            {...bodyEditors}
          />
        </Box>
      </Flex>
    </>
  );
}

export default PracticePage;
