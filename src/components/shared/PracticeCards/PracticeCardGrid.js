import React from "react";
import { Grid } from "@material-ui/core";
import PracticeCard from "./PracticeCard";

export default function PracticeCardGrid(props) {
    const {data} = props;
    return (    
    <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        alignItems="center"
        spacing={2}
      >
        {data.practices.map((practice) => (
          <PracticeCard
            key={practice.id}
            practiceId={practice.id}
            practiceTitle={practice.title}
            coverImage={practice.coverImage}
            tags={practice.tags}
            slug={practice.slug}
            subtitle={practice.subtitle}
            mediaGallery={practice.mediaGallery.length}
            ama={practice.ama.length}
            upvotes={practice.upvotes}
          />
        ))}
      </Grid>);
}