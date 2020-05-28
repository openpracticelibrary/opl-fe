import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import { GET_PRACTICE_LIST } from "../../graphql";
import Practices from "../Practices";

const practices = [{
  __typename: "Practice",
  id: "5ec55c99d36579001355faae",
  title: "A title",
  subtitle: "A subtitle",
  coverImage: "https://fake.url/an_image.jpeg",
  tags: [
    {
      __typename: "Tags",
      tag: "discovery",
    },
    {
      __typename: "Tags",
      tag: "value",
    },
  ],
  upvotes: 42,
  updatedAt: "2020-05-27T20:24:29.223Z",
  slug: "event-storming",
  mediaGallery: [
    {
      __typename: "ComponentPracticeBodyMediaGallery",
      link: "https://a.picture",
    },
    {
      __typename: "ComponentPracticeBodyMediaGallery",
      link: "https://a.video.thumbnail",
    },
  ],
  ama: [
    {
      __typename: "Questions",
      question: "When do I do this?",
    },
  ],
}];

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICE_LIST,
    },
    result: { data: { practices } }
  },
];

it("renders with graphql response", async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <Practices />
    </MockedProvider>
  );
  // apollo hook renders while waiting for response
  expect(getByText("Loading...")).toBeInTheDocument();

  // wait for response to load
  await waitFor(() => expect(getByText("A title")).toBeInTheDocument())

  // make sure the card is on the page
  expect(getByTestId("base")).toBeInTheDocument();
});
