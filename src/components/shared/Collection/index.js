import React from "react";
import { AmaIcon, CameraIcon, FilledHeartIcon } from "../../../assets/icons";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_PRACTICE } from "../../../graphql/";

import { Box } from "@material-ui/core";
import OplTypography from "../components/OplTypography";

const Collection = (props) => {
  const [likePractice] = useMutation(LIKE_PRACTICE);

  const [upvoteNotClicked, setUpvoteNotClicked] = React.useState(true);

  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: { practiceId: props.practiceId, upvotes: newUpvotes },
    });
    setUpvoteNotClicked(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      py={props.alignment}
    >
      {props.children}
      {upvoteNotClicked ? (
        <OplTypography
          fontWeight="bold"
          variant="subtitle1"
          data-testid="heartIcon"
          onClick={handleLike}
        >
          <FilledHeartIcon fill={props.fill} /> {props.upvotes}{" "}
        </OplTypography>
      ) : (
        <OplTypography
          fontWeight="bold"
          variant="subtitle1"
          data-testid="heartIcon"
        >
          <FilledHeartIcon fill="#DDDDDD"/> {props.upvotes}{" "}
        </OplTypography>
      )}

      <OplTypography
        fontWeight="bold"
        variant="subtitle1"
        data-testid="cameraIcon"
        px={props.spacing}
      >
        <CameraIcon fill={props.fill} /> {props.imgCount}{" "}
      </OplTypography>
      <OplTypography
        fontWeight="bold"
        variant="subtitle1"
        data-testid="questionIcon"
      >
        <AmaIcon fill={props.fill} /> {props.questions}{" "}
      </OplTypography>
    </Box>
  );
};

export default Collection;
