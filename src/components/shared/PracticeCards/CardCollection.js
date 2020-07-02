import React from "react";
import { AmaIcon, CameraIcon, FilledHeartIcon } from "../../../assets/icons";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_PRACTICE } from "../../../graphql/";

import { Grid } from '@material-ui/core';
import OplTypography from "../components/OplTypography";

export default function CardCollection(props) {
  const [likePractice] = useMutation(LIKE_PRACTICE);

  const handleLike = () => {
    const originalLikes = props.upvotes;
    const newUpvotes = originalLikes + 1;
    likePractice({
      variables: { practiceId: props.practiceId, upvotes: newUpvotes },
    });
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      spacing={1}
    >
      <Grid item>
        <OplTypography
          fontWeight="bold"
          variant="subtitle1"
          data-testid="heartIcon"
          onClick={handleLike}
        >
          <FilledHeartIcon /> {props.upvotes}{" "}
        </OplTypography>
      </Grid>
      <Grid item>
        <OplTypography
          fontWeight="bold"
          variant="subtitle1"
          data-testid="cameraIcon"
        >
          <CameraIcon /> {props.imgCount}{" "}
        </OplTypography>
      </Grid>
      <Grid item>
        <OplTypography
          fontWeight="bold"
          variant="subtitle1"
          data-testid="questionIcon"
        >
          <AmaIcon /> {props.questions}{" "}
        </OplTypography>
      </Grid>
    </Grid>
  );
}
