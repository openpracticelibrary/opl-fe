import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/core";
import PracticeCard from "./PracticeCard";
import ComponentLoading from "../QueryState/ComponentLoading";

const PracticeCardGrid = (props) => {

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !props.onLoadMore) return;
    props.onLoadMore(props.page);
  }

  if (props.loading && !props.practices) return <ComponentLoading />;
  return (
    <SimpleGrid
      columns={{ xs: 1, md: 3, lg: 4 }}
      spacing={2}
      maxW={1300}
      data-testid="practicecardgrid"
    >
      {props.practices.map((practice) => (
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
      {props.loading && <ComponentLoading />}
    </SimpleGrid>
  );
};

export default PracticeCardGrid;
