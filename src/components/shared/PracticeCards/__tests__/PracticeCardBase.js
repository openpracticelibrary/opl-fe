import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PracticeCardBase from "../PracticeCardBase";

const mockPracticeCardProps = {
  practiceId: "5ec55c99d36579001355faae",
  practiceTitle: "Event Storming",
  coverImage:
    "https://openpracticelibrary.github.io/opl-media/images/eventstormtile.jpeg",
  tags: [
    {
      tag: "discovery",
    },
    {
      tag: "value",
    },
  ],
  upvotes: 76,
  updatedAt: "2020-05-27T20:24:29.223Z",
  slug: "event-storming",
};

it("should render the practice card with props", async () => {
  const { getByText } = render(
    <PracticeCardBase {...mockPracticeCardProps} />
  );
  expect(getByText("Event Storming")).toBeInTheDocument();

  const renderedTags = mockPracticeCardProps.tags.map(
    (t) => `#${t.tag}`
  );
  expect(getByText(renderedTags[0])).toBeInTheDocument();
  expect(getByText(renderedTags[1])).toBeInTheDocument();
});
