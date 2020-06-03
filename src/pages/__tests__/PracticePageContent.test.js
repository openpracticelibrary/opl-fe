import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import { GET_PRACTICE_PAGE } from "../../graphql";
import PracticePageContent from "../PracticePageContent";

const practices = [{
  __typename: "Practice",
  id: "5ec55c99d36579001355faae",
  title: "A title",
  subtitle: "A subtitle",
  coverImage: "https://fake.url/an_image.jpeg",
  authors: {
    id: "123",
    firstName: "testFirstName",
    lastName: "testLastName",
  },
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
      query: GET_PRACTICE_PAGE,
    },
    result: { data: { practices } }
  },
];

it("renders with graphql response", async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <PracticePageContent props={practices[0]}/>
    </MockedProvider>
  );
  // apollo hook renders while waiting for response
  expect(getByText("Loading...")).toBeInTheDocument();

  // wait for response to load
  await waitFor(() => expect(getByTestId("pageIntro")).toBeInTheDocument())
  await waitFor(() => expect(getByTestId("pageMenu")).toBeInTheDocument())
  await waitFor(() => expect(getByTestId("pageBody")).toBeInTheDocument())

});
