import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import { LIKE_PRACTICE } from "../../../../graphql";
import PracticeCardDetails from "../PracticeCardDetails";

const mockPracticeCardProps = {
  practiceId: "5ec55c99d36579001355faae",
  practiceTitle: "A title",
  subtitle: "A subtitle",
  coverImage: "https://fake.url/an_image.jpeg",
  tags: [
    {
      tag: "discovery",
    },
    {
      tag: "value",
    },
  ],
  upvotes: 42,
  updatedAt: "2020-05-27T20:24:29.223Z",
  slug: "event-storming",
  mediaGallery: 2,
  ama: 1,
};

it("should render the practice detail card with props", async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={[]}>
      <PracticeCardDetails {...mockPracticeCardProps} />
    </MockedProvider>
  );
  expect(getByText("A title")).toBeInTheDocument();
  expect(getByText("A subtitle")).toBeInTheDocument();

  const cardMedia = getByTestId("detailCardImage");
  expect(cardMedia).toHaveStyle("background-image: url(https://fake.url/an_image.jpeg)");

  const renderedTags = mockPracticeCardProps.tags.map((t) => `#${t.tag}`);
  expect(getByText(renderedTags[0])).toBeInTheDocument();
  expect(getByText(renderedTags[1])).toBeInTheDocument();

  expect(getByText(`${mockPracticeCardProps.upvotes}`)).toBeInTheDocument();

  const pictures = mockPracticeCardProps.mediaGallery;
  expect(getByText(`${pictures}`)).toBeInTheDocument();

  const questions = mockPracticeCardProps.ama;
  expect(getByText(`${questions}`)).toBeInTheDocument();
});
